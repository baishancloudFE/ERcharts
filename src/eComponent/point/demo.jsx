import React, { Component } from 'react';
import Point from './index'
class PointDemo extends Component {
    state = {
        data: [],
        col: ["date", { name: "page" }, "食物:food", "tool"]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(300)
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
                food: Math.floor(Math.random() * 300),
                tool: Math.floor(Math.random() * 300),
            })
        }
        return data
    }
    addData = () => {
        this.state.data[0].data.push(55)
        this.setState({
            data: this.state.data
        })
    }
    render() {
        return (
            <div>
                <div style={{ width: '100%', height: '500px', display: 'inline-block' }}>
                    <Point
                        col={this.state.col}
                        data={this.state.data}
                    >
                    </Point>
                </div>
            </div>

        );
    }
}

export default PointDemo;