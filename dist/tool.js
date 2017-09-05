"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
var genterId = function genterId() {
    return new Date().getTime() + Math.floor(Math.random() * 5000);
};
exports.compare = compare;
exports.genterId = genterId;