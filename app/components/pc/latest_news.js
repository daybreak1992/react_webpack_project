import React, {Component} from 'react'
import {Button} from 'material-ui'
import {Link} from 'react-router-dom'
import List from '../list'

import '../../styles/latest_news_pc.scss'
import '../../styles/item.scss'

class LatestNews extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            topStories: [],
            stories: [],
            dates: []
        })
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

    componentDidMount() {
        this.props.actions.getLatestNews('http://112.74.202.2:9999/api/4/news/latest')
    }

    componentWillUnmount() {

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
        const items = this.renderItems()

        return (
            <div className="lastest-news-pc">

                <div className="buttons">

                    <Button raised>
                        前一天
                    </Button>

                    <p>2017/12/12</p>

                    <Button raised>
                        后一天
                    </Button>
                </div>

                <div className="list">
                    <List items={items}/>
                </div>
            </div>
        )
    }
}

LatestNews.defaultProps = {}

LatestNews.propTypes = {}

export default LatestNews