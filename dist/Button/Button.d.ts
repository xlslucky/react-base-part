import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';
declare const Button: React.ForwardRefExoticComponent<Pick<ButtonProps, "children" | "style" | "disabled" | "htmlType" | "onClick" | "loading" | "type" | "className" | "block" | "circle" | "prefixCls" | "key"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
