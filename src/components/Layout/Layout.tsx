import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
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
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  height: 100%;
`

const Blank = styled.div`
  padding-top: 5rem;
`

const MainBox = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

const LeftNav = styled.div`
  position: relative;
  width: 16%;

  @media (max-width: 900px) {
    display: none;
  }
`

const FixBox = styled.div`
  position: sticky;
`

const RightContent = styled.div`
  width: 84%;
`
