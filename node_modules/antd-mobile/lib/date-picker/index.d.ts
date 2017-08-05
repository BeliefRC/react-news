/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class DatePicker extends React.Component<tsPropsType, any> {
    static defaultProps: {
        mode: string;
        extra: string;
        onChange(): void;
        title: string;
        triggerType: string;
        styles: {
            modal: {
                flex: number;
                flexDirection: string;
                justifyContent: string;
            };
            header: {
                flexGrow: number;
                height: number;
                alignItems: string;
                flexDirection: string;
                justifyContent: string;
                borderBottomWidth: number;
                borderBottomColor: string;
            };
            headerItem: {
                height: number;
                flex: number;
                alignItems: string;
                justifyContent: string;
            };
            actionText: {
                color: string;
                fontSize: number;
                textAlign: string;
            };
            title: {
                color: string;
                fontSize: number;
                textAlign: string;
            };
        };
        minuteStep: number;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): JSX.Element;
}
