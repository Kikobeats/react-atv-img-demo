var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

var AtvImg = function (_Component) {
  _inherits(AtvImg, _Component);

  function AtvImg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtvImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtvImg.__proto__ || Object.getPrototypeOf(AtvImg)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      rootElemWidth: 0,
      rootElemHeight: 0,
      isOnHover: false,
      container: {},
      shine: {},
      layers: []
    }, _this.componentDidMount = function () {
      if (!_this.props.isStatic) {
        _this.setState({
          // eslint-disable-line react/no-did-mount-set-state
          // this is a legit use case. we must trigger a re-render. don't worry.
          rootElemWidth: _this.node.clientWidth || _this.node.offsetWidth || _this.node.scrollWidth,
          rootElemHeight: _this.node.clientHeight || _this.node.offsetHeight || _this.node.scrollHeight
        });
      }
    }, _this.handleMove = function (_ref2) {
      var pageX = _ref2.pageX,
          pageY = _ref2.pageY;

      var layerCount = _this.props.layers.length; // the number of layers

      var _this$state = _this.state,
          rootElemWidth = _this$state.rootElemWidth,
          rootElemHeight = _this$state.rootElemHeight;


      var bodyScrollTop = document.body.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
      var bodyScrollLeft = document.body.scrollLeft;
      var offsets = _this.node.getBoundingClientRect();
      var wMultiple = 320 / rootElemWidth;
      var offsetX = 0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth; // cursor position X
      var offsetY = 0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight; // cursor position Y
      var dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2; // center Y of container
      var dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2; // center X of container
      var yRotate = (offsetX - dx) * (0.07 * wMultiple); // rotation for container Y
      var xRotate = (dy - offsetY) * (0.1 * wMultiple); // rotation for container X

      var arad = Math.atan2(dy, dx); // angle between cursor and center of container in RAD

      var rawAngle = arad * 180 / Math.PI - 90; // convert rad to degrees
      var angle = rawAngle < 0 ? rawAngle + 360 : rawAngle;

      _this.setState({
        container: {
          transform: 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)' + (_this.state.isOnHover ? ' scale3d(1.07,1.07,1.07)' : '')
        },
        shine: {
          background: 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255, ' + (pageY - offsets.top - bodyScrollTop) / rootElemHeight * 0.4 + ') 0%, rgba(255, 255, 255, 0) 80%)',
          transform: 'translateX(' + (offsetX * layerCount - 0.1) + 'px) translateY(' + (offsetY * layerCount - 0.1) + 'px)'
        },
        layers: _this.props.layers.map(function (_, idx) {
          return {
            transform: 'translateX(' + offsetX * (layerCount - idx) * (idx * 2.5 / wMultiple) + 'px) translateY(' + offsetY * layerCount * (idx * 2.5 / wMultiple) + 'px)'
          };
        })
      });
    }, _this.handleTouchMove = function (evt) {
      evt.preventDefault();
      var _evt$touches$ = evt.touches[0],
          pageX = _evt$touches$.pageX,
          pageY = _evt$touches$.pageY;

      _this.handleMove({ pageX: pageX, pageY: pageY });
    }, _this.handleEnter = function () {
      _this.setState({ isOnHover: true });
    }, _this.handleLeave = function () {
      _this.setState({
        isOnHover: false,
        container: {},
        shine: {},
        layers: []
      });
    }, _this.renderShadow = function () {
      return _jsx('div', {
        style: _extends({}, styles.shadow, _this.state.isOnHover ? styles.shadowOnHover : {})
      });
    }, _this.renderLayers = function () {
      return _jsx('div', {
        style: styles.layers
      }, void 0, _this.props.layers && _this.props.layers.map(function (imgSrc, idx) {
        return _jsx('div', {
          style: _extends({
            backgroundImage: 'url(' + imgSrc + ')'
          }, styles.renderedLayer, _this.state.layers[idx] ? _this.state.layers[idx] : {})
        }, idx);
      }));
    }, _this.renderShine = function () {
      return _jsx('div', {
        style: _extends({}, styles.shine, _this.state.shine)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtvImg, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isStatic) {
        return _jsx('div', {
          style: _extends({}, styles.root, this.props.style ? this.props.style : {}),
          className: this.props.className || ''
        }, void 0, _jsx('img', {
          style: styles.staticFallback,
          src: this.props.staticFallback
        }));
      }

      return React.createElement(
        'div',
        {
          style: _extends({}, styles.root, {
            transform: 'perspective(' + this.state.rootElemWidth * 3 + 'px)'
          }, this.props.style ? this.props.style : {}),
          onMouseMove: this.handleMove,
          onMouseEnter: this.handleEnter,
          onMouseLeave: this.handleLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleEnter,
          onTouchEnd: this.handleLeave,
          className: this.props.className || '',
          ref: function ref(node) {
            return _this2.node = node;
          }
        },
        _jsx('div', {
          style: _extends({}, styles.container, this.state.container)
        }, void 0, this.renderShadow(), this.renderLayers(), this.renderShine())
      );
    }
  }]);

  return AtvImg;
}(Component);

export default AtvImg;