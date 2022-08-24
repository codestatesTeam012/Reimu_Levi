import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import CollectorDiscover from 'src/assets/svgComponents/CollectorDiscover'
import Globe from 'src/assets/svgComponents/Globe'
import {colors} from 'src/utils/colors'
import styled from 'styled-components'
import BasicButton from '../BasicButton/BasicButton'

interface Props {
  isOpen: boolean
}

const LeftSideBar = ({isOpen}: Props) => {
  return (
    <LeftSideBarBox>
      <LeftNavBar isOpen={isOpen}>
        <Nav>
          <ol>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <ol className="two-li">
                <li className="tow-li-title">PUBLIC</li>
                <li className="ps-relative-title">
                  <NavLink to="/questions">
                    <Globe />
                    <span>Questions</span>
                  </NavLink>
                </li>
                <li className="ps-relative">
                  <NavLink to="/Tags">Tags</NavLink>
                </li>
                <li className="ps-relative">
                  <NavLink to="/Users">Users</NavLink>
                </li>
                <li className="ps-relative">
                  <NavLink to="Companies">Companies</NavLink>
                </li>
                <li className="tow-li-title">COLLECTIVES</li>
                <li className="ps-relative-title">
                  <Link to="/questions">
                    <CollectorDiscover />
                    <span>Explore Collectives</span>
                  </Link>
                </li>
              </ol>
            </li>
            <li className="three-li">
              <ol>
                <div>
                  <div>TEAMS</div>
                  <div className="text-div">
                    <span>
                      <strong>Stack Overflow for Teams –</strong> <br></br>
                      Start collaborating and sharing organizational knowledge.
                    </span>
                    <img
                      src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                      alt=""
                    />
                    <BasicButton
                      text="Create a free Team"
                      bgColor={colors.mainColorOrange}
                      width="18"
                      height="3"
                      fontSize={1.5}
                    />
                  </div>
                </div>
              </ol>
            </li>
          </ol>
        </Nav>
      </LeftNavBar>
    </LeftSideBarBox>
  )
}

export default LeftSideBar

const LeftSideBarBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted', 'Segoe UI', 'Liberation Sans',
    sans-serif;
  z-index: 999;
  display: block;
  position: absolute;
  width: auto;
  right: auto;
  top: 4.7rem;
  left: 11.5rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  color: hsl(210, 8%, 25%);
  background-color: hsl(0, 0%, 100%);
  font-size: 1.2rem;
  text-align: left;
  border-left: hsl(210, 8%, 90%) 1px solid;
  border-bottom: hsl(210, 8%, 90%) 1px solid;
  border-right: hsl(210, 8%, 90%) 1px solid;

  .active {
    border-right: 3px solid ${colors.mainColorOrange};
    background-color: hsl(210, 8%, 95%);
  }
`

const LeftNavBar = styled.div<{isOpen: boolean}>`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  width: 24rem;
  height: 60rem;
  box-shadow: 0 0 0 hsl(210deg 8% 5% / 5%);
  transition: box-shadow ease-in-out 0.1s, transform ease-in-out 0.1s;
  transform: translateZ(0);
  padding: 2.4rem 0rem;
`

const Nav = styled.nav`
  height: 100%;
  width: 100%;

  & > ol {
    font-size: 100%;
  }

  li:first-child {
    a {
      display: block;
      padding-top: 1rem;
      padding-left: 1rem;
      justify-content: baseline;
      color: hsl(210, 8%, 5%);
      font-weight: bold;
      font-size: 1.3rem;
      text-decoration: none;
      height: 3.5rem;
    }
  }

  .two-li {
    width: 100%;
    height: 23rem;

    .tow-li-title {
      color: hsl(210, 8%, 45%);
      font-size: 1.1rem;
      font-weight: bold;
      margin-left: 0.8rem;
      margin-top: 1.6rem;
      margin-bottom: 4px;
    }

    .ps-relative-title {
      display: flex;
      padding: 8px 0px 3px 0;
      width: 100%;
      height: 3.4rem;
      line-height: 2;
      margin-bottom: 0.5rem;

      a {
        width: 100%;
        display: flex;
        text-align: center;
        color: hsl(210, 8%, 35%);
        text-decoration: none;
        font-weight: bold;
        padding-left: 0.2rem;
        span {
          margin-left: 0.4rem;
        }
      }
    }

    .ps-relative {
      display: flex;
      padding: 0px 0px 10px 0px;
      width: 100%;
      height: 3.4rem;
      line-height: 2;

      a {
        padding-left: 2.5rem;
        text-decoration: none;
        color: hsl(210, 8%, 35%);
        display: block;
        width: 100%;
      }
    }
  }

  .three-li {
    ol {
      color: hsl(210, 8%, 45%);
      font-size: 1.1rem;
      font-weight: bold;
      margin-left: 0.8rem;
      margin-top: 0.5rem;
      margin-bottom: 4px;
    }

    .text-div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: hsl(210, 8%, 35%);
      font-size: 1.2rem;
      margin-top: 2.3rem;
      padding: 0rem 2rem;
      color: hsl(210, 8%, 35%) !important;

      span {
        color: hsl(210, 8%, 45%);
        line-height: 1.5rem;

        strong {
          font-weight: bold;
          color: black;
        }
      }

      img {
        margin-top: 1rem;
      }
    }
  }
`
