import * as types from '../configs/action_types'

export const getDetail = path => dispatch => {
    fetch(`http://112.74.202.2:9999/api/4${path}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.DETAIL,
                data: {
                    code: 0,
                    data: json
                }
            })
        })
        .catch(error => {
            dispatch({
                type: types.DETAIL,
                data: {
                    code: 1,
                    msg: error.toString()
                }
            })
        })
}