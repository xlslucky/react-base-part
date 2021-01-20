import React from 'react'
import { UseSliderProps, UseSliderCommonProps } from './useSlider.types'
import { sliderCalc } from './utils'
import { isEmpty } from '../../utils'

function useSliderCommon({ railRef, step, min, max }: UseSliderCommonProps) {
  const [distanceWidth, setDistanceWidth] = React.useState(0)

  React.useEffect(() => {
    const railDom = railRef.current
    if (railDom) {
      const { width } = railDom.getBoundingClientRect()
      setDistanceWidth(Number(width / ((max - min) / step)))
    }
  }, [max, min, railRef, step])

  return { distanceWidth }
}

function useSlider({
  railRef,
  handleRef,
  max,
  step,
  min,
  smooth,
  value,
  onSuccess,
}: UseSliderProps) {
  const [left, setLeft] = React.useState(0)
  const [nextValue, setNextValue] = React.useState(0)
  const { distanceWidth } = useSliderCommon({ railRef, step, min, max })

  React.useEffect(() => {
    // value发生改变就按照value值设置
    if (!isEmpty(value)) {
      setNextValue(value as number)
      setLeft(((value as number) / step) * distanceWidth)
    }
  }, [distanceWidth, step, value])

  function onMouseDown(downEvent: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!handleRef.current || !railRef.current) {
      return
    }
    const handleDom = handleRef.current
    const railDom = railRef.current
    const { x: handleX, width: handleWidth } = handleDom.getBoundingClientRect()
    const excursion = downEvent.clientX - handleX
    document.onmousemove = (moveEvent: MouseEvent) => {
      const { clientX } = moveEvent
      const { value, moveLeft } = sliderCalc({
        railDom,
        clientX,
        excursion,
        handleWidth,
        step,
        smooth,
        distanceWidth,
      })
      setNextValue(value)
      setLeft(moveLeft)
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        onSuccess(value)
      }
    }
  }

  function onTouchStart(startEvent: React.TouchEvent<HTMLElement>) {
    if (!handleRef.current || !railRef.current) {
      return
    }
    const handleDom = handleRef.current
    const railDom = railRef.current
    const { x: handleX, width: handleWidth } = handleDom.getBoundingClientRect()
    const excursion = startEvent.touches[0].clientX - handleX
    document.ontouchmove = (moveEvent: TouchEvent) => {
      const { clientX } = moveEvent.touches[0]
      const { value, moveLeft } = sliderCalc({
        railDom,
        clientX,
        excursion,
        handleWidth,
        step,
        smooth,
        distanceWidth,
      })
      setNextValue(value)
      setLeft(moveLeft)
      document.ontouchend = () => {
        document.ontouchmove = null
        document.ontouchend = null
        onSuccess(value)
      }
    }
  }

  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!handleRef.current || !railRef.current) {
      return
    }
    const handleDom = handleRef.current
    const railDom = railRef.current
    const { width: handleWidth } = handleDom.getBoundingClientRect()
    const { value, moveLeft } = sliderCalc({
      railDom,
      clientX: event.clientX,
      excursion: handleWidth / 2,
      handleWidth,
      step,
      smooth,
      distanceWidth,
    })
    setNextValue(value)
    setLeft(moveLeft)
  }

  return {
    nextValue,
    left,
    onMouseDown,
    onTouchStart,
    onClick,
  }
}

export default useSlider
