// import React from 'react'
// import { Card, Button } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'
//
// // const showPage = (props) => {
// //   console.log('anything is possible')
// //   console.log('i am props', props)
// //   return <Redirect to={'/activities/' + props.activity.id} />
// // }
//
// const ActivityUi = (props, activity) => (
//   <React.Fragment>
//     <Card className={`shadow-lg p-3 mb-5 bg-white rounded ${props.class}`} style={{ 'width': '500px' }}>
//       <Card.Body>
//         <Card.Text>{props.name}</Card.Text>
//         <Card.Text>{props.activity}</Card.Text>
//         <Card.Text>{props.description}</Card.Text>
//         <Card.Text>{props.note}</Card.Text>
//         <Card.Text>{props.created_at}</Card.Text>
//         <Card.Text>{props.updated_at}</Card.Text>
//         <Button variant="primary" onClick={
//           <Redirect to={'/activity-update/' + activity.id} />
//         }>Show</Button>
//       </Card.Body>
//     </Card>
//   </React.Fragment>
// )
//
// export default ActivityUi
