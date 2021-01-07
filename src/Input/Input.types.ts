export type InputSizeType = 'default' | 'large' | 'small'

export enum UiEventsKey {
  ArrowUp = 'ArrowUp', // 上方向键
  ArrowDown = 'ArrowDown', // 下方向键
  ArrowLeft = 'ArrowLeft', // 左方向键
  ArrowRight = 'ArrowRight', // 右方向键
  Enter = 'Enter', // 回车
  Escape = 'Escape', // esc
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  bordered?: boolean
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  prefixCls?: string
  size?: InputSizeType
  style?: React.CSSProperties
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
