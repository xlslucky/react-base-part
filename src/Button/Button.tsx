import React from 'react'

import { ButtonProps } from './Button.types'

import './Button.scss'

const Button: React.FC<ButtonProps> = () => (
  <div data-testid="Button">Button</div>
)

export default Button
