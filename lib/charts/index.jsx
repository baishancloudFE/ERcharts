import React, { Component } from 'react';
import Ebase from './../e.base'
import PropTypes from 'prop-types';
class Charts extends Ebase {
    config = () => {
        let option = this.getOption
        option.series.map(item => {
            item.type = this.props.type
            return item;
        })
        this.changeOption(option)
    }
}

export default Charts;