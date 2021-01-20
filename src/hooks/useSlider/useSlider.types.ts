export interface UseSliderProps {
  railRef: React.RefObject<HTMLDivElement>
  handleRef: React.RefObject<HTMLDivElement>
  step: number
  min: number
  max: number
  smooth?: boolean
  value?: number
  onSuccess: (value: number) => void
}

export interface UseSliderCommonProps {
  railRef: React.RefObject<HTMLDivElement>
  step: number
  min: number
  max: number
}

export interface CalcMoveLeftProps {
  railDom: HTMLDivElement
  clientX: number
  excursion: number
  handleWidth: number
}

export interface CalcValueProps {
  step: number
  left: number
  distanceWidth: number
}

export interface SliderCalcProps {
  step: number
  railDom: HTMLDivElement
  clientX: number
  excursion: number
  handleWidth: number
  smooth?: boolean
  distanceWidth: number
}
