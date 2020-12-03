import React from "react"
import ReactDOM from "react-dom"
import {Switch} from "react-router-dom"
import { Route } from "react-router-dom"
import { createBrowserHistory } from 'history'
import { Router } from "react-router"
import Videos from "./Videos"

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact 
            path="/" 
            component={Videos}
          />
        </Switch>
      </Router>
    )
  }
}

if (!document.getElementById("root").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("root"))
} else {
  ReactDOM.hydrate(<App />, document.getElementById("root"))
}
