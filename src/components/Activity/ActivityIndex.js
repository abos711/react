import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexActivities } from '../../api/activity'
import ActivityUi from '../Activity/ActivityUi'

const Activities = ({ user, msgAlert, addActivity }) => {
  const [ activities, setActivities ] = useState(null)

  useEffect(() => {
    indexActivities(user.token)
      .then(res => {
        setActivities(res.data.activities)
      })
      .catch(err => {
        msgAlert({
          heading: 'Could not get ActivityLog',
          message: 'Error: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <Row className="justify-content-center">
      <h2 className="col-12 text-center">ActivityLog</h2>
      {activities && activities.map(activity => (
        <ActivityUi
          key={activity.id}
          class="col-6"
          name={activity.name}
          title={activity.activity}
          description={activity.description}
          note={activity.note}
          // add timestamps
          clicked={() => addActivity(activity)}
        >
          <Link to={`/activities/${activity.id}`}><Button variant="outline-primary">See Details</Button></Link>
        </ActivityUi>
      ))}
    </Row>
  )
}

export default Activities
