import './styles/common.styl'

import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'pages/App/app'
console.log(App)
import { routes } from './routes/index'
console.log(routes)

render(<BrowserRouter><App router={routes} /></BrowserRouter>, document.getElementById('app'))
