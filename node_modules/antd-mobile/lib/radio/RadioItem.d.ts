/// <reference types="react" />
import React from 'react';
import { RadioItemProps } from './PropsType';
export default class RadioItem extends React.Component<RadioItemProps, any> {
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
            radioItem: {
                flexDirection: string;
                alignItems: string;
            };
            radioItemRadio: {
                marginLeft: number;
                marginRight: number;
            };
            radioItemContent: {
                color: string;
                fontSize: number;
            };
            radioItemContentDisable: {
                color: string;
            };
        };
    };
    handleClick: () => void;
    render(): JSX.Element;
}
