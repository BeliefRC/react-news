/// <reference types="react" />
import React from 'react';
import NoticeBarProps from './PropsType';
export default class NoticeBar extends React.Component<NoticeBarProps, any> {
    static defaultProps: {
        mode: string;
        onClick(): void;
        icon: JSX.Element;
        styles: {
            notice: {
                backgroundColor: string;
                height: number;
                overflow: string;
                flexDirection: string;
                alignItems: string;
            };
            content: {
                flex: number;
                fontSize: number;
                color: string;
                marginRight: number;
            };
            left6: {
                marginLeft: number;
            };
            left15: {
                marginLeft: number;
            };
            close: {
                color: string;
                fontSize: number;
                marginRight: number;
                fontWeight: string;
            };
            link: {
                transform: {
                    rotate: string;
                }[];
                color: string;
                fontSize: number;
                fontWeight: string;
                marginRight: number;
            };
        };
    };
    constructor(props: any);
    onClick: () => void;
    render(): JSX.Element | null;
}
