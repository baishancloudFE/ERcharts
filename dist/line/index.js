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

require('echarts/lib/chart/line');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Ebase) {
    _inherits(Line, _Ebase);

    function Line() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _this.config = function () {
            var option = _this.getOption;
            option.series.map(function (item) {
                item.type = "line";
                if (_this.props.stack) {
                    item.stack = "all";
                }
                if (_this.props.area) {
                    item.areaStyle = { normal: {} };
                }
                return item;
            });
            _this.changeOption(option);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Line;
}(_e2.default);

exports.default = Line;

Line.propTypes.stack = _propTypes2.default.bool;
Line.propTypes.area = _propTypes2.default.bool;