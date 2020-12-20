import axios from 'axios'
import apiUrl from '../apiConfig'

export const createActivity = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/activities/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { data }
  })
}

export const indexActivities = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/activities/',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const showActivity = (user, activityId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const updateActivity = (user, data, activityId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { data }
  })
}

export const deleteActivity = (user, activityId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
