import React, {ButtonHTMLAttributes} from 'react'
import styled from 'styled-components'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string
  width?: string
  height?: string
  text?: string
  borderRadius?: number
  textColor?: string
  fontSize?: number
  borderColor?: string
  onClick?: () => void
}

const BasicButton = ({text, ...props}: ButtonType) => {
  return <Button {...props}>{text}</Button>
}

export default BasicButton

const Button = styled.button<ButtonType>`
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  width: ${(props) => props.width ?? 13}rem;
  height: ${(props) => props.height ?? 5}rem;
  background-color: ${({bgColor}) => bgColor ?? 'white'};
  color: ${(props) => props.textColor ?? 'white'};
  font-size: ${(props) => props.fontSize ?? 1.7}rem;
  border-radius: ${({borderRadius}) => borderRadius ?? 0.5}rem;
  border: ${(props) => (props.borderColor ? `${props.borderColor} solid 1px` : 'none')};
  cursor: pointer;
  margin: 3px;
`
