webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\"border:0;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          text-align: center;\n          h2 {\n              text-transform: uppercase;\n              font-weight: 600;\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */




var ContactForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ContactForm, _React$Component);

  function ContactForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("section", {
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject()),
        id: "contact-form"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "container"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "row"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "col-md-8 offset-md-2 col-sm-12"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "block"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, "Send us a message"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
        initialValues: {
          email: "",
          name: "",
          subject: ""
        },
        validate: function validate(values) {
          var errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          return errors;
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting;
          setTimeout(function () {
            alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
            setSubmitting(false);
          }, 400);
        }
      }, function (_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "form-group"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
          type: "name",
          name: "name",
          className: "form-control",
          placeholder: "Your name",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.name
        })), errors.name && touched.name && errors.name, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "form-group"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your email",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.email
        })), errors.email && touched.email && errors.email, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "form-group"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
          type: "subject",
          name: "subject",
          placeholder: "Your subject",
          className: "form-control",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.subject
        })), errors.name && touched.name && errors.name, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
          className: "form-group-2"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("textarea", {
          type: "text",
          name: "message",
          rows: "3",
          className: "form-control",
          placeholder: "Your message",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.message
        })), errors.message && touched.message && errors.message, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("button", {
          type: "submit",
          disabled: isSubmitting
        }, "Submit"));
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h2", null, "Our Location"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        className: "google-map"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.472979439986!2d-73.97769068489596!3d40.7516207793276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590247c56379%3A0x15e13bea38b43e18!2sChrysler+Building!5e0!3m2!1sen!2sus!4v1477406538220",
        width: "730",
        height: "300",
        frameBorder: "0",
        allowFullScreen: true,
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject2())
      })))))));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=contact.js.e69ea099eef47ab617da.hot-update.js.map