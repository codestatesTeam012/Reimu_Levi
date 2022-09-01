import React from 'react'
import styled from 'styled-components'
import {NavLink, useNavigate} from 'react-router-dom'
import SpotSearch from 'src/assets/svgComponents/SpotSearch'

const TextBalloonLeft = () => {
  const navigate = useNavigate()
  return (
    <ContentOneCard>
      <SpotSearch />
      <ContentOneCardText>
        Find the best answer to your technical question, help others answer theirs
      </ContentOneCardText>
      <ContentOneCardButton onClick={() => navigate('/signup')}>
        Join the community
      </ContentOneCardButton>
      <ContentOneCardLink>
        or{' '}
        <NavLink to="/questions" style={{color: ' rgb(64, 68, 71)'}}>
          search content
        </NavLink>
      </ContentOneCardLink>
    </ContentOneCard>
  )
}

export default TextBalloonLeft

const ContentOneCard = styled.div`
  max-width: 44rem;
  height: 25rem;
  margin: 0rem 1.5rem;
  background-color: rgb(254, 227, 205);
  border-radius: 0.6rem;
  padding: 3rem 4.5rem;
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
    background-color: rgb(254, 227, 205);
    bottom: -2.5rem;
    right: 0;
    border-radius: 0 5px 0;
    clip-path: polygon(18px 0, 32px 0, 0 40px, 0 38px, 0 0, 18px 0);
    transform: scaleX(-1);
    z-index: 999;
    position: absolute;
  }
`

const ContentOneCardText = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.5rem;
  text-align: center;
  margin: 1.5rem 0;
  color: rgb(35, 38, 41);
`

const ContentOneCardButton = styled.button`
  font-weight: 500;
  background-color: rgb(242, 116, 14);
  border-radius: 0.7rem;
  color: rgb(255, 255, 255);
  padding: 1.4rem 3.5rem;
  font-size: 1.4rem;
  text-decoration: none;
  margin: 0.5rem 0 1rem 0;
  border: none;
  letter-spacing: 0.1rem;

  :hover {
    background-color: rgb(219, 104, 10);
  }
`

const ContentOneCardLink = styled.p`
  color: rgb(64, 68, 71);
  font-size: 1.2rem;
`
