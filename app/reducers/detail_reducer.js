import * as types from '../configs/action_types'
import {initState} from '../configs/init_state'

const detail_reducer = (state = initState, action) => {
    switch (action.type) {
        case types.DETAIL:
            return Object.assign({}, state, {
                code: action.data.code,
                data: action.data.data || {},
                msg: action.data.ms || ""
            })
            break
        default:
            return state
    }
}

export default detail_reducer