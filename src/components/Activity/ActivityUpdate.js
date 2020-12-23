import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ActivityForm from '../shared/ActivityForm'
import Layout from '../shared/Layout'

const ActivityUpdate = (props) => {
  const [activity, setActivity] = useState({ name: '', activity: '', description: '', note: '', updated_at: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/activities/${props.match.params.id}`)
      .then(res => setActivity(res.data.activity))
      .catch(console.error)
  }, [])

  // Create a handleChange function that will be run anytime an input is changed
  // ex. anytime someone types in the input
  const handleChange = event => {
    // ensure that the event's properties (especially event.target) are persisted,
    // i.e. not changed to null, after the handleChange function finishes running
    //
    // we need to do this, because the callback we pass to `this.setState`, will
    // not be called by React until after `handleChange` has finished running.
    event.persist()

    // use the updater callback function syntax, because our new state depends on
    // our previous state
    setActivity(prevActivity => {
      // create an object that will keep track of our updated field
      // ex. if the input's `name` is 'title' and its `value` was `1984`, then updated
      // field would be the object { 'title': '1984' }
      const updatedField = { [event.target.name]: event.target.value }

      // Copy the activity properties onto the target object {}, creating a copy of `this.state.activity`
      // Copy the updatedField onto the target object (our activity copy)
      // return the target object as editedActivity
      const editedActivity = Object.assign({}, prevActivity, updatedField)

      // return the new activity state that will **replace** `activity`
      // in this case, we set the `activity` state to be the new `editedActivity`
      return editedActivity
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/activities/${props.match.params.id}`,
      method: 'PATCH',
      data: { activity }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/activities/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <ActivityForm
        activity={activity}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/activities/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default ActivityUpdate
