import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
import { showActivity, deleteActivity } from '../../api/activity'
import { Card, Button } from 'react-bootstrap'
// import Layout from '../shared/Layout'

const ActivityShow = (props) => {
  const [activity, setActivity] = useState(null)
  const [update, setUpdate] = useState(false)
  const { user, msgAlert, match } = props
  const [deleted, setDeleted] = useState(false)

  // console.log('kjsndkjfnsdkf', match.params)

  useEffect(() => {
    showActivity(user, match.params.id)
      .then(res => {
        setActivity(res.data.activity)
      })
      .then(() => {
        msgAlert({
          heading: 'Show Activity Success',
          message: 'See Activity',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Activity show fail',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    deleteActivity(user, match.params.id)
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (activity === null) {
    return (<div><p>Activity Loading...</p></div>)
  }

  const handleUpdate = () => {
    setUpdate(true)
  }

  if (update) {
    return <Redirect to={'/activity-update/' + activity.id} />
  }

  if (deleted) {
    return (
      <Redirect to={{
        pathname: '/activities/',
        state: { msg: 'Activity Deleted' }
      }} />
    )
  }

  return (
    <div className="row">
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Activity</h1>
        <Card>
          <Card.Body>
            <Card.Text>{activity.name}</Card.Text>
            <Card.Text>{activity.activity}</Card.Text>
            <Card.Text>{activity.description}</Card.Text>
            <Card.Text>{activity.note}</Card.Text>
            <Card.Text>{activity.created_at}</Card.Text>
            <Button variant="primary" onClick={handleUpdate}>Update</Button>
            <Button variant="primary" onClick={destroy}>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default withRouter(ActivityShow)
