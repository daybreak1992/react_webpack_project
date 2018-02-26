import React, {Component} from 'react'
import '../../styles/section.scss'

class Section extends Component {

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
            <div className="section">

                <button className="scale-big">big</button>

                <button className="scale-small">small</button>

                <button className="skew-l">skew-l</button>

                <button className="skew-r">skew-l</button>

                <button className="rotate-90">rotate-90</button>

                <button className="grow-rotate-l">grow-rotate-l</button>

                <button className="translate-l">translate-l</button>

                <button className="translate-b">translate-b</button>

                <button className="border">border</button>

                <button className="ech-fade">fade</button>
                <button className="ech-fade-t">fade-t</button>
                <button className="ech-fade-b">fade-b</button>
                <button className="ech-fade-l">fade-l</button>
                <button className="ech-fade-r">fade-r</button>
                <button className="ech-bounce-t">bounce-t</button>
                <button className="ech-bounce-b">bounce-b</button>
                <button className="ech-bounce-l">bounce-l</button>
                <button className="ech-bounce-r">bounce-r</button>
                <button className="ech-fade-c-out">fade-c-out</button>
                <button className="ech-fade-c-in">fade-c-in</button>
                <button className="ech-fade-m-out">fade-m-out</button>
                <button className="ech-fade-m-in">fade-m-in</button>

                <button className="flash">flash</button>

                <button className="shake-time">shake-time</button>

                <button className="wobble-c">wobble-c</button>
                <button className="wobble-t">wobble-t</button>
                <button className="wobble-b">wobble-b</button>

                <button className="swing">swing</button>

                <button className="shake">shake</button>

                <button className="bounce">bounce</button>
            </div>
        )
    }
}

Section.defaultProps = {}

Section.propTypes = {}

export default Section