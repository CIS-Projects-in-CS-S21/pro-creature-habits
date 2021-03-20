export declare type SkillBarProps = {
    skills: SkillBarSkill[];
    colors?: any;
    animationDelay?: number;
    animationDuration?: number;
    offset?: number;
    height?: number | string;
};
export declare type SkillBarSkill = {
    type: string;
    level: number;
    color?: {
        bar?: string;
        title?: {
            [key: string]: string | undefined;
            text?: string;
            background?: string;
        };
    };
};
export declare type SkillBarVisibility = {
    partially: boolean;
    completely: boolean;
};
export declare type SkillBarState = {
    collapsed: boolean;
    lastVisibility: SkillBarVisibility;
    clientSide: boolean;
    elementBottom?: number;
    elementTop?: number;
};
