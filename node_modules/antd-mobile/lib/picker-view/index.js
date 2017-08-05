'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cascader = require('rmc-cascader/lib/Cascader');

var _Cascader2 = _interopRequireDefault(_Cascader);

var _MultiPicker = require('rmc-picker/lib/MultiPicker');

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    (0, _inherits3['default'])(Picker, _React$Component);

    function Picker() {
        (0, _classCallCheck3['default'])(this, Picker);
        return (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Picker, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var picker = void 0;
            if (props.cascade) {
                picker = _react2['default'].createElement(_Cascader2['default'], { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, value: props.value, onChange: props.onChange, cols: props.cols, indicatorStyle: props.indicatorStyle });
            } else {
                picker = _react2['default'].createElement(
                    _MultiPicker2['default'],
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
}(_react2['default'].Component);

exports['default'] = Picker;

Picker.defaultProps = getDefaultProps();
module.exports = exports['default'];