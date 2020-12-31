import { MessageType } from './message.types'

import {
  IconCheckCircleFilled,
  IconCloseCircleFilled,
  IconExclamationCircleFilled,
} from '../components/Icons'

export const MESSAGE_TYPE_CLASSNAME = {
  [MessageType.Success]: 'rbp-message-success',
  [MessageType.Warn]: 'rbp-message-warn',
  [MessageType.Error]: 'rbp-message-error',
  [MessageType.Info]: 'rbp-message-info',
}

export const MESSAGE_TYPE_ICON = {
  [MessageType.Success]: IconCheckCircleFilled,
  [MessageType.Warn]: IconExclamationCircleFilled,
  [MessageType.Error]: IconCloseCircleFilled,
  [MessageType.Info]: IconExclamationCircleFilled,
}

export const DURATION = 3000
