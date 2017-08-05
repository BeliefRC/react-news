/// <reference types="react" />
import React from 'react';
import { CheckboxProps } from './PropsType';
export default class Checkbox extends React.Component<CheckboxProps, any> {
    static CheckboxItem: any;
    static AgreeItem: any;
    static defaultProps: {
        styles: {
            wrapper: {
                flexDirection: string;
                alignItems: string;
            };
            icon: {
                width: number;
                height: number;
            };
            iconRight: {
                marginLeft: number;
            };
            agreeItem: {
                flexDirection: string;
                alignItems: string;
            };
            agreeItemCheckbox: {
                marginLeft: number;
                marginRight: number;
            };
            checkboxItemCheckbox: {
                marginRight: number;
                alignSelf: string;
            };
        };
    };
    constructor(props: CheckboxProps, context: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
