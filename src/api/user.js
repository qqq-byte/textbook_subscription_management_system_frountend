import request from '@/utils/request'

export function accountLogin(data) {
  return request({
    url: '/user/login/account',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function teacher() {
  return request({
    url: '/user/teacher',
    method: 'get'
  })
}

export function list(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params: params
  })
}
