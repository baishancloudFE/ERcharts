import React, { Component } from 'react';
import Bar from './index'

class BarDemo extends Component {
    state = {
        data: [],
        col: ["date", "page", "food"]
    }

    componentDidMount() {
        this.setState({
            data: this.getData(10)
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
                tool: -Math.floor(Math.random() * 300)
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
        const events = [
            {
                event: 'click',
                fun: (res) => console.log(res)
            },
            {
                event: 'legendselected',
                fun: (res) => console.log(res)
            }
        ]
        return (
            <div>

                <Bar
                    data={this.state.data}
                    col={this.state.col}
                    width={800}
                    height={1000}
                    reverse
                    tooltip='shadow'
                    compare={{
                        name: '差别',
                        col: ['page', 'food']
                    }}
                    toolbox={['dataView']}
                >
                </Bar>
            </div>

        );
    }
}

export default BarDemo;