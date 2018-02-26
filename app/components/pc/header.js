import React, {Component} from 'react'
import '../../styles/header.scss'
import icon_zhihu from '../../images/icon_zhihu.png'
import Tabs, {Tab} from 'material-ui/Tabs'
import {Button} from 'material-ui'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleChange(event, value) {
        this.setState({value});
    }

    render() {
        const {value} = this.state

        return (
            <header className="header">

                <a href="/" className="logo">

                    <img src={icon_zhihu} alt="logo"/>

                    <span>知乎</span>
                </a>


                <div className="tabs">
                    <Tabs value={value} onChange={this.handleChange.bind(this)}>
                        <Tab label="最新消息" />
                        <Tab label="主题日报" />
                    </Tabs>
                </div>

                <Button className="login" color="primary">
                    Login
                </Button>
            </header>
        )
    }
}

Header.defaultProps = {}

Header.propTypes = {}

export default Header