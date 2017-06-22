import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
import 'echarts/map/js/china'
class Map extends Ebase {

    get series() {
        let series = []
        let data = this.props.data,
            col = this.props.col
        for (let i = 1, n = col.length; i < n; ++i) {
            let datas = [],
                obj = {},
                key = typeof col[i] === "string" ? col[i] : col[i].name
            for (let item of data) {
                datas.push({
                    name: item[col[0]],
                    value: item[key]
                })
            }
            if (typeof col[i] === "string") {
                series.push({
                    name: col[i],
                    data: datas
                })
            } else {
                obj = col[i]
                obj.data = datas
                series.push(obj)
            }
        }
        return series
    }
    get xAxis() {
        return null
    }
    get yAxis() {
        return null
    }
    get tooltip() {
        return {
        }
    }
    get dataZoom() {
        return null
    }
    config = () => {
        let option = this.getOption
        option.series.map(item => {
            item.type = "map"
            item.mapType = 'china'
            item.label = {
                normal: {
                    show: this.props.label
                },
                emphasis: {
                    show: true
                }
            }
            return item;
        })
        this.changeOption(option)
    }
}

export default Map;