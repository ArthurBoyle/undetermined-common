function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { useRouteMeta } from 'dumi';
import LangSwitch from "dumi/theme/slots/LangSwitch";
import Logo from "dumi/theme/slots/Logo";
import Navbar from "dumi/theme/slots/Navbar";
import RtlSwitch from "dumi/theme/slots/RtlSwitch";
import SearchBar from "dumi/theme/slots/SearchBar";
import React, { useState } from 'react';
import "./index.less";

var Header = function Header() {
  var _useRouteMeta = useRouteMeta(),
      frontmatter = _useRouteMeta.frontmatter;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-header",
    "data-static": Boolean(frontmatter.hero) || undefined,
    "data-mobile-active": showMenu || undefined,
    onClick: function onClick() {
      return setShowMenu(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-header-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "dumi-default-header-left"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("section", {
    className: "dumi-default-header-right"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-header-right-aside"
  }, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement(LangSwitch, null), /*#__PURE__*/React.createElement(RtlSwitch, null))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-default-header-menu-btn",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      setShowMenu(function (v) {
        return !v;
      });
    }
  }, showMenu ? /*#__PURE__*/React.createElement(IconClose, null) : /*#__PURE__*/React.createElement(IconMenu, null))));
};

export default Header;