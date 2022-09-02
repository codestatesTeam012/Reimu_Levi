import React from 'react'
import styled from 'styled-components'
import TextBalloonLeft from '../../components/TextBalloon/TextBalloonLeft'
import TextBalloonRight from 'src/components/TextBalloon/TextBalloonRight'
import Footer from 'src/components/Footer'

type Record = {
  recordNumber: string
  recordText: string
}

const Home = () => {
  const recordsInfo: Record[] = [
    {
      recordNumber: '100+ million',
      recordText: 'monthly visitors to Stack Overflow &amp; Stack Exchange',
    },
    {
      recordNumber: '45.1 billion',
      recordText: 'Times a developer got help since 2008',
    },
    {
      recordNumber: '179% ROI',
      recordText: 'from companies using Stack Overflow for Teams',
    },
    {
      recordNumber: '5,000+',
      recordText: 'Stack Overflow for Teams instances active every day',
    },
  ]

  return (
    <Section>
      <Main>
        <Wrapper>
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
          <ContainerDeco aria-hidden="true" />
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
                <ContentOneWrapper>
                  <TextBalloonLeft />
                </ContentOneWrapper>
                <ContentOneWrapper>
                  <TextBalloonRight />
                </ContentOneWrapper>
                <ContentOneDeco aria-hidden="true" />
                <ContentOneDeco aria-hidden="true" />
              </ContentOne>
              <ContentTwo>
                <WordsSlider>
                  <RollingWords>Every </RollingWords>
                  <RollingWords color="rgb(242, 116, 14)">Frontend Developer </RollingWords>
                  <RollingWords>has a tab open to </RollingWords>
                  <RollingWords>Stack Overflow</RollingWords>
                </WordsSlider>
              </ContentTwo>
              <ContentThree>
                <LineBreak />
              </ContentThree>
              <ContentFour>
                {recordsInfo.map((info, idx) => (
                  <Records key={idx}>
                    <RecordNumber>{info.recordNumber}</RecordNumber>
                    <RecordText>{info.recordText}</RecordText>
                  </Records>
                ))}
              </ContentFour>
            </SectionOne>
          </Container>
        </Wrapper>
      </Main>
      <Footer />
    </Section>
  )
}

export default Home

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  max-width: 194rem;
  margin-top: 5rem;
  min-height: 100vh;
  width: 100%;
  background-color: rgb(248, 249, 249);
  margin-top: 5rem;
  position: relative;
  z-index: 1;
`

const Wrapper = styled.div`
  height: 100%;
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

  :nth-child(3) {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgb(71, 168, 104);
    border-radius: 0.7rem 0.7rem 0.2rem;
    top: 46rem;
    left: -1.3rem;
    position: absolute;
  }

  :nth-child(4) {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgb(214, 232, 220);
    border-radius: 0.1rem 0.7rem 0.7rem;
    top: 49.1rem;
    left: 1.8rem;
    position: absolute;
  }

  :nth-child(5) {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgb(255, 204, 1);
    border-radius: 0.7rem 0.7rem 0.2rem;
    top: 13rem;
    left: 13rem;
    position: absolute;
    z-index: 99 !important;
  }

  :nth-child(6) {
    content: '';
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgba(255, 204, 1, 0.238);
    border-radius: 0.1rem 0.7rem 0.7rem;
    top: 16.2rem;
    left: 16.2rem;
    position: absolute;
    z-index: 99;
  }

  :nth-child(7) {
    content: '';
    width: 6.5rem;
    height: 6.5rem;
    background-color: rgb(242, 116, 14);
    border-radius: 0.7rem 0.7rem 0.2rem;
    top: 47rem;
    right: 6.5rem;
    position: absolute;
    z-index: 99;
  }

  :nth-child(8) {
    content: '';
    width: 6.5rem;
    height: 6.5rem;
    background-color: rgba(242, 117, 14, 0.221);
    border-radius: 0.1rem 0.7rem 0.7rem;
    top: 53.5rem;
    right: 0rem;
    position: absolute;
    z-index: 99;
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
  z-index: 4;
  padding-bottom: 12rem;
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
    top: 25rem;
  }
`

const ContentOne = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  margin: 0 5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 5rem 2rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem;
  }
`

const ContentOneWrapper = styled.div`
  padding: 1rem;

  @media (max-width: 1100px) {
    margin-bottom: 3rem;
  }
`

const ContentOneDeco = styled.div`
  position: relative;

  :nth-child(3) {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background-color: rgb(39, 52, 139);
    border-radius: 0.25rem 0.25rem 0.1rem;
    top: 1.5rem;
    right: 9.5rem;
    position: absolute;
  }

  :nth-child(4) {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background-color: rgb(37, 41, 62);
    border-radius: 0.1rem 0.25rem 0.25rem;
    top: 3.1rem;
    right: 7.9rem;
    position: absolute;
  }
`

const ContentTwo = styled.div`
  max-width: 80rem;
  text-align: center;
  padding: 5rem 0;
  margin: 0 auto;
  position: relative;
`

const WordsSlider = styled.span`
  justify-content: center;
  font-weight: 700;
  font-size: 5rem;
  font-family: 'Comfortaa', cursive;
  font-family: 'Roboto Slab', serif;
  line-height: 1.3;
  color: rgb(255, 255, 255);

  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
  }
`

const RollingWords = styled.span`
  color: ${(props) => props.color || 'rgb(255, 255, 255)'};
`

const ContentThree = styled.div`
  padding-bottom: 4rem;
`

const LineBreak = styled.span`
  height: 0.9rem !important;
  width: 6.5em !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  border-radius: 0.5rem;
  background-color: rgb(106, 115, 124);
`

const ContentFour = styled.div`
  max-width: 100rem;
  padding: 3rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`

const Records = styled.div`
  text-align: center;
  font-family: 'Comfortaa', cursive;
  font-family: 'Roboto Slab', serif;
  padding: 0 1rem;
  margin: 0 1rem;

  @media (max-width: 1180px) {
    margin: 2rem 0;
  }
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
`
