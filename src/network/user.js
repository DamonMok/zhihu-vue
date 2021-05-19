import { request } from './request'

export function requestLogin(userName, password) {
  return request('post', {
    url: 'login',
    data: {
      userName,
      password
    }
  })
}