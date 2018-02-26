import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../styles/toolbar.scss'

class ToolBar extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        const {config} = this.props
        return (
            <div id="toorbar">

                <div className="menu">

                    <i className="material-icons"
                       onClick={this.props.onMenuClick}>{config.back ? 'arrow_back' : 'menu'}</i>
                </div>

                <span className="title">{config.title}</span>
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}

ToolBar.defaultProps = {
    config: {
        title: "知乎",
        back: false
    }
}

ToolBar.propTypes = {
    config: PropTypes.object.isRequired,
    onMenuClick: PropTypes.func
}

export default ToolBar