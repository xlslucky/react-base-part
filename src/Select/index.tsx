import BaseSelect from './Select'
import Option from './Option'

type SelectType = typeof BaseSelect & {
  Option: typeof Option
}

const Select = BaseSelect as SelectType

Select.Option = Option

export default Select
