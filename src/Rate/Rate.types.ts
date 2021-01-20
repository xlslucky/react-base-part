type NodeType = React.ReactNode | ((index: number) => React.ReactNode)

export interface RateProps {
  allowHalf?: boolean
  character?: NodeType
  activeCharacter?: NodeType
  count?: number
  value?: number
  onChange?: (value: number) => void
  className?: string
  style?: React.CSSProperties
  prefixCls?: string
}
