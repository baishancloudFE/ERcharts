import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
import 'echarts/lib/chart/scatter'
class Point extends Ebase {

    get getPolar() {
        require('echarts/lib/component/polar');

        return {
            
        }
    }
    config = () => {
        let option = this.getOption
        option.series.map(item => {
            item.type = "scatter"
            return item;
        })
        this.changeOption(option)
    }
}

export default Point;

