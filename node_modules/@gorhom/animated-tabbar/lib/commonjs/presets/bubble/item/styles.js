"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

const styles = _reactNative.StyleSheet.create({
  container: {},
  contentContainer: {},
  iconContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    top: 0,
    bottom: 0
  },
  label: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  }
});

exports.styles = styles;
//# sourceMappingURL=styles.js.map