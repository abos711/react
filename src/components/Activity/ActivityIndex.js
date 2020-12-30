import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'
import { indexActivities } from '../../api/activity'

// import ActivityUi from './ActivityUi'

const Activities = props => {
  const [activities, setActivities] = useState(null)
  const { user, msgAlert } = props

  // need to link to Activity file here
  // useEffect(() => {
  //   axios(`${apiUrl}/activities`)
  //     .then(res => setActivities(res.data.activities))
  //     .catch(console.error)
  // }, [])
  useEffect(() => {
    indexActivities(user)
      // .then(res => { console.log('sjdsjdjsdj', res) })
      .then(res => {
        setActivities(res.data.activities)
      })
      .then(() => msgAlert({
        heading: 'Activities Index',
        message: 'Index successfully',
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Index Fail',
        message: 'Failed to pull activities',
        variant: 'danger'
      }))
  }, [])

  let index
  if (!activities) {
    index = <h3> Activities Loading... </h3>
  } else if (activities.length === 0) {
    index =
      <div>
        <h3> No Activities Created. See CreateLog Link Above</h3>
      </div>
  } else {
    index = activities.map(activity => (
      <div key={activity.id}>
        <Card className={'shadow-lg p-3 mb-5 bg-white rounded'} style={{ 'width': '500px' }}>
          <Card.Body>
            <Card.Text>{activity.name}</Card.Text>
            <Card.Text>{activity.activity}</Card.Text>
            <Card.Text>{activity.created_at}</Card.Text>
            <Card.Text>{activity.updated_at}</Card.Text>
          </Card.Body>
          <Link to={`/activities/${activity.id}`}>
            <Button variant="primary">Show</Button>
          </Link>
        </Card>
      </div>
    ))
  }

  return (
    <Fragment>
      <div className='row'>
        <div className="col-6 text-center">
          <h2>Emmys Activities</h2>
          {index}
        </div>
      </div>
    </Fragment>
  )
}

export default Activities
