export interface CheckboxGroupProps {
  disabled?: boolean
  defaultValue?: React.ReactText[]
  value?: React.ReactText[]
  onChange?: (checkedValue: React.ReactText[]) => void
  children: React.ReactElement[] | React.ReactElement
  className?: string
}
