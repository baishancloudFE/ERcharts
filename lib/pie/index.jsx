import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
import 'echarts/lib/chart/pie'
class Pie extends Ebase {
    get xAxis() {
        return null
    }
    get yAxis() {
        return null
    }
    get dataZoom() {
        return null
    }
    get legend() {
        let data = this.props.data,
            col = this.props.col,
            inside = this.props.inside,
            legend = []
        if (this.props.legend) {
            for (let item of data) {
                legend.push(item[col[0]])
            }
            if (inside) {
                for (let item of inside) {
                    legend.push(item['name'])
                }
            }
            let limit = this.props.legendLimit ? this.props.legendLimit : legend.length
            return { data: legend.slice(0, limit) }
        } else {
            return { show: false }
        }
    }
    get tooltip() {
        return {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        }
    }
    get series() {
        let series = []
        let data = this.props.data,
            col = this.props.col
        for (let dataItem of data) {
            series.push({
                value: dataItem[typeof col[1] == "string" ? col[1] : col[1].name],
                name: dataItem[typeof col[0] == "string" ? col[0] : col[0].name]
            })
        }
        if (typeof col[1] === "string") {
            return [{
                name: col[1],
                data: series
            }]
        } else {
            col[1].data = series
            return [col[1]]
        }
    }
    config = () => {
        let option = this.getOption
        option.series.map(item => {
            item.type = "pie"
            if (this.props.rose) {
                item.roseType = 'angle'

            }
            if (this.props.ring) {
                item.radius = ['50%', '70%']
            }
            return item;
        })
        if (this.props.inside) {
            option.series[0].radius = ['40%', '55%']
            option.series.push({
                name: '内环',
                type: 'pie',
                data: this.props.inside,
                radius: ['0', '30%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            })
        }
        this.changeOption(option)
    }
}

export default Pie;
Pie.propTypes.ring = PropTypes.bool
Pie.propTypes.rose = PropTypes.bool
