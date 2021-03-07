var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Screen, screensEnabled } from "react-native-screens";
/**
 * Originally from ResourceSavingScene.tsx react-navigation / bottom-tabs
 */
var FAR_FAR_AWAY = 30000; // this should be big enough to move the whole view out of its container
export default function ResourceSavingScene(_a) {
    var isVisible = _a.isVisible, children = _a.children, style = _a.style, rest = __rest(_a, ["isVisible", "children", "style"]);
    // react-native-screens is buggy on web
    if ((screensEnabled === null || screensEnabled === void 0 ? void 0 : screensEnabled()) && Platform.OS !== 'web') {
        return (React.createElement(Screen, __assign({ activityState: isVisible ? 2 : 0, style: style }, rest), children));
    }
    return (React.createElement(View, { style: [
            styles.container,
            Platform.OS === "web"
                ? { display: isVisible ? "flex" : "none" }
                : null,
            style
        ], 
        // box-none doesn't seem to work properly on Android
        pointerEvents: isVisible ? 'auto' : 'none' },
        React.createElement(View, { collapsable: false, removeClippedSubviews: 
            // On iOS, set removeClippedSubviews to true only when not focused
            // This is an workaround for a bug where the clipped view never re-appears
            Platform.OS === 'ios' ? !isVisible : true, pointerEvents: isVisible ? 'auto' : 'none', style: isVisible ? styles.attached : styles.detached }, children)));
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
    },
    attached: {
        flex: 1,
    },
    detached: {
        flex: 1,
        top: FAR_FAR_AWAY,
    },
});
