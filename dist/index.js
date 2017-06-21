'use strict';

var _bar = require('./bar/');

var _bar2 = _interopRequireDefault(_bar);

var _line = require('./line/');

var _line2 = _interopRequireDefault(_line);

var _pie = require('./pie/');

var _pie2 = _interopRequireDefault(_pie);

var _point = require('./point/');

var _point2 = _interopRequireDefault(_point);

var _map = require('./map/');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    Bar: _bar2.default, Line: _line2.default, Pie: _pie2.default, Point: _point2.default, Map: _map2.default
};