import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import ActivityForm from '../shared/ActivityForm'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'

import { createActivity } from '../../api/activity'

const ActivityCreate = props => {
  const [activity, setActivity] = useState({ name: '', activity: '', description: '', note: '', created_at: '' })
  const [createdActivityId, setCreatedActivityId] = useState(null)

  const { user, match } = props
  // console.log(createdActivityId)
  const handleChange = event => {
    event.persist()
    setActivity(prevActivity => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedActivity = Object.assign({}, prevActivity, updatedField)

      return editedActivity
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = props
    // event to api here. Doesn't seem to be connecting
    // axios({
    //   url: `${apiUrl}/activities`,
    //   method: 'POST',
    //   data: { activity }
    // })
    //   .then(res => setCreatedActivityId(res.data.book._id))
    //   .catch(console.error)
    createActivity(user, activity)
      // .then(res => { console.log('This is res', res) })
      .then(res => {
        setCreatedActivityId(res.data.activity.id)
      })
      .then(() => msgAlert({
        heading: 'Create Success',
        message: 'Activity created successfully',
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Create Fail',
        message: 'Failed to create',
        variant: 'danger'
      }))
  }

  if (createdActivityId) {
    return <Redirect to={`/activities/${createdActivityId}`} />
  }
  // Alter tomorrow for style day
  // Do i need to install a form field to have this work?
  return (
    <div className="row">
      <div className="col-12 text-center">
        <div className='darkForm'>
          <h1>Add an Activity</h1>
          <ActivityForm
            name={name}
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

export default ActivityCreate
