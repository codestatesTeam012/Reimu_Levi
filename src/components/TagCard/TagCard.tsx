import React from 'react'
import styled from 'styled-components'

interface Props {
  tag: string
}

const TagCard = ({tag}: Props) => {
  return <TagBox>{tag}</TagBox>
}

export default TagCard

const TagBox = styled.p`
  font-size: 1rem;
  background-color: rgb(225, 236, 244);
  color: rgb(57, 115, 157);
  padding: 0.5rem;
  margin: 0.4rem 0.4rem 0.4rem 0;
  border-radius: 0.3rem;
  cursor: pointer;
`
