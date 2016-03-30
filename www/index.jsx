'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'

class Root extends Component {
  super(props) {
    this.props = props
  }

  render() {
    return <h1>I do not sneef de cok I only smok de sinsemilla</h1>
  }
}

render( <Root />, document.getElementById('root') )
