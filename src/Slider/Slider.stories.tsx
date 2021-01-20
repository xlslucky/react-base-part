import React from 'react'
import Slider from '.'

import '../style/storybook.scss'

export default {
  title: 'Slider',
  component: Slider,
}

export const Default = () => {
  const customHanderStyle = React.useCallback((left: number) => {
    return {
      position: 'absolute',
      left,
      background: 'red',
      transform: 'translateX(-50%)',
      width: 30,
      height: 30,
      top: -((30 - 4) / 2),
    } as React.CSSProperties
  }, [])
  return (
    <div>
      <Slider min={0} max={100} step={0.1} value={50} />
      <br />
      <Slider min={50} max={100} />
      <br />
      <Slider min={0} max={100} />
      <br />
      <Slider
        min={0}
        max={1}
        step={0.01}
        smooth
        renderHander={({ value, left }) => (
          <div style={customHanderStyle(left)}>{value}</div>
        )}
      />
    </div>
  )
}
