import React from 'react'

import { TableContextType } from './Table.types'

const TableContext = React.createContext<TableContextType<any>>({
  columns: [],
  getCount: index => index + 1,
  countRender: count => count,
})

export default TableContext

export function useTableContext() {
  return React.useContext(TableContext)
}
