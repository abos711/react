import React from 'react'
import { Card, Button } from 'react-bootstrap'

// I need to add this to activity CREATE below initial return
const ActivityUi = props => (
  <React.Fragment>
    <Card className={`shadow-lg p-3 mb-5 bg-white rounded ${props.class}`} style={{ 'width': '500px' }}>
      <Card.Header>
        <Card.Title>{props.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.title}</Card.Text>
        <Card.Text>${props.description}</Card.Text>
        <Card.Text>${props.note}</Card.Text>
        <Card.Text>${props.created_at}</Card.Text>
        <Card.Text>${props.updated_at}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={{ backgroundColor: '#3E2673' }} onClick={props.clicked}>Submit Log</Button>
        {props.children && props.children}
      </Card.Footer>
    </Card>
  </React.Fragment>
)

export default ActivityUi

// we want to have this as a home page after we sign in with a user - Emmy and #2 with activities showing. from there you want a create log button easily accessible next to an update button

// import this into create or dispose of it
