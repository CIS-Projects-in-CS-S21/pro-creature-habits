import React from 'react';
import { SkillBarProps, SkillBarState } from "../interfaces";
import './SkillBar.scss';
export default class SkillBar extends React.Component<SkillBarProps, SkillBarState> {
    static defaultProps: {
        offset: number;
        height: number;
        animationDuration: number;
        animationDelay: number;
    };
    private node?;
    private listener;
    constructor(props: SkillBarProps);
    static posTop(): number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private removeListener;
    private visibilityHasChanged;
    private isMovingIntoView;
    private handleScroll;
    private isVisible;
    private getSkillBarColor;
    private getTitleColor;
    render(): JSX.Element;
}
