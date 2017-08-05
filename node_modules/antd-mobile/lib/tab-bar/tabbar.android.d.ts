/// <reference types="react" />
import React from 'react';
import { TabBarProps } from './PropsType';
declare class TabBar extends React.Component<TabBarProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
        styles: {
            tabbar: {
                flex: number;
            };
            content: {
                flex: number;
            };
            tabs: {
                height: number;
                borderTopWidth: number;
                borderColor: string;
                borderStyle: string;
                flexDirection: string;
            };
            barItem: {
                flex: number;
                alignItems: string;
                justifyContent: string;
            };
            barIcon: {
                width: number;
                height: number;
                marginTop: number;
            };
            barItemSelected: {};
            barItemTitle: {
                fontSize: number;
                marginTop: number;
            };
            contentItem: {
                zIndex: number;
                position: string;
                top: number;
                left: number;
                right: number;
                bottom: number;
                backgroundColor: string;
            };
            contentItemSelected: {
                zIndex: number;
            };
            badge: {
                minWidth: number;
                height: number;
                borderRadius: number;
                backgroundColor: string;
                position: string;
                top: number;
                left: number;
                paddingHorizontal: number;
            };
            badgeText: {
                textAlign: string;
                color: string;
            };
        };
    };
    static Item: any;
    getPanes(content: any): any[];
    render(): JSX.Element;
}
export default TabBar;
