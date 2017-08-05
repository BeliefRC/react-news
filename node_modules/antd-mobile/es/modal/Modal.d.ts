/// <reference types="react" />
import React from 'react';
import { ModalProps } from './PropsType';
declare class AntmModal extends React.Component<ModalProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        animateAppear: boolean;
        styles: {
            container: {
                zIndex: number;
            };
            wrap: {
                justifyContent: string;
                alignItems: string;
            };
            innerContainer: {
                borderRadius: number;
                width: number;
                paddingTop: number;
                overflow: string;
            };
            footer: {
                position: string;
                bottom: number;
                left: number;
                right: number;
                borderBottomLeftRadius: number;
                borderBottomRightRadius: number;
            };
            header: {
                fontSize: number;
                color: string;
                textAlign: string;
                paddingHorizontal: number;
            };
            body: {
                paddingTop: number;
                paddingBottom: number;
                paddingHorizontal: number;
            };
            maskClosable: {
                position: string;
                top: number;
                bottom: number;
                left: number;
                right: number;
                backgroundColor: string;
            };
            closeWrap: {
                position: string;
                top: number;
                left: number;
            };
            close: {
                fontSize: number;
                fontWeight: string;
                color: string;
                lineHeight: number;
            };
            buttonGroupH: {
                flexGrow: number;
                flexDirection: string;
            };
            buttonGroupV: {
                flexGrow: number;
                flexDirection: string;
            };
            buttonWrapH: {
                flexGrow: number;
                borderColor: string;
                borderTopWidth: number;
                borderRightWidth: number;
                paddingVertical: number;
            };
            buttonWrapV: {
                flexGrow: number;
                borderTopWidth: number;
                borderColor: string;
                paddingVertical: number;
            };
            buttonText: {
                textAlign: string;
                color: string;
                fontSize: number;
                backgroundColor: string;
            };
            operationContainer: {
                paddingTop: number;
            };
            operationBody: {
                paddingBottom: number;
                paddingHorizontal: number;
            };
            buttonTextOperation: {
                color: string;
                textAlign: string;
                paddingHorizontal: number;
            };
        };
        operation: boolean;
    };
    root: any;
    onFooterLayout: (e: any) => void;
    saveRoot: (root: any) => void;
    render(): JSX.Element;
}
export default AntmModal;
