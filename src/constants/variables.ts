export type VariablesType = {
  primary: string
  'primary-light': string
  danger: string
  'danger-light': string
  warn: string
  'warn-light': string
  success: string
  'success-light': string
  'border-color': string
  'background-disabled': string
  'text-strong': string
  'text-second': string

  'height-base': string
  'height-lg': string
  'height-sm': string

  'font-size-base': string
  'font-size-lg': string
  'font-size-sm': string
}

const variables: VariablesType = {
  primary: '#13c2c2',
  'primary-light': '#e6fffb',
  danger: '#f5222d',
  'danger-light': '#ffeaea',
  warn: '#fadb14',
  'warn-light': '#fefbeb',
  success: '#52c41a',
  'success-light': '#efffe8',
  'border-color': '#d9d9d9',
  'background-disabled': '#f5f5f5',
  'text-strong': '#000',
  'text-second': 'rgba(0, 0, 0, .75)',

  'height-base': '32px',
  'height-lg': '40px',
  'height-sm': '24px',

  'font-size-base': '14px',
  'font-size-lg': '16px',
  'font-size-sm': '12px',
}

export default variables
