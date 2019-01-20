import * as React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import Sider from '../Sider'
console.log('Sider', Sider)

import './index.styl'

interface IProps extends React.Props<any> {
  router: {
    path: string,
    title: string,
    component: any,
    show: boolean,
    exact: boolean}[]
}
interface IRouter {
  path: string,
  title: string,
  component: any,
  show: boolean,
  exact: boolean
}

export default class extends Component<IProps, {} > {
  render () {
    return <div className='main-container'>
      <Sider router={this.props.router} />
      <div className='content-container'>
        {
          this.props.router.map((item: IRouter, i: number) => <Route key={i} exact={item.exact} path={item.path} component={item.component} />)
        }
      </div>
    </div>
  }
}
