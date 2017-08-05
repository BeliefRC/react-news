/// <reference types="react" />
import React from 'react';
import { AbstractInputProps } from './Input';
export interface SearchProps extends AbstractInputProps {
    placeholder?: string;
    onSearch?: (value: string) => any;
    onChange?: React.FormEventHandler<any>;
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
}
export default class Search extends React.Component<SearchProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    input: any;
    onSearch: () => void;
    render(): JSX.Element;
}
