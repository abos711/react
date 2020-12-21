import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { deleteActivity, showActivity } from '../../api/activity'

const ActivityDelete = (props) => {
  const [ activity, setActivity ] = useState(null)

  const { user, match, msgAlert } = props
  const { activityId } = match.params
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    // need activity ID/user to delete
    showActivity(user, activityId)
      .then(response => setActivity(response.data.review))
      .catch(err => {
        msgAlert({
          heading: 'Cannot find activity',
          message: `Error: ${err.message}`,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    // add productID in deleteReview
    deleteActivity(user, activityId)
      .then(() => {
        msgAlert({
          heading: 'Activity Deleted',
          message: 'Your Activity has been removed',
          variant: 'success'
        })
      })

      .then(() => setDeleted(true))
      .catch(err => {
        msgAlert({
          heading: 'Delete Fail',
          message: `Error: ${err.message}`,
          variant: 'danger'
        })
      })
  }

  if (deleted) {
    return (
      // redirect back to activity index
      <Redirect to={'/activities/'}/>
    )
  }
  return (
    <div className="text-center">
      { activity ? (
        <div className="text-center">
          <h2>Are you sure you want to delete this activity?</h2>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default ActivityDelete
