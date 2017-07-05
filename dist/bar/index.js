'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _e = require('./../e.base');

var _e2 = _interopRequireDefault(_e);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('echarts/lib/chart/bar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = function (_Ebase) {
    _inherits(Bar, _Ebase);

    function Bar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.config = function () {
            var option = _this.getOption;
            option.series.map(function (item) {
                item.type = "bar";
                if (_this.props.stack) {
                    item.stack = "all";
                }
                return item;
            });
            _this.isCompare(option.series);
            _this.changeOption(option);
        }, _this.isCompare = function (series) {
            if (_this.props.compare) {
                var compare = {
                    name: _this.props.compare.name,
                    type: 'bar',
                    data: []
                },
                    names = _this.props.compare.col;
                _this.props.data.forEach(function (item) {
                    compare.data.push(-Math.abs(item[names[0]] - item[names[1]]));
                });
                series.push(compare);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Bar;
}(_e2.default);

exports.default = Bar;