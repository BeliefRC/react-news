/// <reference types="react" />
import React from 'react';
import AccordionProps from './PropsType';
export interface AccordionPanelProps {
    key?: string;
    header: any;
}
declare class Accordion extends React.Component<AccordionProps, any> {
    static defaultProps: {
        styles: {
            container: {
                borderTopWidth: number;
                borderTopColor: string;
            };
            header: {
                flexDirection: string;
                alignItems: string;
                paddingLeft: number;
                paddingRight: number;
                borderBottomWidth: number;
                borderBottomColor: string;
            };
            arrow: {
                width: number;
                height: number;
            };
            headerWrap: {
                flex: number;
                height: number;
                alignItems: string;
                flexDirection: string;
            };
            headerText: {
                color: string;
                fontSize: number;
            };
            content: {
                paddingVertical: number;
                paddingHorizontal: number;
                borderBottomWidth: number;
                borderBottomColor: string;
            };
            contentText: {
                fontSize: number;
                color: string;
            };
        };
    };
    static Panel: any;
    _renderHeader: (section: any, _: any, isActive: any) => JSX.Element;
    _renderContent: (section: any) => any;
    onChange: (idx: any) => void;
    render(): JSX.Element;
}
export default Accordion;
