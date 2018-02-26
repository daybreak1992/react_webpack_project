import * as types from '../configs/action_types'

export const getLatestNews = (url) => dispatch => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.LATEST_NEWS,
                data: {
                    code: 0,
                    data: json
                }
            })
        })
        .catch(error => {
            dispatch({
                type: types.LATEST_NEWS,
                data: {
                    code: 1,
                    msg: error.toString()
                }
            })
        })
}