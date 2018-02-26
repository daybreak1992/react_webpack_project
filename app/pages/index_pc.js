import React, {Component} from 'react'
import Header from '../components/pc/header'
import Footer from "../components/pc/footer";
import Section from '../components/pc/section'
import LatestNewsContainer from '../components/pc/containers/lastest_news_container'
import DetailContainer from '../components/pc/containers/detail_container'
import {Route} from 'react-router-dom'

import '../styles/index_pc.scss'

class IndexPc extends Component {

    render() {
        return (
            <div className="pc">

                <Header/>

                <div className="container">

                    <div className="section-container">

                        <Section/>
                    </div>

                    <div className="content-container">

                        <Route exact path="/" component={LatestNewsContainer}/>

                        <Route exact path="/news/:id" component={DetailContainer}/>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }
}

export default IndexPc