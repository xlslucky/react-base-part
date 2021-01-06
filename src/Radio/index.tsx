import BaseRadio from './Radio'
import RadioGroup from './RadioGroup'

type RadioType = typeof BaseRadio & {
  Group: typeof RadioGroup
}

const Radio = BaseRadio as RadioType

Radio.Group = RadioGroup

export default Radio
