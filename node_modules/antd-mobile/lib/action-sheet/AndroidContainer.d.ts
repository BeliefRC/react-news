/// <reference types="react" />
import React from 'react';
export interface Props {
    onAnimationEnd?: (visible: boolean) => void;
    visible?: boolean;
    share?: boolean;
    config?: any;
    callback?: (index: number) => void;
}
declare class ActionSheetAndroid extends React.Component<Props, any> {
    static defaultProps: {
        share: boolean;
    };
    constructor(props: any);
    confirm(index: any): void;
    render(): JSX.Element;
}
export default ActionSheetAndroid;
