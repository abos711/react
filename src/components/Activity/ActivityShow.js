import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Activity = (props) => {
  const [activity, setActivity] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/activities/${props.match.params.id}`)
      .then(res => setActivity(res.data.activity))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/activities/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!activity) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return (
      <Redirect to={{
        pathname: '/', state: { msg: 'Activity succesfully deleted!' }
      }} />
    )
  }

  return (
    <Layout>
      <h4>{activity.activity}</h4>

      <button onClick={destroy}>Delete Activity</button>
      <Link to={`/activities/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to='/activities'>ActivityLog</Link>
    </Layout>
  )
}

export default Activity

// <Row className="justify-content-center">
//     <h2 className="col-12 text-center">ActivityDetail</h2>
//     {activity => (
//       <ActivityUi
//         key={activity._id}
//         class="col-12"
//         activity={activity.activity}
//         description={activity.description}
//         note={activity.note}
//         created_at={activity.created_at}
//       >
//         <Link to={`/activities/${activities._id}`}><Button variant="outline-secondary">Update Activity</Button></Link>
//         <Link to={`/activities/${activities._id}`}><Button varient="outline-secondary">Delete Activity</Button></Link>
//         </ActivityUi>
//     ))}
//   </Row>
