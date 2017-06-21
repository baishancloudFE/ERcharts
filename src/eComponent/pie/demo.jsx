import React, { Component } from 'react';
import Pie from './index'

class PieDemo extends Component {
    state = {
        data: [],
        col: ["date", { name: "page" }, "food", "tool"],
        loading: false
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

            })
        }
        return data
    }
    addData = () => {
        this.setState({
            data: this.getData(20)
        })
    }
    loading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }
    render() {
        return (
            <div>

                <div style={{ width: '500px', height: '500px', display: 'inline-block' }}>

                    <Pie
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        ring
                        rose
                        loading={this.state.loading}
                    >
                    </Pie>
                </div>
            </div>

        );
    }
}

export default PieDemo;