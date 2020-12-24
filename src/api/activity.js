import axios from 'axios'
import apiUrl from '../apiConfig'

export const createActivity = (user, activity) => {
  console.log(user)
  console.log(activity)
  return axios({
    method: 'POST',
    url: `${apiUrl}/activities/`,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { activity }
  })
}

export const indexActivities = (user) => {
  console.log(user)
  return axios({
    method: 'GET',
    url: `${apiUrl}/activities/`,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const showActivity = (user, activityId) => {
  console.log(user)
  console.log('this is acitfovinasdvkmadv', activityId)
  return axios({
    method: 'GET',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const updateActivity = (user, activity, activityId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { activity }
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
