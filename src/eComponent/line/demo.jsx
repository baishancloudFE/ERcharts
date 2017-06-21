import React, { Component } from 'react';
import Line from './index'

class LineDemo extends Component {
    state = {
        data: [],
        col: ["date", { name: "page" }, "food", "tool"]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(30)
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
    render() {
        return (
            <div>
                <div style={{ width: '1000px', height: '800px', display: 'inline-block' }}>
                    <Line
                        stack
                        area
                        data={this.state.data}
                        col={this.state.col}
                    >
                    </Line>
                </div>
            </div>

        );
    }
}

export default LineDemo;