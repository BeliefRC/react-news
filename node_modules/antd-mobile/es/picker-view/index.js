import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Cascader from 'rmc-cascader/es/Cascader';
import MultiPicker from 'rmc-picker/es/MultiPicker';
function getDefaultProps() {
    return {
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        cols: 3,
        cascade: true,
        value: [],
        onChange: function onChange() {}
    };
}

var Picker = function (_React$Component) {
    _inherits(Picker, _React$Component);

    function Picker() {
        _classCallCheck(this, Picker);

        return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
    }

    _createClass(Picker, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var picker = void 0;
            if (props.cascade) {
                picker = React.createElement(Cascader, { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, value: props.value, onChange: props.onChange, cols: props.cols, indicatorStyle: props.indicatorStyle });
            } else {
                picker = React.createElement(
                    MultiPicker,
                    { prefixCls: props.prefixCls, selectedValue: props.value, onValueChange: props.onChange, pickerPrefixCls: props.pickerPrefixCls, indicatorStyle: props.indicatorStyle },
                    props.data.map(function (children) {
                        return { props: { children: children } };
                    })
                );
            }
            return picker;
        }
    }]);

    return Picker;
}(React.Component);

export default Picker;

Picker.defaultProps = getDefaultProps();