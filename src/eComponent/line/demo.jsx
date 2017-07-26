import React, { Component } from 'react';
import Line from './index'

class LineDemo extends Component {
    state = {
        data: [],
        col: ["date", { name: "一些奇怪的:some" }, "食物:food", "工具:tool"]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(100)
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
                some: Math.floor(Math.random() * 300),
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
                        dataZoom='both'
                        log={true}
                    >
                    </Line>
                </div>
            </div>

        );
    }
}

export default LineDemo;