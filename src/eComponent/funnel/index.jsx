import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
import 'echarts/lib/chart/pie'
class Funnel extends Ebase {

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
            formatter: "{a} <br/>{b} : {c}%"
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
            item.type = "funnel"
            if (this.props.labelPosition) {
                item.label = {
                    normal: {
                        show: true,
                        position: this.props.labelPosition
                    }
                }
            }
            return item;
        })
        this.changeOption(option)
    }
}


export default Funnel;

