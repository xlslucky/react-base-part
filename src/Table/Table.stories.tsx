import React from 'react'
import Table from '.'

import { ColumnType } from './Table.types'

import '../style/storybook.scss'

export default {
  title: 'Table',
}

interface User {
  id: number
  name: string
  sex: string
  age: number
}

const list = new Array(20).fill(undefined).map<User>((item, index) => ({
  id: index,
  name: '胥',
  sex: '男',
  age: 18,
}))

export const Default = () => {
  const columns: ColumnType<User>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ]
  return <Table batch showNo columns={columns} dataSource={list} rowKey="id" />
}
