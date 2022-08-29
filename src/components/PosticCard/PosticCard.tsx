import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  contents: ContentType[]
}

interface ContentType {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  content: string
}

const PosticCard = ({title, contents}: Props) => {
  console.log(contents)
  return (
    <PosticBox>
      <Title>{title}</Title>
      <Content>
        {contents.map((item) => (
          <Item key={item.content}>
            <item.icon />
            <span>{item.content}</span>
          </Item>
        ))}
      </Content>
    </PosticBox>
  )
}

export default PosticCard

const PosticBox = styled.div`
  font-size: 2rem;
`

const Title = styled.div`
  border: hsl(47, 65%, 84%) solid 1px;
  background-color: hsl(47, 83%, 91%);
  color: hsl(210, 8%, 25%);
  font-size: 1.35rem;
  padding: 12px 15px;
  font-weight: bold;
`

const Content = styled.div`
  padding: 0 16px;
  background-color: #fdf7e2;
`

const Item = styled.div`
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  padding: 0.9rem 0;
  color: hsl(210, 8%, 25%);
`
