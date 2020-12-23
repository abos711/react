import axios from 'axios'
import apiUrl from '../apiConfig'

export const createActivity = (activity, user) => {
  // console.log(activity)
  console.log(user)
  return axios({
    method: 'POST',
    url: apiUrl + '/activities/',
    headers: {
      'Authorization': `Token ${user}`
    },
    data: { activity: activity }
  })
}

export const indexActivities = (user) => {
  console.log(user)
  return axios({
    method: 'GET',
    url: apiUrl + '/activities/',
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const showActivity = (user, activityId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const updateActivity = (user, data, activityId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user}`
    },
    data: { data }
  })
}

export const deleteActivity = (user, activityId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/activities/' + activityId,
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}
