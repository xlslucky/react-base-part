import { EmptyDescriptionType } from '../Empty/Empty.types'
import { PaginationProps } from '../Pagination/Pagination.types'

export type ColumnType<T> = {
  title: string
  dataIndex?: keyof T
  key?: string
  hide?: boolean
  align?: 'left' | 'center' | 'right'
  width?: number
  render?: (item: any, record: T, index: number) => React.ReactNode
}

export interface TableContextType<T = any> {
  onChangeCheckbox?: (item: T) => (e: any) => void
  showCheckbox?: boolean
  isChecked?: (item: T) => boolean
  isDisabled?: (item: T) => boolean
  showNo?: boolean
  columns: ColumnType<T>[]
  onRow?: (item: T) => any
  getCount: (index: number) => number
  countRender: (count: number, item: T) => React.ReactNode
}

export interface TableProps<T> {
  columns: ColumnType<T>[] // 表格列的配置描述
  dataSource: T[] // 数据数组
  rowKey: string // 表格行 key 的取值，字符串
  showNo?: boolean // 是否显示序号
  loading?: boolean // 页面是否加载中
  pagination?: PaginationProps // 分页
  description?: EmptyDescriptionType
  onRow?: (item: T) => any
  className?: string
  countRender?: (count: number, item: T) => React.ReactNode
  batch?: boolean // 批量操作
  checkedList?: T[] // 已选list
  onChangeCheckbox?: (list: T[]) => void
  disabledList?: Array<number | string>
  prefixCls?: string
}
