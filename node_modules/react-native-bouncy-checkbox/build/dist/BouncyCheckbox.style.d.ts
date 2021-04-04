import { ViewStyle, TextStyle, ImageStyle } from "react-native";
interface Style {
    container: ViewStyle;
    textContainer: ViewStyle;
    iconImageStyle: ImageStyle;
}
export declare const _iconContainer: (size: number, checked: boolean, fillColor: string, unfillColor: string) => ViewStyle;
export declare const _textStyle: (checked: boolean) => TextStyle;
declare const _default: Style;
export default _default;
