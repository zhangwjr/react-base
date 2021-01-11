import React, { Fragment } from 'react'
import { Route,Switch } from "react-router-dom"
import Nav from "./components/Nav"
import { routes } from "./route/router"

export default function App7() {
  console.log('routes',routes);
  return (
    <Fragment>
      <Nav />
      <Switch>
        {
          routes.map(item => {
            return <Route 
              key={item.path}
              path={item.path}
              exact={item.exact}
              render={item.render}
            />
          })
        }
      </Switch>
    </Fragment>
  )
}
