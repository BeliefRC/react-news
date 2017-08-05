/// <reference types="react" />
import React from 'react';
import { RadioProps } from './PropsType';
export default class Radio extends React.Component<RadioProps, any> {
    static RadioItem: any;
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
    constructor(props: RadioProps, context: any);
    componentWillReceiveProps(nextProps: RadioProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
