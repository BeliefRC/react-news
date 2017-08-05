/// <reference types="react" />
import React from 'react';
import SegmentedControlProps from './PropsType';
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        selectedIndex: number;
        disabled: boolean;
        values: never[];
        onChange(): void;
        onValueChange(): void;
        tintColor: string;
        style: {};
        styles: {
            segment: {
                flexDirection: string;
                overflow: string;
                borderWidth: number;
                borderColor: string;
                borderRadius: number;
            };
            item: {
                flex: number;
                paddingVertical: number;
                borderLeftWidth: number;
                borderRightWidth: number;
                borderStyle: string;
                alignItems: string;
                justifyContent: string;
            };
            itemLeftRadius: {
                borderTopLeftRadius: number;
                borderBottomLeftRadius: number;
            };
            itemRightRadius: {
                borderTopRightRadius: number;
                borderBottomRightRadius: number;
            };
            itemText: {
                textAlign: string;
                fontSize: number;
            };
        };
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onPress(e: any, index: any, value: any): void;
    render(): JSX.Element;
}
