import React from 'react'
import { Card } from 'react-bootstrap'

const Layout = props => (
  <div>
    <h1>Emmys Activities</h1>
    <React.Fragment>
      <Card className={`shadow-lg p-3 mb-5 bg-white rounded ${props.class}`} style={{ 'width': '700px' }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Body>
          <Card.Text>{props.activity}</Card.Text>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.note}</Card.Text>
          <Card.Text>{props.created_at}</Card.Text>
          <Card.Text>{props.updated_at}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>

  </div>
)

export default Layout
