/// <reference types="react" />
import React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import { CardProps } from './PropsType';
export default class Card extends React.Component<CardProps, any> {
    static defaultProps: {
        style: {};
        full: boolean;
        styles: {
            card: {
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
                paddingBottom: number;
                flexDirection: string;
                backgroundColor: string;
            };
            full: {
                borderRadius: number;
                borderLeftWidth: number;
                borderRightWidth: number;
            };
            headerWrap: {
                flexDirection: string;
                paddingVertical: number;
                paddingRight: number;
                marginLeft: number;
                alignItems: string;
            };
            headerTitle: {
                flex: number;
                flexDirection: string;
                alignItems: string;
            };
            headerImage: {
                marginRight: number;
            };
            headerContent: {
                color: string;
                fontSize: number;
                flex: number;
            };
            headerExtra: {
                flex: number;
                fontSize: number;
                color: string;
                textAlign: string;
            };
            body: {
                flexGrow: number;
                paddingVertical: number;
                minHeight: number;
                borderTopWidth: number;
                borderColor: string;
            };
            footerWrap: {
                flexDirection: string;
                paddingHorizontal: number;
            };
            footerContent: {
                flex: number;
                fontSize: number;
                color: string;
            };
            footerExtra: {
                textAlign: string;
                fontSize: number;
                color: string;
            };
        };
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
