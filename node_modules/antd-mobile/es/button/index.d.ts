/// <reference types="react" />
import React from 'react';
import { ButtonProps } from './PropsType';
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        pressIn: boolean;
        disabled: boolean;
        activeStyle: {};
        loading: boolean;
        onClick: (_x?: any) => void;
        onPressIn: (_x?: any) => void;
        onPressOut: (_x?: any) => void;
        onShowUnderlay: (_x?: any) => void;
        onHideUnderlay: (_x?: any) => void;
        styles: {
            container: {
                flexDirection: string;
            };
            defaultHighlight: {
                backgroundColor: string;
                borderColor: string;
            };
            primaryHighlight: {
                backgroundColor: string;
                borderColor: string;
            };
            ghostHighlight: {
                backgroundColor: string;
                borderColor: string;
            };
            warningHighlight: {
                backgroundColor: string;
                borderColor: string;
            };
            wrapperStyle: {
                alignItems: string;
                justifyContent: string;
                borderRadius: number;
                borderWidth: number;
            };
            largeRaw: {
                height: number;
                paddingLeft: number;
                paddingRight: number;
            };
            smallRaw: {
                height: number;
                paddingLeft: number;
                paddingRight: number;
            };
            defaultRaw: {
                backgroundColor: string;
                borderColor: string;
            };
            primaryRaw: {
                backgroundColor: string;
                borderColor: string;
            };
            ghostRaw: {
                backgroundColor: string;
                borderColor: string;
            };
            warningRaw: {
                backgroundColor: string;
                borderColor: string;
            };
            disabledRaw: {
                backgroundColor: string;
                borderColor: string;
            };
            defaultHighlightText: {
                color: string;
            };
            primaryHighlightText: {
                color: string;
            };
            ghostHighlightText: {
                color: string;
            };
            warningHighlightText: {
                color: string;
            };
            largeRawText: {
                fontSize: number;
            };
            smallRawText: {
                fontSize: number;
            };
            defaultRawText: {
                color: string;
            };
            primaryRawText: {
                color: string;
            };
            ghostRawText: {
                color: string;
            };
            warningRawText: {
                color: string;
            };
            disabledRawText: {
                color: string;
            };
            indicator: {
                marginRight: number;
            };
        };
    };
    constructor(props: any);
    onPressIn: (...arg: any[]) => void;
    onPressOut: (...arg: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
