import React from 'react'
import styled from 'styled-components'
import LeftSideBar from '../LeftSideBar/LeftSideBar'

interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <Container>
      <Blank></Blank>
      <MainBox>
        <LeftNav>
          <FixBox>
            <LeftSideBar isOpen={true} top={0} />
          </FixBox>
        </LeftNav>
        <RightContent>{children}</RightContent>
      </MainBox>
    </Container>
  )
}

export default Layout

const Container = styled.div``

const Blank = styled.div`
  padding-top: 5rem;
`

const MainBox = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
`

const LeftNav = styled.div`
  position: relative;
  width: 16%;
`

const FixBox = styled.div`
  /* block / fixed? */
  position: block;
`

const RightContent = styled.div`
  width: 84%;
`
