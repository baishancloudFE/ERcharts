'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _e = require('./../e.base');

var _e2 = _interopRequireDefault(_e);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('echarts/lib/chart/pie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_Ebase) {
    _inherits(Pie, _Ebase);

    function Pie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pie.__proto__ || Object.getPrototypeOf(Pie)).call.apply(_ref, [this].concat(args))), _this), _this.config = function () {
            var option = _this.getOption;
            option.series.map(function (item) {
                item.type = "pie";
                if (_this.props.rose) {
                    item.roseType = 'angle';
                }
                if (_this.props.ring) {
                    item.radius = ['50%', '70%'];
                }
                return item;
            });
            if (_this.props.inside) {
                option.series[0].radius = ['40%', '55%'];
                option.series.push({
                    name: '内环',
                    type: 'pie',
                    data: _this.props.inside,
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
                    }
                });
            }
            _this.changeOption(option);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Pie, [{
        key: 'xAxis',
        get: function get() {
            return null;
        }
    }, {
        key: 'yAxis',
        get: function get() {
            return null;
        }
    }, {
        key: 'dataZoom',
        get: function get() {
            return null;
        }
    }, {
        key: 'legend',
        get: function get() {
            var data = this.props.data,
                col = this.props.col,
                inside = this.props.inside,
                legend = [];
            if (this.props.legend) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _item = _step.value;

                        legend.push(_item[col[0]]);
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

                if (inside) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = inside[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var item = _step2.value;

                            legend.push(item['name']);
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
                var limit = this.props.legendLimit ? this.props.legendLimit : legend.length;
                return { data: legend.slice(0, limit) };
            } else {
                return { show: false };
            }
        }
    }, {
        key: 'tooltip',
        get: function get() {
            return {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            };
        }
    }, {
        key: 'series',
        get: function get() {
            var series = [];
            var data = this.props.data,
                col = this.props.col;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var dataItem = _step3.value;

                    series.push({
                        value: dataItem[typeof col[1] == "string" ? col[1] : col[1].name],
                        name: dataItem[typeof col[0] == "string" ? col[0] : col[0].name]
                    });
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

            if (typeof col[1] === "string") {
                return [{
                    name: col[1],
                    data: series
                }];
            } else {
                col[1].data = series;
                return [col[1]];
            }
        }
    }]);

    return Pie;
}(_e2.default);

exports.default = Pie;

Pie.propTypes.ring = _propTypes2.default.bool;
Pie.propTypes.rose = _propTypes2.default.bool;