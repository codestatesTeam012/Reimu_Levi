import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import TagCard from '../TagCard/TagCard'

const QuestionCard = () => {
  const TagsArr = ['javascript', 'jquery', 'pageshow']
  const navigate = useNavigate()
  // TODO !
  /*
    제목 , 내용 -> 길이가 너무 길 시 slice로 자르는 로직 추가해야함 
    태그가 너무 많을 시 몇개만 보여줄 지 생각해야함 
  */
  return (
    <QuestionBox>
      <QuestionState>
        <div>
          <span>0</span> <span>votes</span>
        </div>
        <div>
          <span>0</span> <span>answers</span>
        </div>
        <div>
          <span>0</span> <span>views</span>
        </div>
      </QuestionState>
      <QuestionSummary>
        <Title onClick={() => navigate('/questions/1')}>
          vite build occurred Uncaught TypeError: Failed to fetch dynamically imported module -
        </Title>
        <Content>
          when I use npm run build , I encountered above problem. I use vite, react and typescript.
          Here are my configuration: I already tried all methods in all discussion, but still can,t
          deploy in my ...
        </Content>
        <MetaBox>
          <Tags>
            {TagsArr.map((tag) => (
              <TagCard tag={tag} key={tag} />
            ))}
          </Tags>
          <UserInfo>
            <img src="" alt="" />
            <span>HwanMini</span>
            <span>1,664 asked 25 secs ago</span>
          </UserInfo>
        </MetaBox>
      </QuestionSummary>
    </QuestionBox>
  )
}

export default QuestionCard

const QuestionBox = styled.div`
  /* top right bottom left */
  display: flex;
  padding: 2.2rem 1.7rem 1.7rem 2.5rem;
  border-bottom: lightgray solid 1px;
  width: 100%;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`

const QuestionState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 2rem;
  width: 12%;

  div {
    display: flex;
  }

  span {
    color: hsl(210, 8%, 45%);
    font-size: 1.3rem;
    padding-bottom: 1rem;
    padding-left: 0.4rem;

    @media (max-width: 740px) {
    }
  }

  @media (max-width: 740px) {
    flex-direction: row;
  }
`
const QuestionSummary = styled.div`
  width: 88%;
  /* background-color: green; */
  @media (max-width: 740px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 1.7rem;
  color: hsl(206, 100%, 40%);
  cursor: pointer;
`
const Content = styled.p`
  color: hsl(210, 8%, 25%);
  padding-top: 0.5rem;
  font-size: 1.35rem;
`
const MetaBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Tags = styled.div`
  display: flex;
  margin-top: 0.5rem;
`
const UserInfo = styled.p`
  padding-right: 1.5rem;
  span {
    color: hsl(206, 100%, 40%);
    font-size: 1.3rem;
  }

  span:last-child {
    padding-left: 0.5rem;
    color: hsl(210, 8%, 25%);
  }
`
