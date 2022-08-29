/* eslint-disable react/no-children-prop */
import React from 'react'
import BackClock from 'src/assets/svgComponents/BackClock'
import IconBookMark from 'src/assets/svgComponents/IconBookMark'
import UpDownIcon from 'src/assets/svgComponents/UpDownIcon'
import AuthButton from 'src/components/AuthButton/AuthButton'
import Layout from 'src/components/Layout/Layout'
import MarkDownPreview from 'src/components/MarkDownPreview/MarkDownPreview'
import TagCard from 'src/components/TagCard/TagCard'
import styled from 'styled-components'

const Detail = () => {
  // https://stackoverflow.com/questions/73523485/how-to-access-gitlab-ce-web-pages
  const TagsArr = ['javascript', 'jquery', 'pageshow']

  const markdown = `
  # Heading1
  ## Heading2
  please I need help posting a form I built in HTML to an API endpoint that is protected by OAuth1.0, I think I need an authorization header and also need to get an access token though 
  not sure of what to do, I am new to codes, here is my script const myform = document.getElementById('myform');
  \`\`\`js
  myform.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const options = {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'},
        body: JSON.stringify(Object.fromEntries(formData))

    }


    fetch('https://api.tripleseat.com/v1/leads/create.js?lead_form_id=xxxxx&public_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', options)
        
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
    })
});
  \`\`\`

  테스트 테스트 테스트 
  `
  return (
    <Layout>
      <Container>
        <Header>
          <TitleBox>
            <h1>How to access gitlab-ce web pages?</h1>
            <AuthButton mode="SignUp" text="Ask Questions" width={11} />
          </TitleBox>
          <SubBox>
            <div>
              <h3>Asked</h3>
              <span>today</span>
            </div>
            <div>
              <h3>Modified</h3>
              <span>today</span>
            </div>
            <div>
              <h3>Viewed</h3>
              <span>today</span>
            </div>
          </SubBox>
        </Header>
        <Content>
          <LeftContent>
            <UtilIcons>
              <UpDownIcon mode="up" />
              <Count>0</Count>
              <UpDownIcon mode="down" />
              <IconBookMark />
              <BackClock />
            </UtilIcons>
            <MainContent>
              <MarkDownPreview markdown={markdown} />
              <Tags>
                {TagsArr.map((tag) => (
                  <TagCard tag={tag} key={tag} />
                ))}
              </Tags>
            </MainContent>
          </LeftContent>
          <RightContent>2</RightContent>
        </Content>
      </Container>
    </Layout>
  )
}

export default Detail

const Container = styled.div``

const Header = styled.div`
  margin: 2rem 2rem;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: hsl(210, 8%, 25%);
    font-size: 2.7rem;
  }
`
const SubBox = styled.div`
  display: flex;
  font-size: 1.35rem;
  margin-top: 1rem;
  div {
    display: flex;
    margin-right: 2rem;
  }
  h3 {
    color: hsl(210, 8%, 45%);
    margin-right: 0.5rem;
  }
  padding-bottom: 2rem;
  border-bottom: solid 1px lightgray;
`
const Content = styled.div`
  display: flex;
  margin-left: 2rem;
`
const LeftContent = styled.div`
  display: flex;
  width: 72.7rem;
`

const RightContent = styled.div`
  margin-left: 2rem;
  width: 30rem;
  background-color: skyblue;
`
const UtilIcons = styled.div`
  width: 6.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Count = styled.span`
  font-size: 2rem;
  color: gray;
  font-weight: bold;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65.9rem;
`

const Tags = styled.div`
  display: flex;
`
