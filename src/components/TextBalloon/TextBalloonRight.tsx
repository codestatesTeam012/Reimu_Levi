import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import SpotLock from 'src/assets/svgComponents/SpotLock'
import Industry from 'src/assets/svgComponents/Industry'
import People from 'src/assets/svgComponents/People'

const TextBalloonRight = () => {
  const navigate = useNavigate()
  return (
    <ContentOneCard>
      <SpotLock />
      <ContentOneCardText>
        Want a secure, private space for your technical knowledge?
      </ContentOneCardText>
      <CardLine>
        <CardLineText>Get started</CardLineText>
      </CardLine>
      <ContentOneButtons>
        <ContentOneButton onClick={() => navigate('/signup')}>
          For large organizations
          <Industry />
        </ContentOneButton>
        <ContentOneButton onClick={() => navigate('/signup')}>
          For small teams
          <People />
        </ContentOneButton>
      </ContentOneButtons>
    </ContentOneCard>
  )
}

export default TextBalloonRight

const ContentOneCard = styled.div`
  max-width: 44rem;
  height: 25rem;
  margin: 0rem 1.5rem;
  background-color: rgb(204, 233, 254);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 6;
  position: relative;

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

const ContentOneCardText = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.3rem;
  text-align: center;
  color: rgb(35, 38, 41);
  padding: 1rem 4rem 0.5rem 4rem;
`

const CardLine = styled.div`
  border-bottom: 1px solid rgb(157, 209, 251);
  width: 45%;
  text-align: center;
  line-height: 0.1rem;
  margin: 2rem 0 2rem 0;
`

const CardLineText = styled.span`
  background-color: rgb(204, 233, 254);
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 300;
`

const ContentOneButtons = styled.div`
  display: flex;
`

const ContentOneButton = styled.button`
  font-weight: 500;
  background-color: rgb(9, 149, 255);
  border-radius: 0.7rem;
  color: rgb(255, 255, 255);
  font-size: 1.3rem;
  text-decoration: none;
  border: none;
  letter-spacing: 0.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.3rem 1.2rem;
  min-width: 150px;
  cursor: pointer;

  :nth-child(1) {
    flex: 3;
    margin-right: 0.8rem;
  }

  :nth-child(2) {
    flex: 1.5;
  }

  :hover {
    background-color: rgb(7, 127, 207);
  }
`
