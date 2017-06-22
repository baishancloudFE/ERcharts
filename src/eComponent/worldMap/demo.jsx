import React, { Component } from 'react';
import WorldMap from './index'

class WorldMapDemo extends Component {
    state = {
        data: [],
        col: ["city", { name: "page" }, "food", "tool"]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(10)
        })
    }
    getData = (times) => {
        let data = [],
            map = ['福建', '广东', '上海', '内蒙古', '北京']

        for (let i = 0, n = times; i < times; ++i) {
            data.push({
                city: map[Math.floor(Math.random() * 5)],
                page: Math.floor(Math.random() * 300),
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
                <div style={{ width: '1000px', height: '800px', display: 'inline-block' }}>
                    <WorldMap
                        tooltip
                        title='ssssssssss'
                        data={this.state.data}
                        col={this.state.col}
                        legend={false}
                        label={true}
                        mapType='china'
                        visualMap={{
                            min: 0,
                            max: 1000,
                            type: 'continuous',
                            realtime: false,
                            calculable: true,
                            color: ['#d94e5d', '#eac736', '#50a3ba'],
                            textStyle: {
                                color: '#000'
                            }
                        }}
                    >
                    </WorldMap>
                </div>
            </div>

        );
    }
}

export default WorldMapDemo;