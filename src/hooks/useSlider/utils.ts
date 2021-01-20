import { productFloat } from '../../utils/calculate'
import {
  CalcMoveLeftProps,
  CalcValueProps,
  SliderCalcProps,
} from './useSlider.types'

const NUMBER = 1000

function calcMoveLeft({
  railDom,
  clientX,
  excursion,
  handleWidth,
}: CalcMoveLeftProps) {
  const { x: domX, width: domWidth } = railDom.getBoundingClientRect()
  let moveLeft = clientX - excursion + handleWidth / 2 - domX
  if (moveLeft < 0) {
    moveLeft = 0
  } else if (moveLeft > domWidth) {
    moveLeft = domWidth
  }
  return moveLeft
}

function calcValue({ step, left, distanceWidth }: CalcValueProps) {
  // 划过整倍数剩下的距离
  const remainderWidth = left % distanceWidth
  // 划过多少个单元格
  let hoverCells = (left - remainderWidth) / distanceWidth
  // 划过下一个单元格超过一半 就进入下一个
  if (Boolean(Math.round(remainderWidth / distanceWidth))) {
    hoverCells = hoverCells + 1
  }
  const power = String(step).split('.')[1]
    ? String(step).split('.')[1].length
    : 0
  const value = Number(productFloat(power)(hoverCells, step))
  const harshLeft = Number(
    ((hoverCells * distanceWidth * NUMBER) / NUMBER).toFixed(2)
  )
  return { value, harshLeft }
}

export function sliderCalc({
  railDom,
  clientX,
  excursion,
  handleWidth,
  step,
  smooth,
  distanceWidth,
}: SliderCalcProps) {
  const left = calcMoveLeft({
    railDom,
    clientX,
    excursion,
    handleWidth,
  })
  const { value, harshLeft } = calcValue({
    step,
    left,
    distanceWidth,
  })
  const moveLeft = smooth ? left : harshLeft
  return { value, moveLeft }
}
