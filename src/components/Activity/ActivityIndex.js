import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'
import { indexActivities } from '../../api/activity'

import ActivityUi from './ActivityUi'

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
        heading: 'Activity Pull Success',
        message: 'Activity index successfully',
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
        <h3> No Activities Created. See Link </h3>
        <Link to="/create-activity"></Link>
      </div>
  } else {
    index = activities.map(activity => (
      <ActivityUi
        key={activity.id}
        class="col-6"
        activity={activity.activity}
        description={activity.description}
        note={activity.note}
        created_at={activity.created_at}
      />
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

// <Row className="justify-content-center">
//     <h2 className="col-12 text-center">ActivityLog</h2>
//     {activities && activities.map(activity => (
//       <ActivityUi
//         key={activity._id}
//         class="col-6"
//         activity={activity.activity}
//         description={activity.description}
//         note={activity.note}
//         created_at={activity.created_at}
//       >
//         <Link to={`/activities/${activities._id}`}><Button variant="outline-primary">See Details</Button></Link>
//       </ActivityUi>
//     ))}
//   </Row>

