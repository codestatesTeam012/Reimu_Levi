import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Logo from 'src/assets/svgComponents/Logo'
import LogoCompany from 'src/assets/svgComponents/LogoCompany'
import Industry from 'src/assets/svgComponents/Industry'
import People from 'src/assets/svgComponents/People'
import SpotLock from 'src/assets/svgComponents/SpotLock'
import SpotSearch from 'src/assets/svgComponents/SpotSearch'

const Home = () => {
  return (
    <Main>
      <Container>
        <Wrapper>
          <Section1>
            <CardBox>
              <SpotSearch />
              <CardText>
                Find the best answer to your technical question, help others answer theirs
              </CardText>
              <CardButton href="/v/login">Join the community</CardButton>
              <CardLink>
                or <CardSearchLink href="/questions">search content</CardSearchLink>
              </CardLink>
            </CardBox>
            <CardBoxTwo>
              <SpotLock />
              <CardText>Want a secure, private space for your technical knowledge?</CardText>
              <CardLine>
                <CardLineText>Get started</CardLineText>
              </CardLine>
              <CardButtons>
                <CardButtonTwo href="/v/login">
                  For large organizations
                  <Industry />
                </CardButtonTwo>
                <CardButtonTwo href="/v/login">
                  For small teams
                  <People />
                </CardButtonTwo>
              </CardButtons>
            </CardBoxTwo>
          </Section1>
          <Section2>
            <WordsSlider>
              <RollingWords>Every </RollingWords>
              <RollingWords color="rgb(242, 116, 14)">Frontend Developer </RollingWords>
              <RollingWords>has a tab open to </RollingWords>
              <RollingWords>Stack Overflow</RollingWords>
            </WordsSlider>
          </Section2>
          <Section3>
            <LineBreak></LineBreak>
          </Section3>
          <Section4>
            <Records>
              <RecordNumber>100+ million</RecordNumber>
              <RecordText>monthly visitors to Stack Overflow &amp; Stack Exchange</RecordText>
            </Records>
            <Records>
              <RecordNumber>45.1 billion</RecordNumber>
              <RecordText>Times a developer got help since 2008</RecordText>
            </Records>
            <Records>
              <RecordNumber>179% ROI</RecordNumber>
              <RecordText>from companies using Stack Overflow for Teams</RecordText>
            </Records>
            <Records>
              <RecordNumber>5,000+</RecordNumber>
              <RecordText>Stack Overflow for Teams instances active every day</RecordText>
            </Records>
          </Section4>
        </Wrapper>
      </Container>
    </Main>
  )
=======

const Home = () => {
  return <HomeBox></HomeBox>
>>>>>>> dev
}

export default Home

<<<<<<< HEAD
const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted', 'Segoe UI', 'Liberation Sans',
    sans-serif;
  margin-top: 5rem;
`

const Container = styled.div`
  width: 94%;
  height: 100%;
`

const Wrapper = styled.div`
  background-color: hsl(210, 8%, 25%);
  background: linear-gradient(180deg, hsl(210, 8%, 15%) 0%, hsl(210, 8%, 35%) 130%);
  max-height: 100rem;
  padding: 5rem 5rem;
  border-radius: 0.7rem;
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 50% 90%, 0% 100%);
  z-index: 0;
`

const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 9rem 10rem 9rem;
  padding: 0 5rem;
`

const CardBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(27, 95%, 90%);
  padding: 2rem 3rem 2rem 3rem;
  width: 300rem;
  border-radius: 0.7rem;
  margin-right: 5rem;
  position: relative;

  ::after {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: hsl(27, 95%, 90%);
    bottom: -2.5rem;
    right: 0;
    border-radius: 0 5px 0;
    clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
    transform: scaleX(-1);
    z-index: 999;
    position: absolute;
  }
`
const CardText = styled.h2`
  font-size: 1.7rem;
  line-height: 2.2rem;
  text-align: center;
  margin: 1.5rem 0;
  color: rgb(35, 38, 41);
`

const CardLine = styled.div`
  border-bottom: 1px solid rgb(9, 149, 255);
  width: 60%;
  text-align: center;
  line-height: 0.1rem;
  margin: 1.2rem;
`

const CardLineText = styled.span`
  background-color: rgb(204, 233, 254);
  padding: 0 10px;
  font-size: 1.2rem;
`

const CardButton = styled.a`
  font-weight: 500;
  background-color: rgb(242, 116, 14);
  border-radius: 0.7rem;
  color: rgb(255, 255, 255);
  padding: 1.4rem 2.8rem;
  font-size: 1.4rem;
  text-decoration: none;
  margin: 1rem;
`
const CardLink = styled.p`
  color: rgb(64, 68, 71);
  font-size: 1.2rem;
`

const CardSearchLink = styled.a`
  color: rgb(64, 68, 71);
  font-size: 1.2rem;
`
const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
`

const CardBoxTwo = styled.div`
  background-color: rgb(204, 233, 254);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem 2rem 3rem;
  width: 40%;
  border-radius: 0.7rem;
  position: relative;
`

const CardButtonTwo = styled(CardButton)`
  font-weight: 500;
  background-color: rgb(9, 149, 255);
  border-radius: 0.7rem;
  color: rgb(255, 255, 255);
  padding: 1.4rem 1.3rem;
  font-size: 1.4rem;
  text-decoration: none;
  margin: 1rem;
  display: flex;
  align-items: center;

  ::after {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgb(204, 233, 254);
    bottom: -2.5rem;
    left: 0;
    border-radius: 0 5px 0;
    clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
    z-index: 999;
    position: absolute;
  }
`

const Section2 = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 70%;
`

const WordsSlider = styled.span`
  font-weight: 700;
  font-size: 5rem;
  font-family: 'Comfortaa', cursive;
  font-family: 'Roboto Slab', serif;
  line-height: 1.3;
  color: rgb(255, 255, 255);
`
const RollingWords = styled.span`
  color: ${(props) => props.color || 'rgb(255, 255, 255)'};
`

const Section3 = styled.div`
  margin: 7rem;
`

const LineBreak = styled.span`
  height: 0.8rem !important;
  width: 7em !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  border-radius: 0.5rem;
  background-color: rgb(106, 115, 124);
`

const Section4 = styled.div`
  display: flex;
  padding: 0 8rem;
  margin-bottom: 30rem;
`
const Records = styled.div`
  text-align: center;
  font-family: 'Comfortaa', cursive;
  font-family: 'Roboto Slab', serif;
  padding: 0 1rem;
  margin: 0 1rem;
`
const RecordNumber = styled.div`
  font-size: 2rem;
  color: rgb(255, 255, 255);
  font-weight: 700;
  margin: 0.5rem 0;
`
const RecordText = styled.div`
  font-size: 1.4rem;
  color: rgb(142, 150, 155);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0.5rem;
  line-height: 1.2;
  margin-top: 1rem;
=======
const HomeBox = styled.div`
  height: 450rem;
  width: 100%;
  fill: skyblue;
  /* background-color: skyblue; */
>>>>>>> dev
`
