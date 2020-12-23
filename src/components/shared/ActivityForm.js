import React from 'react'
import { Link } from 'react-router-dom'

const ActivityForm = ({ activity, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Activity</label>
    <input
      placeholder="Nap, DiaperChange, Bottle, etc."
      value={activity.activity}
      name="activity"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="#1 v #2, nap duration, BM vs formula"
      value={activity.description}
      name="description"
      onChange={handleChange}
    />

    <label>ExtraNote</label>
    <input
      placeholder="Grumpy, DiaperRash, etc.. "
      value={activity.note}
      name="note"
      onChange={handleChange}
    />

    <label>TimeStamp</label>
    <input
      value={activity.created_at}
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ActivityForm
