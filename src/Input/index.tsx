import BaseInput from './Input'
import Textarea from './Textarea'

type InputType = typeof BaseInput & {
  Textarea: typeof Textarea
}

const Input = BaseInput as InputType

Input.Textarea = Textarea

export default Input
