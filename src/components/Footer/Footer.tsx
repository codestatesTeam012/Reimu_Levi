import React from 'react'
import Logo from 'src/assets/svgComponents/Logo'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: rgb(35, 38, 41);
`
const Wrapper = styled.div`
  max-width: 126rem;
  margin: 0 auto;
  padding: 1.5rem 3.5rem;
  display: flex;

  @media (max-width: 1133px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 0rem 1rem;
  }
`
const LogoNav = styled.div`
  display: flex;
  flex: 4;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

const LogoWrapper = styled.div`
  flex: 0.2;
  text-align: right;

  @media (max-width: 680px) {
    display: flex;
    align-items: flex-start;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const LogoA = styled.a``

const LogoImage = styled.svg`
  width: 32px;
  height: 37px;
`
const LogoPath = styled.path``

const Nav = styled.div`
  flex: 3.5;
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;

  .newSection {
    margin-top: 1.5rem;
  }

  @media (max-width: 680px) {
    flex-direction: column;

    .newSection {
      margin: 0;
      margin-right: 1rem;
    }
  }
`

const Column = styled.div`
  padding: 0 1rem;
`
const ColumnTitle = styled.h3`
  color: rgb(186, 191, 195);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 1rem 0 2rem 0;
  font-size: 1.3rem;
  cursor: pointer;

  @media (max-width: 680px) {
    margin-bottom: -1rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-top: 0.7rem;
  }
`

const ColumnLists = styled.ol`
  list-style: none;

  @media (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const ColumnList = styled.li`
  color: rgb(142, 151, 159);
  font-size: 1.3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 1rem;
  list-style: none;
  cursor: pointer;

  &:hover {
    color: rgb(190, 186, 186);
  }

  @media (max-width: 680px) {
    margin-right: 1rem;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 2.2rem 0 0 2.5rem;

  @media (max-width: 680px) {
    margin: 3rem 0 0 0;
    padding: 0 1rem;
  }
`

const SocialAcc = styled.div`
  flex: 1.2;
`

const SocialAccNav = styled.ol`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1133px) {
    justify-content: flex-start;
  }
`
const InfoList = styled(ColumnList)`
  font-size: 1.1rem;
  padding: 0.2rem 0;

  @media (max-width: 1133px) {
    margin-right: 1rem;
    padding: 0.5rem 0;
  }
`

const CopyRights = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 1.5rem;
  color: rgb(142, 151, 159);
  font-size: 1.3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 1133px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`
const CopyRightsList = styled.div`
  pointer-events: none;
  font-size: 1rem;
  line-height: 1.4rem;
  padding-bottom: 1rem;

  @media (max-width: 1133px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const CopyRightsLink = styled.a`
  color: rgb(142, 151, 159);

  @media (max-width: 1133px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5rem;
  }
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoNav>
          <LogoWrapper>
            <LogoA href="/" aria-label="Stack Overflow">
              <Logo />
            </LogoA>
          </LogoWrapper>
          <Nav>
            <Column>
              <ColumnTitle>STACK OVERFLOW</ColumnTitle>
              <ColumnLists>
                <ColumnList>Questions</ColumnList>
                <ColumnList>Help</ColumnList>
              </ColumnLists>
            </Column>
            <Column>
              <ColumnTitle>PRODUCTS</ColumnTitle>
              <ColumnLists>
                <ColumnList>Teams</ColumnList>
                <ColumnList>Advertising</ColumnList>
                <ColumnList>Collectives</ColumnList>
                <ColumnList>Talent</ColumnList>
              </ColumnLists>
            </Column>
            <Column>
              <ColumnTitle>COMPANY</ColumnTitle>
              <ColumnLists>
                <ColumnList>About</ColumnList>
                <ColumnList>Press</ColumnList>
                <ColumnList>Work Here</ColumnList>
                <ColumnList>Legal</ColumnList>
                <ColumnList>Privacy Policy</ColumnList>
                <ColumnList>Terms of Service</ColumnList>
                <ColumnList>Contact Us</ColumnList>
                <ColumnList>Cookie Settings</ColumnList>
                <ColumnList>Cookie Policy</ColumnList>
              </ColumnLists>
            </Column>
            <Column>
              <ColumnTitle>STACK EXCHANGE NETWORK</ColumnTitle>
              <ColumnLists>
                <ColumnList>Technology</ColumnList>
                <ColumnList>Culture &amp; recreation</ColumnList>
                <ColumnList>Life &amp; arts</ColumnList>
                <ColumnList>Science</ColumnList>
                <ColumnList>Professional</ColumnList>
                <ColumnList>Business</ColumnList>
                <ColumnList className="newSection">API</ColumnList>
                <ColumnList>Data</ColumnList>
              </ColumnLists>
            </Column>
          </Nav>
        </LogoNav>
        <Info>
          <SocialAcc>
            <SocialAccNav>
              <InfoList>Blog</InfoList>
              <InfoList>Facebook</InfoList>
              <InfoList>Twitter</InfoList>
              <InfoList>Linkedin</InfoList>
              <InfoList>Instagram</InfoList>
            </SocialAccNav>
          </SocialAcc>
          <CopyRights>
            <CopyRightsList>
              Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under{' '}
              <CopyRightsLink href="https://stackoverflow.com/help/licensing">
                CC BY-SA.
              </CopyRightsLink>
              <CopyRightsList>rev 2022.8.23.42893</CopyRightsList>
            </CopyRightsList>
          </CopyRights>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default Footer
