import * as React from 'react'
import { Component } from 'react'
console.log('inner module1')
// interface IProps extends React.Props<any> {
//   router: {
//     path: string,
//     title: string,
//     component: any,
//     show: boolean,
//     exact: boolean
//   }[]
// }

export default class extends Component {
  render () {
    return <div> Module1 </div>
  }
}
