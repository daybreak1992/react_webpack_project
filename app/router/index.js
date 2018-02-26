import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import IndexPc from '../pages/index_pc'
import IndexMobile from '../pages/index_mobile'

const router = (
    <BrowserRouter>
        <div>
            <MediaQuery query='(min-device-width:1224px)'>
                <IndexPc/>
            </MediaQuery>

            <MediaQuery query='(max-device-width:1224px)'>
                <IndexMobile/>
            </MediaQuery>
        </div>
    </BrowserRouter>
)


export default router