import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../../styles/drawer.scss'

class Drawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open,
            animEnd: false
        }
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open
        })
    }

    onBackClick() {
        this.setState({
            open: false
        })
        this.props.onCloseCallback()
    }

    render() {
        let contentStyle = 'drawer-content gone'
        let drawerStyle = 'drawer gone'
        if (this.state.open === 0) {
            contentStyle = 'drawer-content slideOutLeft animated'
            drawerStyle = 'drawer fadeOut animated'
        } else if (this.state.open === 1) {
            contentStyle = 'drawer-content slideInLeft animated'
            drawerStyle = 'drawer fadeIn animated'
        }

        return (
            <div className={drawerStyle} onClick={this.onBackClick.bind(this)}>

                <div className={contentStyle}>

                    {this.props.children}

                </div>

            </div>
        )
    }

    componentWillUnmount() {

    }
}

Drawer.defaultProps = {
    open: false
}

Drawer.propTypes = {
    open: PropTypes.number,
    onCloseCallback: PropTypes.func
}

export default Drawer