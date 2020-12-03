import React from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import app from './components/App'

// Create a fresh store 
const store = configureStore()

if (!document.getElementById("root").childNodes.length) {
    ReactDOM.render( <Provider store={store} >
        <app />
    </Provider>, document.getElementById("root"))
} else {
    ReactDOM.hydrate( <Provider store={store} >
        <app />
    </Provider>, document.getElementById("root"))
}
