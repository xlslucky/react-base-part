import { PaginationProps } from '../Pagination/Pagination.types'
import { EmptyProps, EmptyDescriptionType } from '../Empty/Empty.types'

export type SpinProps = React.PropsWithChildren<{
  loading?: boolean // 加载中
  empty?: boolean // 是否为空
  customEmpty?: React.ReactNode // 自定义空展示
  customLoading?: React.ReactNode // 自定义加载中展示
  description?: EmptyDescriptionType
  pagination?: PaginationProps
  emptyProps?: EmptyProps
  prefixCls?: string
}>
