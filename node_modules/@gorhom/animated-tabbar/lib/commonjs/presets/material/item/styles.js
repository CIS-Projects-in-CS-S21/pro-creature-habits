"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

const styles = _reactNative.StyleSheet.create({
  outerContainer: {
    alignItems: 'center'
  },
  innerContainer: {},
  iconContainer: {
    alignSelf: 'center'
  },
  labelContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    top: 0,
    bottom: 0
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  }
});

exports.styles = styles;
//# sourceMappingURL=styles.js.map