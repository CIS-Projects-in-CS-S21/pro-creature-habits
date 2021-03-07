/// <reference types="styled-components-react-native" />
import { Animated } from "react-native";
import { DotSize, TabButtonLayout, TabElementDisplayOptions } from "./types";
interface IBottomTabBarWrapper {
    floating: boolean;
    shadow: boolean;
    tabBarBackground: string;
    topPadding: number;
    horizontalPadding: number;
    bottomPadding: number;
}
declare const BottomTabBarWrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, IBottomTabBarWrapper, never>;
interface ITabButton {
    tabButtonLayout: TabButtonLayout;
    focused: boolean;
    labelLength: number;
    dotSize: DotSize;
}
declare const TabButton: import("styled-components").StyledComponent<typeof import("react-native").TouchableOpacity, import("styled-components").DefaultTheme, ITabButton, never>;
interface ILabelProps {
    whenInactiveShow: TabElementDisplayOptions;
    whenActiveShow: TabElementDisplayOptions;
    tabButtonLayout: TabButtonLayout;
    activeColor: string;
}
declare const Label: import("styled-components").StyledComponent<Animated.AnimatedComponent<typeof import("react-native").Text>, any, ILabelProps, never>;
interface IDotProps {
    topPadding: number;
    width: number;
    height: number;
    dotCornerRadius: number;
    activeTabBackground: string;
}
declare const Dot: import("styled-components").StyledComponent<Animated.AnimatedComponent<typeof import("react-native").View>, any, IDotProps, never>;
declare const SHADOW: import("styled-components").FlattenSimpleInterpolation;
export { BottomTabBarWrapper, TabButton, Label, Dot, SHADOW };
