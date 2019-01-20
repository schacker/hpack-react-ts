import * as React from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
console.log(3)
import './index.styl'

interface IProps extends React.Props<any> {
  router: {
    path: string,
    title: string,
    component: any,
    show: boolean,
    exact: boolean
  }[]
}

export default class extends Component<IProps, {}> {
  render () {
    const { router } = this.props
    return <div className='side-container'>
      {
        router.length > 0 && router.map((item, i) => <div className='nav-container' key={i}><NavLink strict exact={item.exact} to={item.path} activeClassName='selected'>{item.title}</NavLink></div>)
      }
    </div>
  }
}
