/// <reference types="react" />
import React from 'react';
import TextAreaItemProps from './PropsType';
export default class TextAreaItem extends React.Component<TextAreaItemProps, any> {
    static defaultProps: {
        onChange(): void;
        onFocus(): void;
        onBlur(): void;
        onErrorClick(): void;
        clear: boolean;
        error: boolean;
        editable: boolean;
        rows: number;
        count: number;
        keyboardType: string;
        autoHeight: boolean;
        last: boolean;
        styles: {
            container: {
                marginLeft: number;
                borderBottomWidth: number;
                borderBottomColor: string;
            };
            input: {
                paddingHorizontal: number;
                backgroundColor: string;
                fontSize: number;
                lineHeight: number;
                textAlignVertical: string;
            };
            icon: {
                position: string;
                top: number;
                width: number;
                height: number;
            };
            errorIcon: {
                position: string;
                right: number;
                top: number;
            };
            count: {
                position: string;
                right: number;
                bottom: number;
            };
        };
    };
    constructor(props: any);
    onChange: (event: any) => void;
    render(): JSX.Element;
}
