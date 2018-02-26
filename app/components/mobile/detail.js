import React, {Component} from 'react'
import ToolBar from '../toolbar'
import createHistory from 'history/createBrowserHistory'
import '../../styles/detail.scss'

const history = createHistory();

class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            config: {
                title: "Detail",
                back: true
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.detail !== nextProps.detail) {
            return true
        }
        return false
    }

    componentWillMount() {

    }

    onMenuClick(e) {
        history.goBack()
    }

    updateToolBar(title) {
        this.setState({
            config: Object.assign({}, this.state.config, {
                title: title
            })
        })
    }

    render() {
        const {detail} = this.props
        const body = detail.data.body || ""
        const css = detail.data.css ? detail.data.css[0] : ""
        const title = detail.data.title || ""
        this.updateToolBar(title)

        return (
            <div id="detail">

                <ToolBar config={this.state.config} onMenuClick={this.onMenuClick}/>

                <div className="body" dangerouslySetInnerHTML={{__html: body}}/>

                <link rel="stylesheet" href={css}/>
            </div>
        )
    }

    componentDidMount() {
        const path = this.props.match.url
        this.props.actions.getDetail(path)
    }

    componentWillUnmount() {

    }
}

Detail.defaultProps = {}

Detail.propTypes = {}

export default Detail