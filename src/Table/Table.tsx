import React from 'react'
import classnames from 'classnames'

import { TableProps, ColumnType } from './Table.types'

import './Table.scss'
import Spin from '../Spin'
import Checkbox from '../Checkbox/Checkbox'
import TableContext, { useTableContext } from './context'
import { PREFIX_CLASS } from '../constants'

// 格式化 columns
const formatColumns = (columns: ColumnType<any>[]) => {
  return columns.filter(item => !item.hide)
}

const SortableItem = ({
  item,
  itemIndex,
}: {
  item: any
  itemIndex: number
}) => {
  const {
    showNo,
    columns,
    onRow = () => {},
    getCount,
    countRender,
    showCheckbox,
    isChecked,
    isDisabled,
    onChangeCheckbox,
  } = useTableContext()

  const count = getCount(itemIndex)

  return (
    <tr {...onRow(item)}>
      {showCheckbox && (
        <td>
          <Checkbox
            checked={isChecked ? isChecked(item) : false}
            disabled={isDisabled ? isDisabled(item) : false}
            onChange={onChangeCheckbox ? onChangeCheckbox(item) : undefined}
          />
        </td>
      )}
      {showNo && <td>{countRender(count, item)}</td>}
      {columns.map((col, i) => {
        let content = col.dataIndex && item[col.dataIndex]
        content = col.render ? col.render(content, item, itemIndex) : content
        return (
          <td
            key={col.key || (col.dataIndex as string) || i}
            style={{ textAlign: col.align || 'left' }}
          >
            {content}
          </td>
        )
      })}
    </tr>
  )
}

function Table<T extends Record<string, any>>(props: TableProps<T>) {
  // 切换分页，要从外部重置checkedList
  const [innerCheckedList, setInnerCheckedList] = React.useState<T[]>([])

  const {
    dataSource,
    rowKey,
    showNo,
    pagination,
    loading,
    description = '暂无数据',
    onRow,
    className,
    countRender = count => count,
    checkedList,
    batch,
    disabledList,
    prefixCls = PREFIX_CLASS,
  } = props

  let { columns } = props

  columns = formatColumns(columns)

  React.useEffect(() => {
    if (
      typeof checkedList !== 'undefined' &&
      checkedList.length !== innerCheckedList.length
    ) {
      setInnerCheckedList(checkedList)
    }
  }, [innerCheckedList.length, checkedList])

  const getCount = React.useCallback(
    (index: number) => {
      const pageNo = pagination?.pageNo || 1
      const count =
        pageNo && pagination?.pageSize
          ? (pageNo - 1) * pagination?.pageSize + index + 1
          : index + 1
      return count
    },
    [pagination]
  )

  const showCheckbox = React.useMemo(() => {
    return batch && !!rowKey
  }, [batch, rowKey])

  const countColWidth = React.useMemo(() => {
    const paddingLeft = !showCheckbox ? 18 : 8
    const paddingRight = 8
    const maxCount = getCount(dataSource.length - 1)
    let num = String(maxCount).length * 10 + paddingLeft + paddingRight
    if (num < 50) {
      num = 50
    }
    return num
  }, [dataSource.length, getCount, showCheckbox])

  // 全选是否禁用
  const isDisabledAll = React.useMemo(() => {
    return dataSource.length - (disabledList?.length || 0) === 0
  }, [dataSource.length, disabledList?.length])

  // 全选是否选中
  const isCheckedAll = React.useMemo(() => {
    if (isDisabledAll) {
      return false
    }
    return (
      innerCheckedList.length ===
      dataSource.length - (disabledList?.length || 0)
    )
  }, [
    innerCheckedList.length,
    dataSource.length,
    disabledList?.length,
    isDisabledAll,
  ])

  // 复选框是否选中
  const isChecked = React.useCallback(
    (item: T) => {
      if (!rowKey) {
        return false
      }
      return !!innerCheckedList.find(
        checked => checked[rowKey] === item[rowKey]
      )
    },
    [innerCheckedList, rowKey]
  )

  // 复选框是否禁用
  const isDisabled = React.useCallback(
    (item: T) => {
      if (!rowKey || !disabledList) {
        return false
      }
      return !!disabledList.find(key => String(key) === String(item[rowKey]))
    },
    [disabledList, rowKey]
  )

  // 复选框选中
  const onChangeCheckbox = (item: T) => ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let list = innerCheckedList.filter(
      checked => checked[rowKey] !== item[rowKey]
    )
    if (target.checked) {
      list = [...list, item]
    }
    setInnerCheckedList(list)
    if (props.onChangeCheckbox) {
      props.onChangeCheckbox(list)
    }
  }

  // 全选
  const onChangeCheckboxAll = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let list: T[] = []
    if (target.checked) {
      if (disabledList && rowKey) {
        list = dataSource.filter(
          item => !disabledList.map(String).includes(String(item[rowKey]))
        )
      } else {
        list = dataSource
      }
    }
    setInnerCheckedList(list)
    if (props.onChangeCheckbox) {
      props.onChangeCheckbox(list)
    }
  }

  const renderTable = () => {
    const narrowTable = showNo

    return (
      <TableContext.Provider
        value={{
          countRender,
          getCount,
          showNo,
          columns,
          onRow,
          showCheckbox,
          isChecked,
          isDisabled,
          onChangeCheckbox,
        }}
      >
        <table
          className={classnames({ [`${prefixCls}-table-narrow`]: narrowTable })}
        >
          <colgroup>
            {showCheckbox && <col width={50} />}
            {showNo && <col width={countColWidth} />}
            {columns.map((item, index) => (
              <col
                key={item.key || (item.dataIndex as string) || index}
                width={item.width}
              />
            ))}
          </colgroup>
          <thead>
            <tr>
              {showCheckbox && (
                <th>
                  <Checkbox
                    disabled={isDisabledAll}
                    checked={isCheckedAll}
                    onChange={onChangeCheckboxAll}
                  />
                </th>
              )}
              {showNo && <th />}
              {columns.map((item, index) => (
                <th
                  key={item.key || (item.dataIndex as string) || index}
                  style={{ textAlign: item.align || 'left' }}
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => {
              const key = rowKey ? item[rowKey] : index
              return <SortableItem key={key} itemIndex={index} item={item} />
            })}
          </tbody>
        </table>
      </TableContext.Provider>
    )
  }

  return (
    <Spin
      loading={loading}
      empty={!dataSource.length}
      description={description}
      pagination={pagination}
    >
      <div className={classnames(`${prefixCls}-table-container`, className)}>
        {renderTable()}
      </div>
    </Spin>
  )
}

export default Table
