'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var compare = function compare(arr1, arr2) {
    if (!arr1 || !arr2) return false;
    var flag = [];
    arr1.forEach(function (item, index) {
        if (arr2[index].event !== item.event) {
            flag.push(arr2[index]);
        }
    });
    return flag;
};

var Ebase = function (_Component) {
    _inherits(Ebase, _Component);

    function Ebase() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Ebase);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ebase.__proto__ || Object.getPrototypeOf(Ebase)).call.apply(_ref, [this].concat(args))), _this), _this.rule = {
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
            textStyle: false
        }, _this.Echart = null, _this.id = new Date().getTime() + Math.floor(Math.random() * 5000), _this.events = function (events) {
            if (events && events.length) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        _this.Echart.on(item.event, item.fun);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, _this.off = function (events) {
            if (events && events.length) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        _this.Echart.off(item.event, item.fun);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }, _this.changeOption = function (option) {
            _this.Echart.setOption(option, _this.props.merge);
            if (_this.props.setting) {
                _this.Echart.setOption(_this.props.setting, _this.props.merge);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //图表对象


    _createClass(Ebase, [{
        key: 'render',
        value: function render() {
            var style = {
                width: this.props.width ? this.props.width + "px" : '100%',
                height: this.props.height ? this.props.height + "px" : "100%"
            };
            return _react2.default.createElement('div', {
                id: this.id,
                style: style
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.Echart = _echarts2.default.init(document.getElementById(this.id));
            this.config();
            this.events(this.props.events);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            this.props = nextProps;
            if (this.props.loading) {
                this.Echart.showLoading();
            } else {
                this.Echart.hideLoading();
            }
            // if (this.props.type) {
            //     this.config()
            // } else {
            //     this.changeOption(this.getOption)
            // }
            this.config
            // this.off(this.props.off)
            ();return false;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.Echart.dispose();
        }
        //变更配置

    }, {
        key: 'color',
        get: function get() {
            return this.props.color;
        }
    }, {
        key: 'series',
        get: function get() {
            var series = [];
            var data = this.props.data,
                col = this.props.col;
            for (var i = 1, n = col.length; i < n; ++i) {
                var datas = [],
                    obj = {},
                    key = typeof col[i] === "string" ? col[i] : col[i].name;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        datas.push(item[key]);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                if (typeof col[i] === "string") {
                    series.push({
                        name: col[i],
                        data: datas
                    });
                } else {
                    obj = col[i];
                    obj.data = datas;
                    series.push(obj);
                }
            }
            return series;
        }
    }, {
        key: 'legend',
        get: function get() {
            var limit = this.props.legendLimit ? this.props.legendLimit + 1 : this.props.col.length;
            return {
                data: this.props.col.slice(1, limit),
                selectedMode: this.props.legendSelectedMode ? this.props.legendSelectedMode : true
            };
        }
    }, {
        key: 'brush',
        get: function get() {
            return {
                toolbox: this.props.brush,
                xAxisIndex: 0
            };
        }
    }, {
        key: 'xAxis',
        get: function get() {
            if (this.props.reverse) {
                var yAxis = [{ type: 'value' }];
                if (this.props.percent) {
                    yAxis.push({ type: 'value', position: 'right', name: '百分比', min: 0, max: 100, axisLabel: { formatter: '{value}%' } });
                }
                return yAxis;
            }
            var x = [],
                name = this.props.col[0];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.props.data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var item = _step4.value;

                    x.push(item[name]);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return {
                data: x
            };
        }
    }, {
        key: 'yAxis',
        get: function get() {
            if (this.props.reverse) {
                var x = [],
                    name = this.props.col[0];
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = this.props.data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var item = _step5.value;

                        x.push(item[name]);
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                return {
                    data: x
                };
            }
            var yAxis = [{ type: 'value' }];
            if (this.props.percent) {
                yAxis.push({ type: 'value', position: 'right', name: '百分比', min: 0, max: 100, axisLabel: { formatter: '{value}%' } });
            }
            return yAxis;
        }
    }, {
        key: 'dataZoom',
        get: function get() {

            switch (this.props.dataZoom) {
                case "inside":
                    return [{
                        type: 'inside',
                        xAxisIndex: [0]
                    }, {
                        type: 'inside',
                        yAxisIndex: [0]
                    }];
                case "slider":
                    return [{
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0]
                    }, {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0]
                    }];
                case "both":
                    return [{
                        type: 'inside',
                        xAxisIndex: [0]
                    }, {
                        type: 'inside',
                        yAxisIndex: [0]

                    }, {
                        type: 'slider',
                        show: true,
                        xAxisIndex: [0],
                        start: 1,
                        end: 35
                    }, {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                        start: 29,
                        end: 36
                    }];
                default:
                    return null;
            }
        }
    }, {
        key: 'tooltip',
        get: function get() {
            return {
                trigger: "axis",
                axisPointer: {
                    type: this.props.tooltip
                }
            };
        }
    }, {
        key: 'title',
        get: function get() {
            return {
                text: this.props.title
            };
        }
    }, {
        key: 'toolbox',
        get: function get() {
            var toolbox = {};
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.props.toolbox[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var item = _step6.value;

                    if (typeof item === 'string') {
                        toolbox[item] = {};
                    } else {
                        toolbox[item.name] = item.config;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return {
                show: true,
                feature: toolbox
            };
        }
    }, {
        key: 'backgroundColor',
        get: function get() {
            return this.props.backgroundColor;
        }
        //配置项

    }, {
        key: 'getOption',
        get: function get() {
            var option = {};
            for (var item in this.rule) {
                //非关键配置
                if (this.props[item]) {
                    if (_typeof(this.props[item]) === "object" && !this.props[item].length) {
                        //对象配置
                        option[item] = this.props[item];
                    } else {
                        //定制的配置
                        option[item] = this[item];
                    }
                } else {
                    //无配置
                    if (this.rule[item]) {
                        option[item] = this[item];
                    } else {
                        option[item] = null;
                    }
                }
            }
            return option;
        }
    }]);

    return Ebase;
}(_react.Component);

Ebase.defaultProps = {
    legend: true,
    data: [],
    col: [],
    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    merge: true
};
exports.default = Ebase;


Ebase.propTypes = {
    title: _propTypes2.default.any,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    col: _propTypes2.default.array.isRequired,
    data: _propTypes2.default.array.isRequired,
    legend: _propTypes2.default.bool,
    setting: _propTypes2.default.object,
    toolTip: _propTypes2.default.string,
    dataZoom: _propTypes2.default.string,
    legendLimit: _propTypes2.default.number,
    loading: _propTypes2.default.bool,
    reverse: _propTypes2.default.bool,
    brush: _propTypes2.default.array
};