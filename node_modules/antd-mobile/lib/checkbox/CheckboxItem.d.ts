/// <reference types="react" />
import React from 'react';
import { CheckboxItemProps } from './PropsType';
export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
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
    handleClick: () => void;
    render(): JSX.Element;
}
