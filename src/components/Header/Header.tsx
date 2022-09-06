import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {colors} from 'src/utils/colors'
import {clearUser, getUser} from 'src/utils/localstorage'
import styled from 'styled-components'
import AuthButton from '../AuthButton/AuthButton'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import HamMenu from './HamMenu'
import SearchBar from './SearchBar'

const TopMenuItem = [
  {name: 'About', link: '/'},
  {name: 'Products', link: '/'},
  {name: 'For Teams', link: '/'},
]

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const user = getUser()
  const HandelLogOut = () => {
    clearUser()
    window.location.replace('/')
  }
  useEffect(() => {
    if (location.pathname !== '/') setIsOpen(false)
  }, [location])
  return (
    <Container>
      <SubContainer>
        {location.pathname === '/' ? <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
        <LogoBox onClick={() => navigate('/questions')}>
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg'}
          />
          <LeftSideBar isOpen={isOpen} />
        </LogoBox>
        <TopMenu>
          {TopMenuItem.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </TopMenu>
        <SearchBar />
        <ButtonBox>
          {user ? (
            <AuthButton mode="SignUp" text="Log out" onClick={HandelLogOut} />
          ) : (
            <>
              <AuthButton mode="Login" text="Log in" onClick={() => navigate('/login')} />
              <AuthButton mode="SignUp" text="Sign up" onClick={() => navigate('/signup')} />
            </>
          )}
        </ButtonBox>
      </SubContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: relative;
  z-index: 999;
  display: flex;
  top: 0;
  align-items: center;
  min-width: auto;
  width: 100%;
  height: 5rem;
  position: fixed !important;
  border-top: ${colors.mainColorOrange} 3px solid;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`
const SubContainer = styled.div`
  width: 130rem;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  padding-top: 0.2rem;
  align-items: center;
  /* justify-content: center; */
  @media (max-width: 740px) {
    justify-content: space-between;
  }
`

const LogoBox = styled.div`
  height: 100%;
  padding-left: 1rem;
  padding-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  img {
    width: 15rem;
    height: 100%;
  }
  &:hover {
    background-color: ${colors.hoverColor};
    cursor: pointer;
  }

  @media (max-width: 740px) {
    margin-right: 14.2rem;
  }
`

const TopMenu = styled.div`
  display: flex;
  list-style: none;
  padding-left: 1rem;
  flex-shrink: 0;

  li {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    font-size: 1.3rem;
    padding: 0.5rem;
    border-radius: 2rem;
  }

  li:hover {
    background-color: ${colors.hoverColor};
  }

  a {
    color: #555;
    text-decoration: none;
  }
  @media (max-width: 740px) {
    display: none;
  }
`

const ButtonBox = styled.div`
  display: flex;
  flex-shrink: 0;
`
