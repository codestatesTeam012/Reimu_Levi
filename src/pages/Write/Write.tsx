import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header/Header'
import styled from 'styled-components'
import Help from 'src/assets/svgComponents/Help'

const Write = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <MainTitle>
          <Title>Ask a public question</Title>
          <TitleImg
            src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368"
            alt="title-image"
          />
        </MainTitle>
        <Contents>
          <LeftContent>
            <MainContent>
              <Editor>
                <EditorSection>
                  <EditorTitle>Title</EditorTitle>
                  <EditorDesc>
                    Be specific and imagine you’re asking a question to another person
                  </EditorDesc>
                  <Input
                    type="text"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </EditorSection>
                <EditorSection>
                  <EditorTitle className="title-main">Body</EditorTitle>
                  <EditorDesc>
                    Include all the information someone would need to answer your question
                  </EditorDesc>
                </EditorSection>
                <EditorSection className="tags">
                  <EditorTitle className="title-main">Tags</EditorTitle>
                  <EditorDesc className="title-desc">
                    Add up to 5 tags to describe what your question is about
                  </EditorDesc>
                  <Help />
                  <Input type="text" placeholder="e.g. (ruby-on-rails .net sql-server" />
                </EditorSection>
              </Editor>
              <LeftButton>
                <Button>Review your question</Button>
              </LeftButton>
            </MainContent>
          </LeftContent>
          <RightContent className="notice"></RightContent>
        </Contents>
      </Container>
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

const Container = styled.div`
  display: flex;
  padding: 0 10%;
  min-height: 55em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const MainTitle = styled.div`
  font-size: 2rem;
  display: flex;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const Title = styled.h1`
  flex: 4;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
`
const TitleImg = styled.img`
  flex: 4;
  min-width: 20rem;
`

const Contents = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  flex: 5;
  width: 80%;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  margin-right: 2.5rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
  border-width: 0.1rem;
`

const MainContent = styled.div`
  padding: 1.8rem;
`

const Editor = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const RightContent = styled.div`
  flex: 2;
  background-color: #e6f2f6;
`

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
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

const EditorSection = styled.div`
  margin-bottom: 1rem;

  .tags {
    display: flex;
    flex-direction: row;
  }
`

const EditorTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.7rem 0;
`
const EditorDesc = styled.p`
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
`

const LeftButton = styled.div``

const Button = styled.button`
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
`
