import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { updateActivity, showActivity } from '../../api/activity'
import ActivityForm from '../shared/ActivityForm'
// import Layout from '../shared/Layout'

const ActivityUpdate = (props) => {
  const [activity, setActivity] = useState({ name: '', activity: '', description: '', note: '', created_at: '' })
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match } = props

  useEffect(() => {
    showActivity(user, match.params.id)
      .then(res => setActivity(res.data.activity))
      .then(() => msgAlert({
        heading: 'Show Activity Success',
        message: 'See Activity',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Activity show fail',
        message: 'Error code: ' + err.message,
        variant: 'danger'
      }))
  }, [])
  // Create a handleChange function that will be run anytime an input is changed
  // ex. anytime someone types in the input
  const handleChange = event => {
    event.persist()

    setActivity(prevActivity => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedActivity = Object.assign({}, prevActivity, updatedField)
      return editedActivity
    })
  }

  // useEffect(() => {
  //   updateActivity(user, activity, match.params.id)
  //     .then(res => { console.log('sjdsjdjsdj', res) })
  //     .then(res => {
  //       setActivity(res.data.activities)
  //     })
  //     .then(() => msgAlert({
  //       heading: 'Activity Updated',
  //       message: 'Activity Update successfully',
  //       variant: 'success'
  //     }))
  //     .catch(() => msgAlert({
  //       heading: 'Update Fail',
  //       message: 'Failed to update activity',
  //       variant: 'danger'
  //     }))
  // }, [])

  const handleSubmit = event => {
    event.preventDefault()
    updateActivity(user, activity, match.params.id)
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Activity Updated',
        message: 'Activity Update successfully',
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Update Fail',
        message: 'Failed to update activity',
        variant: 'danger'
      }))
  }

  if (updated) {
    return <Redirect to={`/activities/${activity.id}`} />
  }

  return (
    <div className="row">
      <div className="col-12 text-center">
        <div className='darkForm'>
          <h1>Update Activity</h1>
          <ActivityForm
            activity={activity}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            match={match}
            user={user}
          />
        </div>
      </div>
    </div>
  )
}

export default ActivityUpdate
