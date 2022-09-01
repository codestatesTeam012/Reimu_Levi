import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import TextBalloonLeft from '../../components/TextBalloon/TextBalloonLeft'
import TextBalloonRight from 'src/components/TextBalloon/TextBalloonRight'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <Wrapper>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <ContainerDeco aria-hidden="true"></ContainerDeco>
        <Container>
          <SectionOne>
            <SectionOneDeco>
              <SectionOneImg
                src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
                alt="bg-deco"
              />
              <SectionOneImg
                src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
                alt=""
              />
            </SectionOneDeco>
            <ContentOne>
              <TextBalloonLeft />
              <TextBalloonRight />
            </ContentOne>
            <div className="content-three"></div>
            <div className="content-four"></div>
          </SectionOne>
          <SectionTwo>
            <div className="content-five"></div>
          </SectionTwo>
        </Container>
      </Wrapper>
    </Main>
  )
}

export default Home

const Main = styled.div`
  margin-top: 5rem;
  min-height: 100vh;
  width: 100%;
  background-color: rgb(248, 249, 249);
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  flex: 1;
  max-width: 194rem;
  padding: 5rem;
  position: relative;
  z-index: 2;
`

const ContainerDeco = styled.span`
  position: relative;
  z-index: 3;

  :nth-child(1) {
    content: '';
    width: 6.3rem;
    height: 6.3rem;
    background-color: rgb(1, 84, 163);
    border-radius: 0.8rem;
    top: -0.5rem;
    left: 1.5rem;
    position: absolute;
  }

  :nth-child(2) {
    content: '';
    width: 6.3rem;
    height: 8rem;
    background-color: rgb(107, 187, 247);
    top: 0rem;
    right: 18rem;
    position: absolute;
  }
`

const Container = styled.div`
  background-color: hsl(210, 8%, 25%);
  background: linear-gradient(180deg, hsl(210, 8%, 15%) 0%, hsl(210, 8%, 35%) 130%);
  border-radius: 0.5rem;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 90%, 0% 100%);
  z-index: 4;
`

const SectionOne = styled.div`
  position: relative;
  flex: 50%;
`
const SectionOneDeco = styled.div`
  z-index: 5;
`

const SectionOneImg = styled.img`
  position: absolute;
  :first-child {
    right: 8%;
  }

  :last-child {
    left: 8%;
    top: 13rem;
  }
`

const ContentOne = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  /* margin-left: auto;
  margin-right: auto; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 5rem;
`

const SectionTwo = styled.div`
  background-color: blue;
`
