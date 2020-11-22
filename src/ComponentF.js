import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UserConsumer} from './userContext'
export class ComponentF extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>  
        <UserConsumer>
        {
          (username)=>{
          return <div>Hello {username}</div>
          }
        }
        </UserConsumer>
         
      </div>
    )
  }
}

export default ComponentF
