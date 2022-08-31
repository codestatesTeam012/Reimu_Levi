import axios from 'axios'
import {SERVER_URL} from '.'
import {ILogin, ISingUp} from './type/types'
import jwt_decode from 'jwt-decode'
import {setCookie} from 'src/utils/cookie'

const authAPI = axios.create({baseURL: SERVER_URL, timeout: 1000})

export const Login = async (LoginForm: ILogin) => {
  try {
    const result = await authAPI.post(`/login`, LoginForm)
    const jwt = result.headers.authorization.split(' ')[1]
    setCookie('accessToken', jwt) // 쿠키에 jwt 저장
    const decoded = jwt_decode(jwt) // jwt 유저정보 추출
    localStorage.setItem('user', JSON.stringify(decoded)) // 로컬스토리지 유저정보 저장
    return result
  } catch {
    throw new Error('로그인 실패 👻')
  }
}

export const SignUp = async (SignUpForm: ISingUp) => {
  console.log('Form', SignUpForm)
  try {
    const result = await authAPI.post(`/v1/member/create`, SignUpForm)
    return result
  } catch {
    throw new Error('회원가입 실패 👻')
  }
}

export const authService = {
  Login,
  SignUp,
}
