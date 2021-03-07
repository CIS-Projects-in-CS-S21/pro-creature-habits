/// <reference types="react" />
import { BubbleTabBarConfig, BubbleTabBarItemConfig } from './presets/bubble';
import { FlashyTabBarConfig, FlashyTabBarItemConfig } from './presets/flashy';
import { MaterialTabBarConfig, MaterialTabBarItemConfig } from './presets/material';
declare const Presets: {
    bubble: {
        component: import("react").NamedExoticComponent<import("./types").TabBarViewProps<BubbleTabBarConfig, BubbleTabBarItemConfig>>;
        $c: BubbleTabBarConfig;
        $t: BubbleTabBarItemConfig;
    };
    flashy: {
        component: import("react").NamedExoticComponent<import("./types").TabBarViewProps<FlashyTabBarConfig, FlashyTabBarItemConfig>>;
        $c: FlashyTabBarConfig;
        $t: FlashyTabBarItemConfig;
    };
    material: {
        component: import("react").NamedExoticComponent<import("./types").TabBarViewProps<MaterialTabBarConfig, MaterialTabBarItemConfig>>;
        $c: MaterialTabBarConfig;
        $t: MaterialTabBarItemConfig;
    };
};
export declare type PresetEnum = keyof typeof Presets;
export default Presets;
