import React from 'react';
import type { StyleProp, ViewStyle, LayoutRectangle } from 'react-native';
import Animated from 'react-native-reanimated';
interface RawButtonProps {
    index: number;
    selectedIndex: Animated.Value<number>;
    accessibilityLabel: string;
    children: React.ReactNode[] | React.ReactNode;
    style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
    animatedOnChange: (index: number) => Animated.Node<number>;
    onLongPress: (index: number) => void;
    onLayout?: (index: number, layout: LayoutRectangle) => void;
}
declare const RawButton: ({ index, selectedIndex, accessibilityLabel, children, style, animatedOnChange, onLongPress, onLayout, }: RawButtonProps) => JSX.Element;
export default RawButton;
