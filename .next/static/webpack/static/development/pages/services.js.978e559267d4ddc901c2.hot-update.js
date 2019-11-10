webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_GlobalHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GlobalHeader */ "./components/GlobalHeader.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        padding: 0 5px !important;\n                      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            padding-top: 75px !important;\n            padding-bottom: 100px !important;\n            h2 {\n              font-weight: 600;\n            }\n\n            h2:first-of-type {\n              margin-bottom: 25px;\n            }\n\n            h2:last-of-type {\n              margin-bottom: 25px;\n            }\n\n            .form-group {\n              padding: 0px !important;\n            }\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            margin-top: 75px;\n            p {\n              margin-bottom: 0;\n            }\n\n            h2 {\n              font-weight: 600;\n              margin-bottom: 25px;\n            }\n          "]);

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
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, this.props.label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "checkbox",
        id: this.props.id,
        value: this.props.value,
        onChange: this.props.onChange
      }));
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
      optionsAddOns1: [],
      optionsAddOns2: [],
      selectBoxValue1: [],
      radio1: "0"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Services, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        radio1: event.target.value
      });
    }
  }, {
    key: "changeEvent1",
    value: function changeEvent1(event) {
      var checkedArrayAddOns1 = this.state.optionsAddOns1;
      var selectedValue1 = event.target.value;

      if (event.target.checked === true) {
        checkedArrayAddOns1.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(selectedValue1));
        this.setState({
          optionsAddOns1: checkedArrayAddOns1
        });
      } else {
        var valueIndex1 = checkedArrayAddOns1.indexOf(selectedValue1);
        checkedArrayAddOns1.splice(valueIndex1, 1);
        this.setState({
          optionsAddOns1: checkedArrayAddOns1
        });
      }
    }
  }, {
    key: "changeEvent2",
    value: function changeEvent2(event) {
      var checkedArrayAddOns2 = this.state.optionsAddOns2;
      var selectedValue2 = event.target.value;

      if (event.target.checked === true) {
        checkedArrayAddOns2.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(selectedValue2));
        this.setState({
          optionsAddOns2: checkedArrayAddOns2
        });
      } else {
        var valueIndex2 = checkedArrayAddOns2.indexOf(selectedValue2);
        checkedArrayAddOns2.splice(valueIndex2, 1);
        this.setState({
          optionsAddOns2: checkedArrayAddOns2
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var checkBoxArrayAddOns1 = [54, 23, 108];
      var checkBoxArrayLabels1 = ["Basic: kitchen, bathroom, all floors  - 54$ (1.5 hourse)", "Basic Plus: kitchen, bathroom, living areas (including bedroom) - 90$ (2.5 hours)", "Complete: kitchen, bathroom, living areas, plus one big job (oven, fridge, windows*) - 108$ ( 3 hrs)"];
      var checkBoxArrayAddOns2 = [54, 23, 108];
      var checkBoxArrayLabels2 = ["Basic: kitchen, bathroom, all floors  - 54$ (1.5 hourse)", "Basic Plus: kitchen, bathroom, living areas (including bedroom) - 90$ (2.5 hours)", "Complete: kitchen, bathroom, living areas, plus one big job (oven, fridge, windows*) - 108$ ( 3 hrs)"];
      var grandTotalArr = [];
      var outputCheckboxesAddOns1 = checkBoxArrayAddOns1.map(function (number, i) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", {
          htmlFor: "string_" + i
        }, checkBoxArrayLabels1[i]), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CheckBox, {
          value: number,
          id: "string_" + i,
          onChange: _this2.changeEvent1.bind(_this2)
        }));
      }, this);
      var outputCheckboxesAddOns2 = checkBoxArrayAddOns2.map(function (number, i) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", {
          htmlFor: "string_" + i
        }, checkBoxArrayLabels2[i]), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CheckBox, {
          value: number,
          id: "string_" + i,
          onChange: _this2.changeEvent2.bind(_this2)
        }));
      }, this);
      var sumOptionsAddOns1 = this.state.optionsAddOns1.reduce(function (a, b) {
        return a + b;
      }, 0);
      var sumOptionsAddOns2 = this.state.optionsAddOns2.reduce(function (a, b) {
        return a + b;
      }, 0);
      grandTotalArr.push(sumOptionsAddOns1);
      grandTotalArr.push(sumOptionsAddOns2);

      var grandTotalSum = grandTotalArr.reduce(function (a, b) {
        return a + b;
      }, 0) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(this.state.radio1);

      console.log(grandTotalSum);
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_GlobalHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        globalHeaderTitle: "Services / Booking",
        globalHeaderSubTitle: "View a list of our services or book an appointment",
        globalHeaderImage: "../img/services-bg.jpg"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("section", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject())
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "container"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "col-md-8 offset-md-2 col-sm-12"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, "We offer a variety of cleaning options"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", null, "We offer the most customizable plans that let you choose exactly what you want. Whether you want your entire home deep cleaned by one of our professional staff, or simply want some help with the dreaded kitchen & bathroom, we have you covered. Choose from our pre-structured plans that cover all the standard items, or select our hourly plan to have complete control of how the time is spent."))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("section", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject2()),
        id: "service-form"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "block"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("form", {
        method: "post"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "container"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "col-md-8 offset-md-2 col-sm-12"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, "Choose your plan:")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject3()),
        className: "col-md-12 col-sm-12"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "form-group"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, "1) By the hour - Rate: $35/hr"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 52.5,
        checked: this.state.radio1 === "52.5",
        onChange: this.handleChange.bind(this)
      }), "1.5 hours ($52.00)")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 70,
        checked: this.state.radio1 === "70",
        onChange: this.handleChange.bind(this)
      }), "2 hours ($70.00)")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 87,
        checked: this.state.radio1 === "87",
        onChange: this.handleChange.bind(this)
      }), "2.5 hours ($87.00)")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 105,
        checked: this.state.radio1 === "105",
        onChange: this.handleChange.bind(this)
      }), "3 hours ($105.00)")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 122,
        checked: this.state.radio1 === "122",
        onChange: this.handleChange.bind(this)
      }), "3.5 hours ($122.00)")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        type: "radio",
        value: 140,
        checked: this.state.radio1 === "140",
        onChange: this.handleChange.bind(this)
      }), "4 hours ($140.00)")))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, "Add Ons:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "form-group"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, outputCheckboxesAddOns1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "form-group"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, outputCheckboxesAddOns2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "form-group"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
        name: "grandTotal",
        id: "grandTotal",
        type: "text",
        className: "form-control",
        value: "Grand Total: ".concat(grandTotalSum)
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
        className: "btn btn-default",
        type: "submit"
      }, "submit")))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_CallToAction__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
//# sourceMappingURL=services.js.978e559267d4ddc901c2.hot-update.js.map