import React, { Component } from 'react';
import Charts from './index'

class ChartsDemo extends Component {
    state = {
        data: [],
        col: ["date", "page", 'a', 'b', 'c', 'd'],
        type: 'line',
        events: [
            {
                event: 'click',
                fun: () => console.log("object")
            }
        ],
        _data: [],
        _col: ['date', 'test', 'c', 'd', 'e', 'f']
    }
    componentDidMount() {
        this.setState({
            data: this.getData(20)
        })
        this.setState({
            _data: this._getData(20)
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
                a: Math.floor(Math.random() * 300),
                b: Math.floor(Math.random() * 300),
                d: Math.floor(Math.random() * 300),
                c: Math.floor(Math.random() * 300),

            })
        }
        return data
    }
    _getData = (times) => {
        let data = [],
            stateDate = +new Date(2015, 1, 2),
            day = 1000 * 60 * 60 * 24;
        for (let i = 0, n = times; i < times; ++i) {
            let now = new Date(stateDate += day);
            data.push({
                date: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                test: Math.floor(Math.random() * 300),
                d: Math.floor(Math.random() * 300),
                e: Math.floor(Math.random() * 300),
                f: Math.floor(Math.random() * 300),
                c: Math.floor(Math.random() * 300),

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
        this.setState({
            data: this.state._data,
            col: this.state._col
        })
        // this.state.events.push({
        //     event: 'click',
        //     fun: () => console.log("object")
        // })
        // this.setState({
        //     type: ['bar', 'line', 'pie', 'scatter'][Math.floor(Math.random() * 5)],
        //     events: this.state.events
        // })
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
                        log={true}
                    >
                    </Charts>
                </div>
            </div>

        );
    }
}

export default ChartsDemo;