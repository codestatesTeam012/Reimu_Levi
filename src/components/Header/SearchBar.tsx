import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <Container>
      <SearchInput type={'text'} placeholder="Search..."></SearchInput>
      <IconBox>
        <AiOutlineSearch />
      </IconBox>
    </Container>
  )
}

export default SearchBar

const Container = styled.div`
  flex-shrink: 2;
  flex-grow: 1;
  position: relative;
  display: flex;

  @media (max-width: 740px) {
    display: none;
  }
`

const SearchInput = styled.input`
  padding: 1rem 0 1rem 5rem;
  width: 100%;

  ::placeholder {
    color: rgb(207, 204, 204);
    letter-spacing: 0.05rem;
  }

  :focus {
    border: 3px solid rgb(48, 130, 197);
    outline: 4px solid rgb(223, 238, 249);
    outline-offset: -2px;
  }
`
const IconBox = styled.div`
  position: absolute;
  color: grey;
  font-size: 2.5rem;
  left: 10px;
  top: 50%;
  transform: translateY(-45%);
`
