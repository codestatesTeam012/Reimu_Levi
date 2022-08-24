import React, {useState} from 'react'
import {colors} from 'src/utils/colors'
import styled from 'styled-components'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import HamMenu from './HamMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <SubContainer>
        <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <LeftSideBar isOpen={isOpen} />
        <LogoBox>
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg'}
          />
        </LogoBox>
      </SubContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: auto;
  width: 100%;
  height: 5rem;
  position: fixed !important;
  border-top: ${colors.mainColorOrange} 3px solid;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05); ;
`
const SubContainer = styled.div`
  width: 97.2307692rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const LogoBox = styled.div`
  height: 100%;
  img {
    width: 15rem;
    height: 100%;
  }
  &:hover {
    background-color: ${colors.hoverColor};
    cursor: pointer;
  }
`
