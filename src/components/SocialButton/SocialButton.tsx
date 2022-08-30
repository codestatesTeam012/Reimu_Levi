import React from 'react'
import styled from 'styled-components'
import GoogleIcon from 'src/assets/svgComponents/GoogleIcon'
const SocialButton = () => {
  return (
    <Button>
      <GoogleIcon />
      <span>Log in with Google</span>
    </Button>
  )
}

export default SocialButton

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.7rem;
  background-color: white;
  border: solid 1px lightgray;
  color: hsl(210, 8%, 25%);
  cursor: pointer;
  border-radius: 3px;
  span {
    padding-left: 0.5rem;
  }
`
