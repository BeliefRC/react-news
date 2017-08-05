/// <reference types="react" />
import React from 'react';
import { SearchBarProps, SearchBarState } from './PropsType';
import { SearchBarStyle } from './style';
export interface SearchBarNativeProps extends SearchBarProps {
    styles: SearchBarStyle;
}
export default class SearchBar extends React.Component<SearchBarNativeProps, SearchBarState> {
    static defaultProps: {
        styles: SearchBarStyle;
        prefixCls: string;
        placeholder: string;
        onSubmit: () => void;
        onChange: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onClear: () => void;
        showCancelButton: boolean;
        cancelText: string;
        disabled: boolean;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onSubmit: (e: any) => void;
    onChangeText: (value: any) => void;
    onCancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
