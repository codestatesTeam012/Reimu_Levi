import React from 'react'
import {colors} from 'src/utils/colors'
import styled from 'styled-components'

interface Props {
  totalPage: number
  currentPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  limit: number
}

const Pagenation = ({totalPage, currentPage, setPage, limit}: Props) => {
  const numPages = Math.ceil(totalPage / limit)
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
          {/* &lt; */}
          Prev
        </Button>
        {Array(limit)
          .fill(0)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={currentPage === i + 1 ? 'currentPage' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(currentPage + 1)} disabled={currentPage === numPages}>
          {/* &gt;  */}
          Next
        </Button>
      </Nav>
    </>
  )
}

export default Pagenation
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

const Button = styled.button<{[key: string]: any}>`
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin: 0;
  /* background: black; */
  color: black;
  font-size: 1rem;
  border: solid 1px lightgray;

  &:hover {
    background: ${colors.mainColorOrange};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${colors.mainColorOrange};
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`
