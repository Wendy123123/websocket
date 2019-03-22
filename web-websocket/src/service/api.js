/* eslint-disable */
import service from '../utils/request'

export const getDataList = (params = {}) => {
  const data = {
    ...params
  }
  return service({
    url: '/api/user.json',
    method: 'get',
    params: data
  })

}