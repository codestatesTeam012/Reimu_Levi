import React, {ButtonHTMLAttributes} from 'react'
import {colors} from 'src/utils/colors'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: 'Login' | 'SignUp'
  text?: string
  width?: number
  height?: number
  bgColor?: string
  onClick?: () => void
  border?: string
}

const AuthOption = {
  Login: {
    color: 'hsl(205, 47%, 42%)',
    bgColor: colors.mainColorLightBlue,
    border: 'hsl(205, 47%, 42%) solid 1px',
  },
  SignUp: {
    color: 'white',
    bgColor: colors.mainColorBlue,
    border: 'none',
  },
}

const AuthButton = ({mode, text, onClick, width, height}: Props) => {
  const {color, bgColor, border} = AuthOption[mode]
  return (
    <Button
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}
      onClick={onClick}
      mode={mode}
    >
      {text}
    </Button>
  )
}

export default AuthButton

const Button = styled.button<Props>`
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  margin: 0rem 0.5rem;
  margin-left: 0.1rem;
  width: ${({width}) => width ?? 6.5}rem;
  height: ${({height}) => height ?? 3.5}rem;
  color: ${({color}) => color};
  background-color: ${({bgColor}) => bgColor};
  border: ${({border}) => border};
  border-radius: 3px;
  cursor: pointer;
`
