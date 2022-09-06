import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from 'src/components/Footer/Footer'
import Remirror from 'src/components/Remirror/Remirror'
import PosticCard from 'src/components/PosticCard/PosticCard'
import Pen from 'src/assets/svgComponents/Pen'
import Help from 'src/assets/svgComponents/Help'
import {getUser} from 'src/utils/localstorage'
import {authPostService} from 'src/apis/AuthPostAPI'
import {useNavigate} from 'react-router-dom'
import TagCard from 'src/components/TagCard/TagCard'

const Write = () => {
  const navigate = useNavigate()
  const user = getUser()
  if (user === null) {
    window.alert('로그인 후 사용해 주세요.')
  }
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tags.length >= 3) return window.alert('태그는 최대 3개 까지 입력가능합니다.')
    if (e.code === 'Space') {
      setTags([...tags, e.currentTarget.value])
      e.currentTarget.value = ''
    }
  }

  const handleTagDelete = (tag: string) => {
    const filteredTags = tags.filter((tagItem) => tagItem !== tag)
    setTags(filteredTags)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (tags.length === 0) return window.alert('태그는 1개 이상 작성하셔야 합니다.')

    const formdata = new FormData(e.currentTarget)
    const title = String(formdata.get('title'))

    const form = {
      title,
      content,
      tags,
      username: user.username,
    }

    const result = await authPostService.writePost(form)
    if (result.status === 201) navigate('/questions')

    return false
  }

  return (
    <Layout>
      <Main>
        <Container>
          <MainHeader>
            <MainHeaderTitle>Ask a public question</MainHeaderTitle>
            <MainHeaderImg
              src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368"
              alt="header-image"
            />
          </MainHeader>
          <MainContents>
            <MainEditor>
              <EditorForm onSubmit={handleSubmit}>
                <Editor>
                  <EditorContentWrapper>
                    <EditorTitle>Title</EditorTitle>
                    <EditorDesc>
                      Be specific and imagine you’re asking a question to another person
                    </EditorDesc>
                    <EditorInput
                      type="text"
                      name="title"
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    />
                  </EditorContentWrapper>
                  <EditorContentWrapper>
                    <EditorTitle>Body</EditorTitle>
                    <EditorDesc>
                      Include all the information someone would need to answer your question
                    </EditorDesc>
                    <RemirrorWrapper>
                      <Remirror setContent={setContent} />
                    </RemirrorWrapper>
                    <MarkdownInfo>
                      <MarkdownCodeWrapper>
                        ``` <MarkdownCode>code</MarkdownCode> ```
                      </MarkdownCodeWrapper>
                      <MarkdownBold>**bold**</MarkdownBold>
                      <MarkdownItalic>*italic*</MarkdownItalic>
                      <MarkdownQuote>&gt;quote</MarkdownQuote>
                    </MarkdownInfo>
                  </EditorContentWrapper>
                  <EditorContentWrapper>
                    <TagsWrapper>
                      <TagsInfo>
                        <EditorTitle>Tags</EditorTitle>
                        <EditorDesc>
                          Add up to 5 tags to describe what your question is about
                        </EditorDesc>
                      </TagsInfo>
                      <TagsHelp>
                        <Help />
                      </TagsHelp>
                    </TagsWrapper>
                    <TagInfo>
                      {tags.map((tag) => (
                        <div onClick={() => handleTagDelete(tag)} key={tag}>
                          <TagCard tag={tag} />
                        </div>
                      ))}
                    </TagInfo>
                    <div>
                      <input type="hidden" />
                      <EditorInput
                        type="text"
                        name="tags"
                        placeholder="e.g. (ruby-on-rails .net sql-server"
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </EditorContentWrapper>
                </Editor>
                <EditorButton type="submit">Post your question</EditorButton>
              </EditorForm>
            </MainEditor>
            <MainSide>
              <RightBox>
                <Postic>
                  <PosticCard title="Step 1: Draft your question" contents={contents1} />
                  <PosticCard title="Have a non-programming question?" contents={contents2} />
                  <PosticCard title="More helpful links" contents={contents3} />
                </Postic>
              </RightBox>
            </MainSide>
          </MainContents>
        </Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default Write

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(241, 242, 243);
`

const Main = styled.div``

const Container = styled.div`
  padding: 5rem 5%;
`

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
`

const MainHeaderTitle = styled.h3`
  flex: 1;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const MainHeaderImg = styled.img`
  flex: 1;
  min-width: 20rem;
`

const MainContents = styled.div`
  display: flex;
`
const MainEditor = styled.div`
  width: 80%;
`

const EditorForm = styled.form``

const Editor = styled.div`
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  margin: 0 2.5rem 1.5rem 0;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
  border-width: 0.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 1rem 2rem;
`

const EditorContentWrapper = styled.div`
  margin: 1.5rem 0;
`

const EditorTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.7rem 0;
`

const EditorDesc = styled.div`
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  color: rgb(88, 92, 96);
`

const EditorInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin: 0.5rem 0;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 0.3rem;

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

const RemirrorWrapper = styled.div`
  padding: 1rem 0;
`
const MarkdownInfo = styled.div`
  padding-bottom: 1.5rem;
`

const MarkdownCodeWrapper = styled.span`
  margin-right: 1rem;
`

const MarkdownCode = styled.code`
  width: 1rem;
  height: 1rem;
  padding: 0.3rem;
  background-color: rgb(241, 242, 243);
  border: 0.1rem solid rgb(46, 49, 52);
  border-radius: 0.3rem;
`
const MarkdownBold = styled.span`
  margin-right: 1rem;
  font-weight: 600;
`
const MarkdownItalic = styled.span`
  margin-right: 1rem;
  font-style: italic;
  color: rgb(106, 115, 124);
`
const MarkdownQuote = styled.span`
  margin-right: 1rem;
  color: rgb(106, 115, 124);
`

const TagsWrapper = styled.div`
  display: flex;
`

const TagsInfo = styled.div`
  flex: 15;
`

const TagsHelp = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EditorButton = styled.button`
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
`

const MainSide = styled.div``

const RightBox = styled.div`
  margin-left: 1rem;
  width: 32rem;
`

const Postic = styled.div`
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-radius: 3px;
  border: solid 1px hsl(210, 8%, 85%);
`

const TagInfo = styled.div`
  display: flex;
`

const contents1 = [
  {icon: Pen, content: '1. Summarize the problem'},
  {icon: Pen, content: "2. Describe what you've tried"},
  {icon: Pen, content: '3. Show some code'},
]
const contents2 = [
  {icon: Pen, content: 'Super user : Troubleshooting hardware and software issues'},
  {
    icon: Pen,
    content: 'Software engineering : For software development methods and process questions',
  },
  {icon: Pen, content: 'Hardware recommendations'},
  {icon: Pen, content: 'Software recommendations'},
  {icon: Pen, content: 'Ask questions about the site on meta'},
]
const contents3 = [
  {icon: Pen, content: 'Find more information about how to ask a good question here'},
  {icon: Pen, content: 'Visit the help center'},
]
