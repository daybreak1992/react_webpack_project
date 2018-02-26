import {combineReducers} from 'redux'
import latestNewsReducer from './latest_news_reducer'
import detailReducer from './detail_reducer'

const reducers = combineReducers({
    latestNewsReducer,
    detailReducer
})

export default reducers