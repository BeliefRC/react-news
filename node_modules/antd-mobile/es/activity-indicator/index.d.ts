/// <reference types="react" />
import React from 'react';
import PropTypes from './PropsType';
export default class RNActivityIndicator extends React.Component<PropTypes, any> {
    static defaultProps: {
        animating: boolean;
        color: string;
        size: string;
        toast: boolean;
        styles: {
            container: {
                position: string;
                top: number;
                left: number;
                bottom: number;
                right: number;
                backgroundColor: string;
                zIndex: number;
            };
            innerContainer: {
                flex: number;
                alignItems: string;
                justifyContent: string;
                backgroundColor: string;
            };
            wrapper: {
                alignItems: string;
                justifyContent: string;
                width: number;
                height: number;
                borderRadius: number;
                backgroundColor: string;
            };
            tip: {
                color: string;
                fontSize: number;
                marginLeft: number;
            };
            toast: {
                color: string;
                fontSize: number;
                marginTop: number;
            };
            spinner: {
                flexDirection: string;
                justifyContent: string;
                alignItems: string;
            };
        };
    };
    _renderToast(): JSX.Element;
    _renderSpinner(): JSX.Element;
    render(): JSX.Element | null;
}
