import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {authService} from 'src/apis/AuthAPI'
import Logo from 'src/assets/svgComponents/Logo'
import AuthButton from 'src/components/AuthButton/AuthButton'
import SocialButton from 'src/components/SocialButton/SocialButton'
import styled from 'styled-components'

const Login = () => {
  const [error, setErorr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const username = String(formdata.get('username'))
    const password = String(formdata.get('password'))
    const form = {
      username,
      password,
    }
    const result = await authService.Login(form)
    if (result.status === 200) navigate('/questions')
    else setErorr(true)
  }
  return (
    <Container>
      <Blank></Blank>
      <MainContent>
        <LogoBox>
          <Logo />
        </LogoBox>
        <SocialButton />
        <LoginBox>
          <LoginForm onSubmit={handleSubmit}>
            <label>Eamil</label>
            <input type="text" name="username" />
            <LabelBox>
              <label>Password</label>
              <span>Forgot password ?</span>
            </LabelBox>
            <input type="password" name="password" />
            <ButtonBox>
              <AuthButton mode="SignUp" width={23} text="Log in" />
            </ButtonBox>
            {error ? <ErrorText>아이디 , 패스워드를 확인해주세요.</ErrorText> : null}
          </LoginForm>
        </LoginBox>
        <TextBox>
          <p>
            Don`t have an account ? <Link to={'/signup'}>Sign up</Link>
          </p>
          <p>
            Are you an employer ? <Link to={'/'}>Sign up on Talent</Link>
          </p>
        </TextBox>
      </MainContent>
    </Container>
  )
}

export default Login

const Container = styled.div`
  background-color: hsl(210, 8%, 95%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Blank = styled.div`
  height: 5rem;
`

const MainContent = styled.div`
  width: 29rem;
  height: 57.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoBox = styled.div`
  margin-bottom: 2rem;
`

const LoginBox = styled.div`
  margin-top: 2rem;
  background-color: white;
  width: 100%;
  height: 25rem;
  border-radius: 1rem;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  label {
    margin-top: 2rem;
    color: hsl(210, 8%, 5%);
    font-size: 1.5rem;
    font-weight: bold;
  }

  span {
    font-size: 1.1rem;
    margin-top: 2rem;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
  }
  input {
    padding-left: 1rem;
    margin-top: 1rem;
    height: 3.7rem;
    border: solid 1px lightgray;
    border-radius: 3px;
  }
`

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonBox = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
`

const TextBox = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
  p {
    margin-top: 1.5rem;
  }

  a {
    margin-top: 2rem;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
    text-decoration: none;
  }
`
const ErrorText = styled.p`
  padding-top: 1rem;
  text-align: center;
  color: red;
  font-size: 1.2rem;
`
