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
            legend = []
        if (this.props.legend) {
            for (let item of data) {
                legend.push(item[col[0]])
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
        return [{
            name: typeof col[1] == "string" ? col[1] : col[1].name,
            data: series
        }]
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
        this.changeOption(option)
    }
}

export default Pie;
Pie.propTypes.ring = PropTypes.bool
Pie.propTypes.rose = PropTypes.bool
