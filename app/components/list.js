import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../styles/list.scss'

class List extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="list">
                {this.props.items}
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}

List.defaultProps = {
    items: []
}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List