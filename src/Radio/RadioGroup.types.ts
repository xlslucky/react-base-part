export interface RadioGroupProps {
  disabled?: boolean
  defaultValue?: React.ReactText
  value?: React.ReactText
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactElement[] | React.ReactElement
  className?: string
  prefixCls?: string
}
