import React from 'react'
import Trigger from '.'
import Button from '../Button'

import { TriggerProps } from './Trigger.types'
import '../style/animation/slide.scss'

import '../style/storybook.scss'

export default {
  title: 'Trigger',
  component: Trigger,
}

// const SLIDE_DOWN = {
//   enterClassName: 'slide-down-enter',
//   leaveClassName: 'slide-down-leave',
// }

// const SLIDE_LEFT = {
//   enterClassName: 'slide-left-enter',
//   leaveClassName: 'slide-left-leave',
// }

// const SLIDE_TOP = {
//   enterClassName: 'slide-up-enter',
//   leaveClassName: 'slide-up-leave',
// }

// const SLIDE_RIGHT = {
//   enterClassName: 'slide-right-enter',
//   leaveClassName: 'slide-right-leave',
// }

// const LIST: Array<Partial<TriggerProps>> = [
//   { placement: 'topLeft', ...SLIDE_DOWN },
//   { placement: 'topCenter', ...SLIDE_DOWN },
//   { placement: 'topRight', ...SLIDE_DOWN },
//   { placement: 'rightTop', ...SLIDE_LEFT },
//   { placement: 'rightCenter', ...SLIDE_LEFT },
//   { placement: 'rightBottom', ...SLIDE_LEFT },
//   { placement: 'bottomLeft', ...SLIDE_TOP },
//   { placement: 'bottomCenter', ...SLIDE_TOP },
//   { placement: 'bottomRight', ...SLIDE_TOP },
//   { placement: 'leftTop', ...SLIDE_RIGHT },
//   { placement: 'leftCenter', ...SLIDE_RIGHT },
//   { placement: 'leftBottom', ...SLIDE_RIGHT },
// ]

const LIST: Array<Partial<TriggerProps>> = [
  { placement: 'topLeft' },
  { placement: 'topCenter' },
  { placement: 'topRight' },
  { placement: 'rightTop' },
  { placement: 'rightCenter' },
  { placement: 'rightBottom' },
  { placement: 'bottomLeft' },
  { placement: 'bottomCenter' },
  { placement: 'bottomRight' },
  { placement: 'leftTop' },
  { placement: 'leftCenter' },
  { placement: 'leftBottom' },
]

export const Default = () => {
  const domRef = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={domRef} style={{ paddingTop: 100 }}>
      {LIST.map(item => (
        <Trigger
          key={item.placement}
          popup={
            <div
              style={{ border: '1px solid red', padding: '10px 15px' }}
              onClick={e => e.stopPropagation()}
            >
              i am a popup
            </div>
          }
          placement={item.placement}
          trigger={['click']}
          getPopupContainer={() => domRef.current as HTMLElement}
          {...item}
        >
          <Button style={{ marginLeft: 101, marginBottom: 41 }}>
            {item.placement}
          </Button>
        </Trigger>
      ))}
    </div>
  )
}
