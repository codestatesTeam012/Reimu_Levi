import React from 'react'
import styled from 'styled-components'
import Help from 'src/assets/svgComponents/Help'
import Share from 'src/assets/svgComponents/Share'
import Question from 'src/assets/svgComponents/Question'
import UpDownUnit from 'src/assets/svgComponents/UpDownUnit'
import Tag from 'src/assets/svgComponents/Tag'
import Trophy from 'src/assets/svgComponents/Trophy'

const SignUp = () => {
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
          2
          <div className="Auth">
            1<button></button>
            <button></button>
            <button></button>
          </div>
          <div className="SignupInfo">
            2
            <div>
              <div className="signUpTitle">Display name</div>
              <input type="text" />
              <div className="signUpTitle">Email</div>
              <input type="text" />
              <div className="signUpTitle">Password</div>
              <input type="text" />
              <p>
                Passwords must contain at least eight characters, including at least 1 letter and 1
                number.
              </p>
            </div>
            <div>
              <input type="checkbox" />
              <p>
                Opt-in to receive occasional product updates, user research invitations, company
                announcements, and digests.
              </p>
              <Help />
            </div>
            <div>
              <button>Sign up</button>
            </div>
            <div>
              <p>
                By clicking “Sign up”, you agree to our{' '}
                <span>terms of service, privacy policy</span>
                and <span>cookie policy</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              Already have an account? <span>Log in</span>
            </div>
            <div>
              Are you an employer?{' '}
              <span>
                Sign up on Talent
                <Share />
              </span>
            </div>
          </div>
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
  width: 55%;
`
const LeftSection = styled.div``

const RightSection = styled.div``

const LeftSectionTitle = styled.h1`
  font-size: 2.5rem;
  padding: 1.3rem 0;
`

const LeftSectionContents = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
`

const LeftSectionContent = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`

const LeftSectionContentDesc = styled.div``
