var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Animated } from "react-native";
import Styled, { css } from "styled-components/native";
import { DotSize, TabButtonLayout, TabElementDisplayOptions } from "./types";
import { isIphoneX } from "./utils/iPhoneX";
// Config
var BOTTOM_PADDING = 20;
var BOTTOM_PADDING_IPHONE_X = 30;
var floatingMarginBottom = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), isIphoneX() ? BOTTOM_PADDING_IPHONE_X : BOTTOM_PADDING);
var floatingMarginHorizontal = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-horizontal: 20px;\n"], ["\n  margin-horizontal: 20px;\n"])));
var floatingRoundCorner = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 40px;\n"], ["\n  border-radius: 40px;\n"])));
var BottomTabBarWrapper = Styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tflex-direction: row;\n\t", ";\n    elevation: 2;\n\t", ";\n\t", ";\n  padding-bottom: ", ";\n  padding-top: ", ";\n  padding-horizontal: ", ";\n  background-color: ", ";\n\t", ";\n\n  "], ["\n\tflex-direction: row;\n\t", ";\n    elevation: 2;\n\t", ";\n\t", ";\n  padding-bottom: ",
    ";\n  padding-top: ", ";\n  padding-horizontal: ", ";\n  background-color: ", ";\n\t", ";\n\n  "])), function (p) { return p.floating && floatingMarginHorizontal; }, function (p) { return p.floating && floatingMarginBottom; }, function (p) { return p.floating && floatingRoundCorner; }, function (p) {
    return p.floating
        ? p.bottomPadding
        : isIphoneX()
            ? BOTTOM_PADDING_IPHONE_X + p.bottomPadding
            : p.bottomPadding;
}, function (p) { return p.topPadding; }, function (p) { return p.horizontalPadding; }, function (p) { return p.tabBarBackground; }, function (p) { return p.shadow && SHADOW; });
var calculateDotSize = function (size) {
    switch (size) {
        case DotSize.SMALL:
            return 40;
        case DotSize.MEDIUM:
            return 10;
        case DotSize.LARGE:
            return 5;
        default:
            return 10;
    }
};
var TabButton = Styled.TouchableOpacity(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tflex: 1;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 100;\n\tpadding-vertical: 10;\n\tflex-grow: ", ";\n"], ["\n\tflex: 1;\n\tflex-direction: ",
    ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 100;\n\tpadding-vertical: 10;\n\tflex-grow: ",
    ";\n"])), function (p) {
    return p.tabButtonLayout == TabButtonLayout.VERTICAL
        ? "column"
        : p.tabButtonLayout == TabButtonLayout.HORIZONTAL
            ? "row"
            : "row";
}, function (p) {
    return p.focused ? p.labelLength / calculateDotSize(p.dotSize) + 1 : 1;
});
var Label = Styled(Animated.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfontSize: ", ";\n\tcolor: ", ";\n\tmargin-left: ", ";\n"], ["\n\tfontSize: ",
    ";\n\tcolor: ", ";\n\tmargin-left: ",
    ";\n"])), function (p) {
    return p.whenInactiveShow == TabElementDisplayOptions.BOTH || p.whenActiveShow == TabElementDisplayOptions.BOTH ? "14" : "17";
}, function (p) { return p.activeColor; }, function (p) {
    return (p.whenActiveShow == TabElementDisplayOptions.BOTH || p.whenInactiveShow == TabElementDisplayOptions.BOTH) &&
        p.tabButtonLayout == TabButtonLayout.HORIZONTAL
        ? 8
        : 0;
});
var Dot = Styled(Animated.View)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: ", ";\n\twidth: ", ";\n\theight: ", ";\n\tborder-radius: ", ";\n\tbackground-color: ", ";\n\tz-index: -1;\n"], ["\n\tposition: absolute;\n\ttop: ", ";\n\twidth: ", ";\n\theight: ", ";\n\tborder-radius: ", ";\n\tbackground-color: ", ";\n\tz-index: -1;\n"])), function (p) { return p.topPadding; }, function (p) { return p.width; }, function (p) { return p.height; }, function (p) { return p.dotCornerRadius; }, function (p) { return p.activeTabBackground; });
var SHADOW = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  shadow-color: #000000;\n  shadow-offset: 0px 5px;\n  shadow-opacity: 0.05;\n  elevation: 1;\n  shadow-radius: 20;\n"], ["\n  shadow-color: #000000;\n  shadow-offset: 0px 5px;\n  shadow-opacity: 0.05;\n  elevation: 1;\n  shadow-radius: 20;\n"])));
export { BottomTabBarWrapper, TabButton, Label, Dot, SHADOW };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
