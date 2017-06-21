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
        this.changeOption(option)
    }
}

export default Bar;