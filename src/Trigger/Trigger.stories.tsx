import React from 'react'
import Trigger from './Trigger'
import Button from '../Button/Button'

import { TriggerProps } from './Trigger.types'

export default {
  title: 'Trigger',
}

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
    <div ref={domRef} style={{ marginLeft: 50 }}>
      {LIST.map(item => (
        <Trigger
          key={item.placement}
          popup={
            <div style={{ border: '1px solid red', padding: '10px 15px' }}>
              i am a popup
            </div>
          }
          placement={item.placement}
          trigger={['click']}
          getPopupContainer={() => domRef.current as HTMLElement}
        >
          <Button style={{ marginLeft: 101, marginBottom: 41 }}>
            {item.placement}
          </Button>
        </Trigger>
      ))}
    </div>
  )
}
