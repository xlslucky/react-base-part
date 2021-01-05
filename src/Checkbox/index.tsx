import BaseCheckbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

type CheckboxType = typeof BaseCheckbox & {
  Group: typeof CheckboxGroup
}

const Checkbox = BaseCheckbox as CheckboxType

Checkbox.Group = CheckboxGroup

export default Checkbox
