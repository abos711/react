import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

const ActivityForm = ({ activity, user, handleSubmit, handleChange }) => {
  return (
    <form>
      <Form.Group controlId='activity'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="Kids Name"
          value={activity.name}
          name="name"
          onChange={handleChange}
        />
        <Form.Label>Activity</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="Nap, DiaperChange, Bottle, etc."
          value={activity.activity}
          name="activity"
          onChange={handleChange}
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="#1 v #2, nap duration, BM vs formula"
          value={activity.description}
          name="description"
          onChange={handleChange}
        />

        <Form.Label>ExtraNote</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="Grumpy, DiaperRash, etc.. "
          value={activity.note}
          name="note"
          onChange={handleChange}
        />

      </Form.Group>
      <Button className="form-submit-button" varient="primary" onClick={ handleSubmit }>Submit</Button>
    </form>
  )
}

export default ActivityForm
