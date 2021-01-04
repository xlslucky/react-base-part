import { PREFIX_CLASS } from '../constants'

import { MessageType } from './message.types'

import {
  IconCheckCircleFilled,
  IconCloseCircleFilled,
  IconExclamationCircleFilled,
} from '../components/Icons'

export const MESSAGE_TYPE_CLASSNAME = {
  [MessageType.Success]: `${PREFIX_CLASS}-message-success`,
  [MessageType.Warn]: `${PREFIX_CLASS}-message-warn`,
  [MessageType.Error]: `${PREFIX_CLASS}-message-error`,
  [MessageType.Info]: `${PREFIX_CLASS}-message-info`,
}

export const MESSAGE_TYPE_ICON = {
  [MessageType.Success]: IconCheckCircleFilled,
  [MessageType.Warn]: IconExclamationCircleFilled,
  [MessageType.Error]: IconCloseCircleFilled,
  [MessageType.Info]: IconExclamationCircleFilled,
}

export const DURATION = 3000
