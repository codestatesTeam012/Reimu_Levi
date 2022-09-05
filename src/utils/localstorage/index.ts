import {getCookie, removeCookie} from '../cookie'

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const getUser = () => {
  const user =
    localStorage.getItem('user') && getCookie('accessToken')
      ? JSON.parse(localStorage.getItem('user')!)
      : null
  return user
}

export const clearUser = () => {
  removeCookie('accessToken')
  localStorage.clear()
}
