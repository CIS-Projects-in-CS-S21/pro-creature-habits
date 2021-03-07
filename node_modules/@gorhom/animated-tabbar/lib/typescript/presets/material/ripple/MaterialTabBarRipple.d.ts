import React from 'react';
import { LayoutRectangle } from 'react-native';
import Animated from 'react-native-reanimated';
import type { MaterialTabBarItemConfig } from '../types';
interface MaterialTabBarRippleProps {
    tabs: Array<MaterialTabBarItemConfig>;
    tabItemPositions: Array<LayoutRectangle>;
    animatedFocusValues: Array<Animated.Node<number>>;
    selectedIndex: Animated.Node<number>;
    width: number;
    height: number;
}
declare const MaterialTabBarRipple: React.NamedExoticComponent<MaterialTabBarRippleProps>;
export default MaterialTabBarRipple;
