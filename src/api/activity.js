import axios from 'axios'
import apiUrl from '../apiConfig'

export const createActivity = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      name: data.name,
      activity: data.activity,
      description: data.description,
      note: data.note
    }
  })
}
