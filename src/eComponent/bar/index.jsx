import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
import 'echarts/lib/chart/bar'

class Bar extends Ebase {
    config = () => {
        let option = this.getOption
        option.series.map(item => {
            item.type = "bar"
            if (this.props.stack) {
                item.stack = "all"
            }
            return item;
        })
        this.isCompare(option.series, option.legend)
        this.changeOption(option)
    }
    isCompare = (series, legend) => {
        if (this.props.compare) {
            const compare = {
                name: this.props.compare.name,
                type: 'bar',
                data: []
            },
                names = this.props.compare.col
            legend.data.push(this.props.compare.name)
            this.props.data.forEach(item => {
                compare.data.push(-Math.abs(item[names[0]] - item[names[1]]))
            })
            series.push(compare)
        }
    }
}

export default Bar;