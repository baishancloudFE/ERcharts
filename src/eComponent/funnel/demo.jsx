import React, { Component } from 'react';
import Funnel from './index'

class FunnelDemo extends Component {
    state = {
        data: [],
        col: ["date", 'some'],

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
                some: Math.floor(Math.random() * 100),

            })
        }
        return data
    }
    addData = () => {
        this.setState({
            data: this.getData(20)
        })
    }
    render() {
        return (
            <div>

                <div style={{ width: '500px', height: '500px', display: 'inline-block' }}>
                    <Funnel
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        labelPosition='inside'
                        toolbox={['dataView']}
                    >
                    </Funnel>
                    <Funnel
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        labelPosition='inside'
                        toolbox={['dataView']}
                    >
                    </Funnel>
                    <Funnel
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        labelPosition='inside'
                        toolbox={['dataView']}
                    >
                    </Funnel>
                    <Funnel
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        labelPosition='inside'
                        toolbox={['dataView']}
                    >
                    </Funnel>
                    <Funnel
                        data={this.state.data}
                        col={this.state.col}
                        tooltip
                        labelPosition='inside'
                        toolbox={['dataView']}
                    >
                    </Funnel>
                </div>
            </div>

        );
    }
}

export default FunnelDemo;