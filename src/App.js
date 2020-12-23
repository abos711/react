import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// Activity Imports
import ActivityCreate from './components/Activity/ActivityCreate'
import ActivityIndex from './components/Activity/ActivityIndex'
import ActivityShow from './components/Activity/ActivityShow'
import ActivityUpdate from './components/Activity/ActivityUpdate'
import ActivityDelete from './components/Activity/ActivityDelete'
// import + authenticated route below

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Activities */}
          <AuthenticatedRoute user={user} exact path='/create-activity' render={(props) => (
            <ActivityCreate msgAlert={this.msgAlert} user={user} match={ props.match }/>
          )} />
          <AuthenticatedRoute user={user} exact path='/activities' render={() => (
            <ActivityIndex msgAlert={this.msgAlert} user={user} addActivity={this.addActivity}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/activities/:id' render={(props) => (
            <ActivityShow msgAlert={this.msgAlert} user={user} addActivity={this.addActivity} match={props.match}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/activities-update/:id' render={(props) => (
            <ActivityUpdate msgAlert={this.msgAlert} user={user} match={props.match} location={props.location}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/activities-delete/:id' render={() => (
            <ActivityDelete msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
