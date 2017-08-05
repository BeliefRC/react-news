/// <reference types="react" />
import React from 'react';
import { GridProps } from './PropsType';
export default class Grid extends React.Component<GridProps, any> {
    static defaultProps: {
        data: never[];
        hasLine: boolean;
        isCarousel: boolean;
        columnNum: number;
        carouselMaxRow: number;
        styles: {
            grayBorderBox: {
                borderColor: string;
            };
            icon: {
                width: number;
                height: number;
            };
            text: {
                fontSize: number;
                color: string;
                marginTop: number;
            };
        };
    };
    getFlexItemStyle(): {
        height: number;
        borderRightWidth: number;
    };
    render(): JSX.Element;
}
