import React, {Component} from 'react'

class Detail extends Component {

    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.detail !== nextProps.detail) {
            return true
        }
        return false
    }

    componentWillMount() {

    }

    componentDidMount() {
        const path = this.props.match.url
        this.props.actions.getDetail(path)
    }

    componentWillUnmount() {

    }

    render() {
        const {detail} = this.props
        const body = detail.data.body || ""
        const css = detail.data.css ? detail.data.css[0] : ""

        return (
            <div className="detail">

                <div className="body" dangerouslySetInnerHTML={{__html: body}}/>

                <link rel="stylesheet" href={css}/>
            </div>
        )
    }
}

Detail.defaultProps = {}

Detail.propTypes = {}

export default Detail