import React, { useEffect, useState } from 'react'
import { showActivity } from '../../api/activity'
import ActivityUi from '../Activity/ActivityUi'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActivityShow = ({ user, msgAlert, match, addActivity }) => {
  const [ activity, setActivity ] = useState(null)

  useEffect(() => {
    showActivity(user.token, match.params.id)
      .then(res => {
        setActivity(res.data.activity)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Product Failure',
          message: `Error: ${err.message}`,
          variant: 'danger'
        })
      })
  }, [])

  // Add link buttons to update and delete after line 40

  return (
    <div>
      <Row className="justify-content-center">
        {activity && (
          <Row className="justify-content-center">
            <ActivityUi
              key={activity.id}
              class="col-6"
              name={activity.name}
              title={activity.activity}
              description={activity.description}
              note={activity.note}
              // add timestamps
              clicked={() => addActivity(activity)}
            />
          </Row>
        )}
      </Row>
    </div>
  )
}

export default ActivityShow
