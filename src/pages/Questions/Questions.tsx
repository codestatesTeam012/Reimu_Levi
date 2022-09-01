/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import PosticCard from 'src/components/PosticCard/PosticCard'
import QuestionCard from 'src/components/QuestionCard.tsx/QuestionCard'
import {toLocalScale} from 'src/utils/utill'
import styled from 'styled-components'
import {contents1, contents2} from 'src/utils/etc'
import {RootState, useAppDispatch, useAppSelector} from 'src/redux/store'
import {getPostsThunk} from 'src/redux/thunkActions/postsAction'
import Pagenation from 'src/components/Paginations/Pagenation'

const Questions = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {posts, isLoading, pageInfo} = useAppSelector((state: RootState) => state.posts)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(getPostsThunk(currentPage))
  }, [currentPage])

  console.log(pageInfo)
  if (isLoading) return <div>Loading...</div>

  return (
    <Layout>
      <QuestionsBox>
        <LeftBox>
          <QuestionsHeader>
            <h1>All Questions</h1>
            <AuthButton
              mode="SignUp"
              text="Ask Questions"
              width={11}
              onClick={() => navigate('/write')}
            ></AuthButton>
          </QuestionsHeader>
          <QuestionSubHeader>
            <span>{toLocalScale(12345623)} questions</span>
          </QuestionSubHeader>
          <QuestionsContent>
            {posts.length === 0 ? (
              <NoContent>컨텐츠가 없어요.</NoContent>
            ) : (
              posts.map((post) => <QuestionCard key={post.postsId} post={post} />)
            )}
          </QuestionsContent>
          <PageNationBox>
            {pageInfo?.totalPages ? (
              <Pagenation
                currentPage={currentPage}
                setPage={setCurrentPage}
                // totalPage={pageInfo?.totalPages}
                totalPage={50}
                limit={5}
              />
            ) : null}
          </PageNationBox>
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
`
const QuestionsHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-left: 2rem;
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

const PageNationBox = styled.div`
  margin-top: 2rem;
  display: flex;
  margin-bottom: 2rem;
`

const Postic = styled.div`
  margin-top: 2rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  border: solid 1px hsl(210, 8%, 85%);
`

const NoContent = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-size: 2rem;
`
