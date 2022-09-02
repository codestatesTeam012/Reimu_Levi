import React from 'react'
import styled from 'styled-components'
import Help from 'src/assets/svgComponents/Help'
import Share from 'src/assets/svgComponents/Share'
import Question from 'src/assets/svgComponents/Question'
import UpDownUnit from 'src/assets/svgComponents/UpDownUnit'
import Tag from 'src/assets/svgComponents/Tag'
import Trophy from 'src/assets/svgComponents/Trophy'
import SocialButton from 'src/components/SocialButton/SocialButton'
import {authService} from 'src/apis/AuthAPI'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formdata = new FormData(e.currentTarget)
    const username = String(formdata.get('username'))
    const email = String(formdata.get('email'))
    const password = String(formdata.get('password'))

    const form = {
      username: username,
      email: email,
      password: password,
    }

    const result = await authService.SignUp(form)
    if (result.status === 200) {
      navigate('/login')
    }
  }

  return (
    <Layout>
      <Wrapper>
        <LeftSection>
          <LeftSectionTitle>Join the Stack Overflow community</LeftSectionTitle>
          <LeftSectionContents>
            <Question />
            <LeftSectionContent>Get unstuck — ask a question</LeftSectionContent>
          </LeftSectionContents>
          <LeftSectionContents>
            <UpDownUnit />
            <LeftSectionContent>
              Unlock new privileges like voting and commenting
            </LeftSectionContent>
          </LeftSectionContents>
          <LeftSectionContents>
            <Tag />
            <LeftSectionContent>Save your favorite tags, filters, and jobs</LeftSectionContent>
          </LeftSectionContents>
          <LeftSectionContents>
            <Trophy />
            <LeftSectionContent>Earn reputation and badges</LeftSectionContent>
          </LeftSectionContents>
          <LeftSectionContents>
            <LeftSectionContentDesc>
              Collaborate and share knowledge with a private group for FREE.
            </LeftSectionContentDesc>
            <LeftSectionContentDesc>
              Get Stack Overflow for Teams free for up to 50 users.
            </LeftSectionContentDesc>
          </LeftSectionContents>
        </LeftSection>
        <RightSection>
          <div className="Auth">
            <SocialButton />
          </div>
          <SignUpForm onSubmit={handleSubmit}>
            <SignUpWrapper>
              <SignUpInfo>
                <SignUpTitle>Display name</SignUpTitle>
                <SignUpInput type="text" name="username" />
              </SignUpInfo>
              <SignUpInfo>
                <SignUpTitle>Email</SignUpTitle>
                <SignUpInput type="email" name="email" />
              </SignUpInfo>
              <SignUpInfo>
                <SignUpTitle>Password</SignUpTitle>
                <SignUpInput type="password" name="password" />
                <p>
                  Passwords must contain at least eight characters, including at least 1 letter and
                  1 number.
                </p>
              </SignUpInfo>
            </SignUpWrapper>
            <SignUpCheckBox>
              <SignUpCheckWrapper>
                <input type="checkbox" name="policyagree" />
              </SignUpCheckWrapper>
              <SignUpCheckWrapper>
                <span>
                  Opt-in to receive occasional product updates, user research invitations, company
                  announcements, and digests.
                </span>
              </SignUpCheckWrapper>
              <SignUpCheckWrapper>
                <Help color="rgb(106,115,124)" />
              </SignUpCheckWrapper>
            </SignUpCheckBox>
            <SingUpButton>Sign up</SingUpButton>
            <SignUpAgree>
              By clicking “Sign up”, you agree to our <span>terms of service</span>,{' '}
              <span>privacy policy</span>
              and <span>cookie policy</span>
            </SignUpAgree>
          </SignUpForm>
          <RightSectionBottom>
            <RightSectionBottomInfo>
              Already have an account? <span>Log in</span>
            </RightSectionBottomInfo>
            <RightSectionBottomInfo>
              Are you an employer?{' '}
              <span>
                Sign up on Talent <Share />
              </span>
            </RightSectionBottomInfo>
          </RightSectionBottom>
        </RightSection>
      </Wrapper>
    </Layout>
  )
}

export default SignUp

const Layout = styled.div`
  padding-top: 5rem;
  background-color: rgb(241, 242, 243);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 55%; */
`
const LeftSection = styled.div``

const LeftSectionTitle = styled.h1`
  font-size: 2.7rem;
  padding: 1.3rem 0;
`

const LeftSectionContents = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;

  :last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    font-size: 1.2rem;
  }
`

const LeftSectionContent = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`

const LeftSectionContentDesc = styled.div`
  font-size: 1.3rem;
  margin: 0.3rem 0;
  color: rgb(106, 115, 124);

  :last-child {
    color: rgb(0, 116, 204);

    :hover {
      color: rgb(58, 165, 246);
    }
  }
`

const RightSection = styled.div`
  /* flex: 2.5; */
  margin-left: 6rem;
  flex-shrink: 1 !important;
  max-width: 30rem;
`

const SignUpForm = styled.form`
  padding: 2.5rem;
  border-radius: 0.7rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);
  margin: 1.5rem 0;
`

const SignUpWrapper = styled.div``

const SignUpInfo = styled.div`
  margin-bottom: 1.3rem;

  p {
    color: rgb(121, 130, 138);
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`
const SignUpTitle = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`
const SignUpInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.8rem 0;
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

const SignUpCheckBox = styled.div`
  display: flex;
  margin: 1rem 0;

  input[type='checkbox'] {
    margin: 0 0.6rem 0 0;
    outline: 0.1px solid rgb(220, 223, 225);
  }

  span {
    font-size: 1.2rem;
    color: rgb(20, 21, 22);
    line-height: 1.5rem;
  }
`

const SignUpCheckWrapper = styled.div`
  margin-top: 0.5rem;
`

const SingUpButton = styled.button`
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  margin: 1rem 0 2rem 0;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    background-color: rgba(4, 98, 181, 0.773);
  }
`

const SignUpAgree = styled.div`
  font-size: 1.1rem;
  color: rgb(144, 150, 158);
  line-height: 1.5rem;

  span {
    color: rgb(87, 152, 218);
    :hover {
      color: rgb(58, 165, 246);
    }
  }
`

const RightSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 3rem;
`

const RightSectionBottomInfo = styled.a`
  color: rgb(77, 77, 77);
  margin: 0.7rem;

  :last-child {
  }
  span {
    color: rgb(9, 118, 204);
    cursor: pointer;

    :hover {
      color: rgb(58, 165, 246);
    }
  }
`
