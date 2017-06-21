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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Ebase) {
    _inherits(Map, _Ebase);

    function Map() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Map);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args))), _this), _this.config = function () {
            var option = _this.getOption;
            option.series.map(function (item) {
                item.type = "map";
                require('echarts/map/js/' + _this.props.mapType);
                item.mapType = _this.props.mapType;
                item.label = {
                    normal: {
                        show: _this.props.label
                    },
                    emphasis: {
                        show: true
                    }
                };
                return item;
            });
            _this.changeOption(option);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Map, [{
        key: 'series',
        get: function get() {
            var series = [];
            var data = this.props.data,
                col = this.props.col;
            for (var i = 1, n = col.length; i < n; ++i) {
                var datas = [],
                    obj = {},
                    key = typeof col[i] === "string" ? col[i] : col[i].name;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        datas.push({
                            name: item[col[0]],
                            value: item[key]
                        });
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
        key: 'tooltip',
        get: function get() {
            return {};
        }
    }, {
        key: 'dataZoom',
        get: function get() {
            return null;
        }
    }]);

    return Map;
}(_e2.default);

exports.default = Map;