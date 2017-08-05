/// <reference types="react" />
import React from 'react';
import InputItemProps from './PropsType';
export default class InputItem extends React.Component<InputItemProps, any> {
    static defaultProps: {
        type: string;
        editable: boolean;
        clear: boolean;
        onChange: any;
        onBlur: any;
        onFocus: any;
        extra: string;
        onExtraClick: any;
        error: boolean;
        onErrorClick: any;
        size: string;
        labelNumber: number;
        labelPosition: string;
        textAlign: string;
        last: boolean;
        styles: {
            container: {
                height: number;
                borderBottomWidth: number;
                borderBottomColor: string;
                marginLeft: number;
                paddingRight: number;
                marginTop: number;
                marginBottom: number;
                flexDirection: string;
                alignItems: string;
            };
            text: {
                marginRight: number;
                textAlignVertical: string;
                fontSize: number;
                color: string;
            };
            input: {
                flex: number;
                height: number;
                backgroundColor: string;
                fontSize: number;
            };
            extra: {
                marginLeft: number;
                fontSize: number;
                color: string;
            };
            errorIcon: {
                marginLeft: number;
                width: number;
                height: number;
            };
        };
        focused: boolean;
    };
    onChange: (text: any) => void;
    onInputBlur: () => void;
    onInputFocus: () => void;
    render(): JSX.Element;
}
