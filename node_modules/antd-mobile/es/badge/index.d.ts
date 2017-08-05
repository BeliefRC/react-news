/// <reference types="react" />
import React from 'react';
import BadgeProps from './PropsType';
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        size: string;
        overflowCount: number;
        dot: boolean;
        corner: boolean;
        styles: {
            wrap: {
                flexDirection: string;
            };
            textCornerWrap: {
                overflow: string;
            };
            dot: {
                width: number;
                height: number;
                borderRadius: number;
                backgroundColor: string;
                position: string;
                top: number;
                right: number;
            };
            dotSizelarge: {
                width: number;
                height: number;
                borderRadius: number;
            };
            textDom: {
                paddingVertical: number;
                paddingHorizontal: number;
                backgroundColor: string;
                borderRadius: number;
                borderStyle: string;
                position: string;
                top: number;
                right: number;
            };
            textCorner: {
                width: number;
                backgroundColor: string;
                transform: {
                    rotate: string;
                }[];
                position: string;
                top: number;
            };
            textCornerlarge: {
                width: number;
                top: number;
            };
            text: {
                color: string;
                textAlign: string;
            };
        };
    };
    render(): JSX.Element;
}
