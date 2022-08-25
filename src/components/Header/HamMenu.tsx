import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {colors} from 'src/utils/colors'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamMenu = ({isOpen, setIsOpen}: Props) => {
  return (
    <div>
      <HamMenuBox onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose /> : <AiOutlineMenu />}
      </HamMenuBox>
    </div>
  )
}

export default HamMenu

const HamMenuBox = styled.div`
  display: flex;
  padding: 0 1.6rem;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.3rem;
  height: 100%;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.hoverColor};
  }
`
