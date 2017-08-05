import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import style from './style';

var RNActivityIndicator = function (_React$Component) {
    _inherits(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        _classCallCheck(this, RNActivityIndicator);

        return _possibleConstructorReturn(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    _createClass(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var styles = this.props.styles;
            return React.createElement(
                View,
                { style: [styles.container] },
                React.createElement(
                    View,
                    { style: [styles.innerContainer, { height: 89 }] },
                    React.createElement(
                        View,
                        { style: [styles.wrapper] },
                        React.createElement(ActivityIndicator, { color: 'white', size: 'large' }),
                        this.props.text && React.createElement(
                            Text,
                            { style: [styles.toast] },
                            this.props.text
                        )
                    )
                )
            );
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            return React.createElement(
                View,
                { style: this.props.styles.spinner },
                React.createElement(ActivityIndicator, { color: this.props.color, size: this.props.size }),
                this.props.text && React.createElement(
                    Text,
                    { style: [this.props.styles.tip] },
                    this.props.text
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.animating) {
                return this.props.toast ? this._renderToast() : this._renderSpinner();
            }
            return null;
        }
    }]);

    return RNActivityIndicator;
}(React.Component);

export default RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
    styles: style
};