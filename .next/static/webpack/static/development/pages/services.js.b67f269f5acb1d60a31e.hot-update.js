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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_GlobalHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GlobalHeader */ "./components/GlobalHeader.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CheckBox */ "./components/CheckBox.js");
/* harmony import */ var _components_CheckBox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_CheckBox__WEBPACK_IMPORTED_MODULE_14__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CheckBox, _React$Component);

  function CheckBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CheckBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CheckBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CheckBox, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("label", null, this.props.label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("input", {
        type: "checkbox",
        id: this.props.id,
        value: this.props.value,
        onChange: this.props.onChange
      }));
    }
  }]);

  return CheckBox;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Services =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Services, _React$Component2);

  function Services(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Services);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Services).call(this, props));
    _this.state = {
      optionsAddOns1: [0]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Services, [{
    key: "changeEvent",
    value: function changeEvent(event) {
      var checkedArrayAddOns1 = this.state.optionsAddOns1;
      var selectedValue = event.target.value;

      if (event.target.checked === true) {
        checkedArrayAddOns1.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(selectedValue));
        this.setState({
          optionsAddOns1: checkedArrayAddOns1
        });
      } else {
        var valueIndex = checkedArrayAddOns1.indexOf(selectedValue);
        checkedArrayAddOns1.splice(valueIndex, 1);
        this.setState({
          optionsAddOns1: checkedArrayAddOns1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var checkBoxArrayAddOns1 = [1, 2, 3];
      var checkBoxArrayLabels = ["Label1:", "Label2:", "Label3:"];
      var outputCheckboxesAddOns1 = checkBoxArrayAddOns1.map(function (number, i) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CheckBox, {
          value: 1,
          id: "string_" + i,
          onChange: _this2.changeEvent.bind(_this2)
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("label", {
          htmlFor: "string_" + i
        }, number));
      }, this);
      var sum = this.state.optionsAddOns1.reduce(function (a, b) {
        return a + b;
      }, 0);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_GlobalHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        globalHeaderTitle: "Services / Booking",
        globalHeaderSubTitle: "View a list of our services or book an appointment",
        globalHeaderImage: "../img/services-bg.jpg"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("section", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject()),
        id: "contact-form"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        className: "container"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, outputCheckboxesAddOns1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.optionsAddOns1)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, sum))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_CallToAction__WEBPACK_IMPORTED_MODULE_13__["default"], {
        callTitle: "You're one step away from a clean and happy home!",
        callText: "If you'd like to know more about the services we offer, please view our Services page by clicking the button below.",
        callLinkUrl: "/services",
        callLink: "View our services",
        callImage: "img/services-bg.jpg"
      }));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.b67f269f5acb1d60a31e.hot-update.js.map