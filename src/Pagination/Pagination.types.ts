export interface PaginationProps {
  className?: string
  pageNo: number
  pageSize: number
  total: number
  onChange?: (pageNo: number, pageSize: number) => void
  prefixCls?: string
  disabled?: boolean
}
