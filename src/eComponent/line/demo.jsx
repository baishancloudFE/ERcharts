import React, { Component } from 'react';
import Line from './index'

class LineDemo extends Component {
    state = {
        data: [],
        col: ["date", "一些奇怪的:some", "食物:food", "工具:tool"],
        markPoint: [{
            data: [{
                name: '最大值',
                type: 'max'
            },
            {
                name: '某个坐标',
                coord: [10, 20],
                symbolSize:100,
                label:{
                    normal:{
                        show:true,
                        formatter:'这里鼓掌了'
                    }
                }
            }, {
                name: '固定 x 像素位置',
                yAxis: 10,
                x: '90%'
            },
            {
                name: '某个屏幕坐标',
                x: 100,
                y: 100
            }]
        },
        {
            data: [{
                name: '最大值',
                type: 'max'
            },
            {
                name: '某个坐标',
                coord: [10, 20]
            }, {
                name: '固定 x 像素位置',
                yAxis: 10,
                x: '90%'
            },
            {
                name: '某个屏幕坐标',
                x: 100,
                y: 100
            }]
        },
        {
            data: [{
                name: '最大值',
                type: 'max'
            },
            {
                name: '某个坐标',
                coord: [10, 20]
            }, {
                name: '固定 x 像素位置',
                yAxis: 10,
                x: '90%'
            },
            {
                name: '某个屏幕坐标',
                x: 100,
                y: 100
            }]
        }]
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
                        markPoint={this.state.markPoint}
                        dataZoom='both'
                        brush={{
                            name:'dsadsa'
                        }}
                        log={true}
                    >
                    </Line>
                </div>
            </div>

        );
    }
}

export default LineDemo;