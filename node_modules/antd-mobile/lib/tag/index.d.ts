/// <reference types="react" />
import React from 'react';
import TagProps from './PropsType';
export default class Tag extends React.Component<TagProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
        styles: {
            tag: {
                borderRadius: number;
                backgroundColor: string;
                flexDirection: string;
                overflow: string;
            };
            wrap: {
                overflow: string;
                borderRadius: number;
                borderWidth: number;
                borderStyle: string;
                paddingVertical: number;
                paddingHorizontal: number;
            };
            wrapSmall: {
                paddingVertical: number;
                paddingHorizontal: number;
            };
            text: {
                fontSize: number;
                textAlign: string;
            };
            textSmall: {
                fontSize: number;
            };
            normalWrap: {
                backgroundColor: string;
                borderColor: string;
            };
            normalText: {
                color: string;
            };
            activeWrap: {
                backgroundColor: string;
                borderColor: string;
            };
            activeText: {
                color: string;
            };
            disabledWrap: {
                backgroundColor: string;
                borderWidth: number;
            };
            disabledText: {
                color: string;
            };
            close: {
                position: string;
                backgroundColor: string;
            };
            closeIOS: {
                borderRadius: number;
                width: number;
                height: number;
                left: number;
                top: number;
                overflow: string;
            };
            closeAndroid: {
                width: number;
                height: number;
                left: number;
                top: number;
                transform: {
                    rotate: string;
                }[];
            };
            closeText: {
                color: string;
                textAlign: string;
                fontSize: number;
                lineHeight: number;
            };
            closeTransform: {
                transform: {
                    rotate: string;
                }[];
            };
        };
    };
    closeDom: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick: () => void;
    onTagClose: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
    render(): JSX.Element | null;
}
