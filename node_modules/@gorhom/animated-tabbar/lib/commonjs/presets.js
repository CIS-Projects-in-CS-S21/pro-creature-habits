"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bubble = _interopRequireDefault(require("./presets/bubble"));

var _flashy = _interopRequireDefault(require("./presets/flashy"));

var _material = _interopRequireDefault(require("./presets/material"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Presets = {
  bubble: {
    component: _bubble.default,
    $c: undefined,
    $t: undefined
  },
  flashy: {
    component: _flashy.default,
    $c: undefined,
    $t: undefined
  },
  material: {
    component: _material.default,
    $c: undefined,
    $t: undefined
  }
};
var _default = Presets;
exports.default = _default;
//# sourceMappingURL=presets.js.map