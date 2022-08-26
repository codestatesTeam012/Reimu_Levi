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
  font-size: 1.3rem;
  background-color: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  padding: 0.5rem;
  margin: 0.4rem;
  cursor: pointer;
`
