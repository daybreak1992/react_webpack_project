import * as types from '../configs/action_types'
import {initState} from '../configs/init_state'

const latest_news_reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LATEST_NEWS:
            return Object.assign({}, state, {
                code: action.data.code,
                data: action.data.data || {},
                msg: action.data.msg || ""
            })
        default:
            return state
    }
}

export default latest_news_reducer