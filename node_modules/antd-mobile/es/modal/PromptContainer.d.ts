/// <reference types="react" />
import React from 'react';
export declare type ButtonType = {
    text: string;
    onPress?: () => void;
    style?: any;
};
export interface PropmptContainerProps {
    title: string;
    type?: 'default' | 'login-password' | 'secure-text';
    message?: string | null;
    defaultValue?: string;
    actions: Array<ButtonType>;
    onAnimationEnd?: (visible: boolean) => void;
    styles?: any;
}
export default class PropmptContainer extends React.Component<PropmptContainerProps, any> {
    static defaultProps: {
        type: string;
        defaultValue: string;
        styles: {
            message: {
                marginTop: number;
                color: string;
                fontSize: number;
                textAlign: string;
            };
            inputGroup: {
                marginTop: number;
                flexDirection: string;
            };
            inputWrapper: {
                borderWidth: number;
                borderTopWidth: number;
                borderColor: string;
            };
            input: {
                height: number;
                fontSize: number;
                paddingHorizontal: number;
                paddingVertical: number;
            };
            inputFirst: {
                borderTopWidth: number;
                borderTopLeftRadius: number;
                borderTopRightRadius: number;
            };
            inputLast: {
                borderBottomLeftRadius: number;
                borderBottomRightRadius: number;
            };
        };
    };
    constructor(props: any);
    onClose: () => void;
    onChangeText(type: any, value: any): void;
    render(): JSX.Element;
}
