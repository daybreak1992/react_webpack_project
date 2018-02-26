import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../../actions/latest_news_action'
import LatestNews from '../latest_news'

const mapStateToProps = state => {
    return {
        latest_news: state.latestNewsReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews)