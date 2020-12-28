import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from './home.page'
import NoMatchPage from './noMatch.page'

const routes = (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default routes
