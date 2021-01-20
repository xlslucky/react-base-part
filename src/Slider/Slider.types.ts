type ValueType = number

interface CustomHanderProps {
  left: number
  value: number
}

export interface SliderProps {
  value?: ValueType
  onChange?: (value: ValueType) => void
  step?: number
  min?: number
  max?: number
  smooth?: boolean
  renderHander?: ({ left, value }: CustomHanderProps) => React.ReactElement
  className?: string
  prefixCls?: string
}
