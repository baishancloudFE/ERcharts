import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'
import { compare, genterId } from './tool'
class Ebase extends Component {
    //图表对象
    rule = {
        backgroundColor: false,
        title: false,
        legend: false,
        xAxis: true,
        series: true,
        yAxis: true,
        tooltip: false,
        dataZoom: false,
        grid: false,
        brush: false,
        polar: false,
        radiusAxis: false,
        angleAxis: false,
        radar: false,
        axisPointer: false,
        toolbox: false,
        geo: false,
        visualMap: false,
        parallel: false,
        parallelAxis: false,
        singleAxis: false,
        timeline: false,
        graphic: false,
        calendar: false,
        color: true,
        textStyle: false,
    }
    Echart = null
    id = genterId()
    static defaultProps = {
        legend: true,
        data: [],
        col: [],
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        notMerge: false,
        log: false,
        autoResize: false
    }
    render() {
        let style = {
            width: this.props.width ? this.props.width + "px" : '100%',
            height: this.props.height ? this.props.height + "px" : "100%"
        }
        return (
            <div
                id={this.id}
                style={style}
            >
            </div>
        );
    }

    componentDidMount() {
        this.Echart = echarts.init(document.getElementById(this.id))
        if (this.props.getEchart) {
            this.props.getEchart(this.Echart)
        }
        this.config()
        this.events(this.props.events)

    }

    shouldComponentUpdate(nextProps, nextState) {
        this.props = nextProps
        if (this.props.loading) {
            this.Echart.showLoading()
        } else {
            this.Echart.hideLoading()
        }
        this.config()
        return false
    }

    componentWillUnmount() {
        this.Echart.dispose()
    }

    events = (events) => {
        if (events && events.length) {
            for (let item of events) {
                this.Echart.on(item.event, item.fun)
            }
        }
    }

    off = (events) => {
        if (events && events.length) {
            for (let item of events) {
                this.Echart.off(item.event, item.fun)
            }
        }
    }

    //变更配置
    changeOption = (option) => {
        if (this.props.log) {
            console.log(option)
        }
        this.Echart.setOption(option, {
            notMerge: this.props.notMerge
        })
        if (this.props.setting) {
            this.Echart.setOption(this.props.setting, {
                notMerge: this.props.notMerge
            })
        }
    }
    get color() {
        return this.props.color
    }
    get series() {
        const { data, col, markPoint } = this.props
        const series = []
        for (let i = 1, n = col.length; i < n; ++i) {
            let datas = [],
                obj = {},
                key = typeof col[i] === "string" ? col[i] : col[i].name,
                name = ''
            if (key.split(':').length > 1) {
                name = key.split(':')[0]
                key = key.split(':')[1]

            } else {
                name = key
            }
            for (let item of data) {
                datas.push(item[key])
            }
            if (typeof col[i] === "string") {
                series.push({
                    name: name,
                    data: datas,
                    markPoint: markPoint ? markPoint[i - 1] : null
                })
            } else {
                obj = col[i]
                obj.name = name
                obj.data = datas
                obj.markPoint = markPoint ? markPoint[i - 1] : null
                series.push(obj)
            }
        }
        return series
    }
    get legend() {
        let limit = this.props.legendLimit ? this.props.legendLimit + 1 : this.props.col.length
        const data = []
        for (let item of this.props.col.slice(1, limit)) {
            if (typeof item === "string") {
                data.push(item.split(':')[0])
            } else {
                let obj = Object.assign({}, item)
                obj.name = obj.name.split(':')[0]
                data.push(item)
            }
        }
        return {
            data: data,
            selectedMode: this.props.legendSelectedMode ? this.props.legendSelectedMode : true
        }
    }
    get brush() {
        return {
            toolbox: this.props.brush,
            xAxisIndex: 0
        }
    }
    get xAxis() {
        if (this.props.reverse) {
            const yAxis = [{ type: 'value', }]
            if (this.props.percent) {
                yAxis.push({ type: 'value', position: 'right', name: '百分比', min: 0, max: 100, axisLabel: { formatter: '{value}%' } })
            }
            return yAxis
        }
        const x = [],
            name = this.props.col[0]
        for (let item of this.props.data) {
            x.push(item[name])
        }
        return {
            data: x,
        }

    }
    get yAxis() {
        if (this.props.reverse) {
            const x = [],
                name = this.props.col[0]
            for (let item of this.props.data) {
                x.push(item[name])
            }
            return {
                data: x
            }
        }
        const yAxis = [{ type: 'value', }]
        if (this.props.percent) {
            yAxis.push({ type: 'value', position: 'right', name: '百分比', min: 0, max: 100, axisLabel: { formatter: '{value}%' } })
        }
        return yAxis
    }
    get dataZoom() {
        switch (this.props.dataZoom) {
            case "inside":
                return [
                    {
                        type: 'inside',
                        xAxisIndex: [0],
                    },
                    {
                        type: 'inside',
                        yAxisIndex: [0],
                    }
                ]
            case "slider":
                return [
                    {
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                    },
                    {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                    },
                ]
            case "both":
                return [
                    {
                        type: 'inside',
                        xAxisIndex: [0],
                    },
                    {
                        type: 'inside',
                        yAxisIndex: [0],

                    },
                    {
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                        start: 1,
                        end: 35
                    },
                    {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                        start: 29,
                        end: 36
                    },
                ]
            default:
                return this.props.dataZoom
        }

    }
    get tooltip() {
        return {
            trigger: "axis",
            axisPointer: {
                type: this.props.tooltip
            }
        }
    }
    get title() {
        return {
            text: this.props.title
        }
    }
    get toolbox() {
        let toolbox = {}
        for (let item of this.props.toolbox) {
            if (typeof item === 'string') {
                toolbox[item] = {}
            } else {
                toolbox[item.name] = item.config
            }
        }
        return {
            show: true,
            feature: toolbox
        }
    }
    get backgroundColor() {
        return this.props.backgroundColor
    }
    //配置项
    get getOption() {
        let option = {}
        for (let item in this.rule) {
            //非关键配置
            if (this.props[item]) {
                if (typeof this.props[item] === "object" && !this.props[item].length) {
                    //对象配置
                    option[item] = this.props[item]
                } else {
                    //定制的配置
                    option[item] = this[item]
                }
            } else {
                //无配置
                if (this.rule[item]) {
                    option[item] = this[item]

                } else {
                    option[item] = null
                }
            }
        }
        return option
    }

}

export default Ebase;
