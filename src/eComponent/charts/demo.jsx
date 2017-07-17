import React, { Component } from 'react';
import Charts from './index'

class ChartsDemo extends Component {
    state = {
        data: [],
        col: ["date", "page"],
        type: 'bar',
        events: [
            {
                event: 'click',
                fun: () => console.log("object")
            }
        ]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(1000)
        })
    }
    getData = (times) => {
        let data = [],
            stateDate = +new Date(2011, 1, 2),
            day = 1000 * 60 * 60 * 24;
        for (let i = 0, n = times; i < times; ++i) {
            let now = new Date(stateDate += day);
            data.push({
                date: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                page: Math.floor(Math.random() * 300),

            })
        }
        return data
    }
    addData = () => {
        this.setState({
            data: this.getData(Math.floor(Math.random() * 30))
        })
    }
    changeType = () => {
        this.state.events.push({
            event: 'click',
            fun: () => console.log("object")
        })
        this.setState({
            type: ['bar', 'line', 'pie', 'scatter'][Math.floor(Math.random() * 5)],
            events: this.state.events
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.changeType}>切换种类</button>
                <button onClick={this.addData}>变化数据</button>
                <div style={{ width: '1000px', height: '800px', display: 'inline-block' }}>
                    <Charts
                        data={this.state.data}
                        col={this.state.col}
                        type={this.state.type}
                        events={this.state.events}
                        merge={false}
                    >
                    </Charts>
                </div>
            </div>

        );
    }
}

export default ChartsDemo;