/// <reference types="react" />
import React from 'react';
import ResultProps from './PropsType';
export default class Result extends React.Component<ResultProps, any> {
    static defaultProps: {
        styles: {
            result: {
                alignItems: string;
                paddingVertical: number;
                backgroundColor: string;
                borderBottomColor: string;
            };
            imgWrap: {
                margin: number;
            };
            img: {
                width: number;
                height: number;
            };
            title: {
                marginTop: number;
                paddingHorizontal: number;
            };
            titleText: {
                fontSize: number;
                color: string;
            };
            message: {
                marginTop: number;
                paddingHorizontal: number;
            };
            messageText: {
                fontSize: number;
                color: string;
            };
            buttonWrap: {
                flexDirection: string;
                marginTop: number;
                paddingHorizontal: number;
            };
            button: {
                flex: number;
            };
        };
        buttonType: string;
        buttonClick: () => void;
    };
    render(): JSX.Element;
}
