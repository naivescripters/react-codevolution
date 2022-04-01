import React, { Component } from 'react'

class RegComp extends Component {
  render() {
      console.log('Regualar component render')
    return (
      <div>
          Regualr Component {this.props.name}
      </div>
    )
  }
}

export default RegComp