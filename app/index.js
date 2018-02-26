import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import router from './router'
import store from './store'
import 'whatwg-fetch'
import './styles/index.scss'
import 'lib-flexible'

const root = (
    <Provider store={store}>
        {router}
    </Provider>
)

ReactDOM.render(root, document.getElementById('root'))