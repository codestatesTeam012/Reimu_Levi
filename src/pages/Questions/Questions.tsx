/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Pen from 'src/assets/svgComponents/Pen'
// import {useNavigate} from 'react-router-dom'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import PosticCard from 'src/components/PosticCard/PosticCard'
import QuestionCard from 'src/components/QuestionCard.tsx/QuestionCard'
import {toLocalScale} from 'src/utils/utill'
import styled from 'styled-components'

const contents1 = [
  {icon: Pen, content: 'Open source and accidental innovation'},
  {icon: Pen, content: 'The luckiest guy in AI (Ep. 477)'},
]
const contents2 = [
  {icon: Pen, content: 'Recent site instability, major outages – July/August 2022'},
  {icon: Pen, content: 'Please welcome Valued Associate #1301 - Emerson'},
  {icon: Pen, content: 'Staging Ground Workflow: Question Lifecycle'},
  {icon: Pen, content: 'Collectives Update: WSO2 launches, and Google Go sunsets'},
  {icon: Pen, content: 'Should we burninate the [option] tag?'},
]

const Questions = () => {
  // const navigate = useNavigate()
  return (
    <Layout>
      <QuestionsBox>
        <LeftBox>
          <QuestionsHeader>
            <h1>All Questions</h1>
            <AuthButton mode="SignUp" text="Ask Questions" width={11}></AuthButton>
          </QuestionsHeader>
          <QuestionSubHeader>
            <span>{toLocalScale(12345623)} questions</span>
          </QuestionSubHeader>
          <QuestionsContent>
            {/* 15개씩 끊어서 보여줘야 한다 ^&^ */}
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </QuestionsContent>
          <Paginations>페이지 네이션 넣을 곳</Paginations>
        </LeftBox>
        <RightBox>
          <Postic>
            <PosticCard title="The Overflow Blog" contents={contents1} />
            <PosticCard title="Featured on Meta" contents={contents2} />
          </Postic>
        </RightBox>
      </QuestionsBox>
    </Layout>
  )
}

export default Questions

const QuestionsBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 77rem;
  @media (max-width: 740px) {
    width: 120%;
  }
`
const RightBox = styled.div`
  margin-left: 1rem;
  width: 32rem;
  /* background-color: skyblue; */
`
const QuestionsHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-left: 2rem;
  /* align-items: center; */
  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }
`
const QuestionSubHeader = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1.7rem;
  }
`
const QuestionsContent = styled.div`
  height: 100%;
  margin-top: 2rem;
  border-top: solid 1px lightgray;
`

const Paginations = styled.div``

const Postic = styled.div`
  margin-top: 2rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  border: solid 1px hsl(210, 8%, 85%);
`
