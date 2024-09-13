import React, { Component } from 'react'

export default class App extends Component {
    state =
    {
        tName: "Swetha",
        subject: "FullStackDevelopment"
    }
  render() {
    return (
      <div>
        I am {this.state.tName} learning {this.state.subject}
      </div>
    )
  }
}

