import React, { Component } from 'react';
import Ebase from './../e.base'
import 'echarts/lib/chart/line'
class Line extends Ebase {
    config = () => {
        let option = this.getOption
        
        option.series.map(item => {
            item.type = "line"

            if (this.props.stack) {
                item.stack = "all"
            }
            if (this.props.area) {
                item.areaStyle = { normal: {} }
            }
            return item;
        })
        this.changeOption(option)
    }
}

export default Line;
