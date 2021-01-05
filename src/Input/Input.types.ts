export enum UiEventsKey {
  ArrowUp = 'ArrowUp', // 上方向键
  ArrowDown = 'ArrowDown', // 下方向键
  ArrowLeft = 'ArrowLeft', // 左方向键
  ArrowRight = 'ArrowRight', // 右方向键
  Enter = 'Enter', // 回车
  Escape = 'Escape', // esc
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  bordered?: boolean
  disabled?: boolean
  className?: string
  addonAfter?: React.ReactNode
  addonBefore?: React.ReactNode
  prefixCls?: string
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
