import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LatestNewsContainer from '../components/mobile/containers/latest_news_container'
import DetailContainer from '../components/mobile/containers/detail_container'

class IndexMobile extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="mobile">
                <Switch>
                    <Route exact path="/" component={LatestNewsContainer}/>

                    <Route exact path="/news/:id" component={DetailContainer}/>
                </Switch>
            </div>
        )
    }
}

export default IndexMobile