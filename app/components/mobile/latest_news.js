import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import SwipeView from 'react-swipeable-views'
import ToolBar from '../toolbar'
import List from '../list'
import Drawer from './drawer'
import '../../styles/latest_news.scss'
import '../../styles/item.scss'

class LatestNews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openDrawer: 2,
            dates: [],
            stories: []
        }
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        const {latest_news} = nextProps
        this.setState(preState => {
            const {dates, stories} = preState
            const _dates = dates.slice()
            _dates.push(latest_news.data.date)
            const _stories = stories.slice()
            _stories.push(...latest_news.data.stories)
            return {
                dates: _dates,
                stories: _stories
            }
        })
    }

    toggleDrawer() {
        this.setState({
            openDrawer: 1
        })
    }

    onCloseCallback() {
        this.setState({
            openDrawer: 0
        })
    }

    renderBanners() {
        const {latest_news} = this.props
        const top_stories = latest_news.data.top_stories
        if (!top_stories || top_stories.length === 0) {
            return
        }
        let items = [];
        for (let item of top_stories) {
            const bgc = 'https://images.weserv.nl/?url=' + item.image.slice('https://'.length)
            items.push(
                <Link to={`/news/${item.id}`} key={item.id}>
                    <div className="banner_item" key={item.id}
                         style={{backgroundImage: `url(${bgc})`, backgroundSize: '100% 100%'}}>
                        <h2>{item.title}</h2>
                    </div>
                </Link>
            )
        }
        return items
    }

    renderItems() {
        const stories = this.state.stories
        if (!stories || stories.length === 0) {
            return
        }
        let items = []
        for (let item of stories) {
            const image = 'https://images.weserv.nl/?url=' + item.images[0].slice('https://'.length)
            items.push(
                <Link to={`/news/${item.id}`} key={item.id}>
                    <div className="item" key={item.id}>

                        <p className="title">{item.title}</p>

                        <img src={image} href={image} alt=""/>
                    </div>
                </Link>
            )
        }
        return items
    }

    render() {
        const banners = this.renderBanners(),
            items = this.renderItems()

        return (
            <div id="latest_news">

                <ToolBar onMenuClick={this.toggleDrawer.bind(this)}/>

                <div className="content" ref={node => this.contentNode = node}>

                    <SwipeView>
                        {banners}
                    </SwipeView>

                    <List items={items}/>
                </div>

                <Drawer open={this.state.openDrawer} onCloseCallback={this.onCloseCallback.bind(this)}>

                    <p>Drawer</p>
                </Drawer>
            </div>
        )
    }

    componentDidMount() {
        this.props.actions.getLatestNews('http://112.74.202.2:9999/api/4/news/latest')
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this))
        }
    }

    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const scrollTop = event.target.scrollTop;
        const isBottom = (clientHeight + scrollTop === scrollHeight);
        if (isBottom) {
            const date = this.state.dates[this.state.dates.length - 1]
            this.props.actions.getLatestNews('http://112.74.202.2:9999/api/4/news/before/' + date)
        }
    }

    componentWillUnmount() {
        if (this.contentNode) {
            this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }
}

LatestNews.defaultProps = {
    latest_news: {}
}

LatestNews.propTypes = {
    latest_news: PropTypes.object
}

export default LatestNews