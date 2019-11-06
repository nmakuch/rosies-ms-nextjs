webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_GlobalHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/GlobalHeader */ "./components/GlobalHeader.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CheckBox */ "./components/CheckBox.js");
/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_CheckBox__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n            padding-top: 100px !important;\n            padding-bottom: 100px !important;\n            h2 {\n              text-transform: uppercase;\n              font-weight: 600;\n            }\n\n            h2:first-of-type {\n              margin-bottom: 25px;\n            }\n\n            h2:last-of-type {\n              margin-bottom: 25px;\n            }\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */







var CheckBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckBox, _React$Component);

  function CheckBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CheckBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CheckBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckBox, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "checkbox",
        id: this.props.id,
        value: this.props.value,
        onChange: this.props.onChange
      });
    }
  }]);

  return CheckBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Services =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Services, _React$Component2);

  function Services(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Services);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Services).call(this, props));
    _this.state = {
      optionsChecked: [0],
      sum: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Services, [{
    key: "changeEvent",
    value: function changeEvent(event) {
      var checkedArray = this.state.optionsChecked;
      var selectedValue = event.target.value;

      if (event.target.checked === true) {
        checkedArray.push(selectedValue);
        this.setState({
          optionsChecked: checkedArray
        });
      } else {
        var valueIndex = checkedArray.indexOf(selectedValue);
        checkedArray.splice(valueIndex, 1);
        this.setState({
          optionsChecked: checkedArray,
          sum: optionsChecked.reduce(function (a, b) {
            return a + b;
          }, 0)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var checkBoxArray = [1, 2, 3];
      var outputCheckboxes = checkBoxArray.map(function (number, i) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CheckBox, {
          value: number,
          id: 'string_' + i,
          onChange: this.changeEvent.bind(this)
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", {
          htmlFor: 'string_' + i
        }, number));
      }, this);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_GlobalHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        globalHeaderTitle: "Services / Booking",
        globalHeaderSubTitle: "View a list of our services or book an appointment",
        globalHeaderImage: "../img/services-bg.jpg"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("section", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject()),
        id: "contact-form"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "container"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, outputCheckboxes), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.optionsChecked)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.sum)))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_CallToAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
        callTitle: "You're one step away from a clean and happy home!",
        callText: "If you'd like to know more about the services we offer, please view our Services page by clicking the button below.",
        callLinkUrl: "/services",
        callLink: "View our services",
        callImage: "img/services-bg.jpg"
      }));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.66c2dac61599a83f6ef3.hot-update.js.map