import React, {Component} from 'react'
import '../../styles/footer.scss'

class Footer extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <footer className="footer">
                <hr />

                <p>© 2017-12 ReactNews All Rights Reserved.</p>
            </footer>
        )
    }
}

Footer.defaultProps = {}

Footer.propTypes = {}

export default Footer