import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
// import indexActivities from '../api/activity'
// import ActivityUi from './ActivityUi'

const Activities = props => {
  const [activities, setActivities] = useState([])

  // need to link to Activity file here
  useEffect(() => {
    axios(`${apiUrl}/activities`)
      .then(res => setActivities(res.data.activities))
      .catch(console.error)
  }, [])

  const activitiesJsx = activities.map(activity => (
    <li key={activity._id}>
      <Link to={`/activities/${activity._id}`}>{activity.activity}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Activities</h4>
      <ul>
        {activitiesJsx}
      </ul>
    </Layout>
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
