webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/nickmakuch/Documents/Code/rosies-ms-nextjs/components/Slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background-image: url('", "'); \n        h1 {\n          font-size: 45px !important;\n          font-weight: 600 !important;\n          text-transform: uppercase;\n        }\n        \n        @media only screen and (max-width: 767px) {\n          p {\n            font-size: 18px !important;\n          }\n\n          h1 {\n            font-size: 40px !important;\n          }\n        }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("section", {
        id: "slider",
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["css"])(_templateObject(), this.props.sliderBgImage),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
        className: "col-md-10 offset-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
        className: "block text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h1", {
        className: "animated fadeInUp hero-h1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.sliderTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
        className: "animated fadeInUp hero-p",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.sliderSubTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
        href: this.props.sliderButtonUrl,
        className: "btn-main btn-solid-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.sliderButtonTxt))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.96dbea68fefc2e6e476c.hot-update.js.map