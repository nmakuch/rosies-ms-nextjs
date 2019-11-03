webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Form = function Form() {
  return __jsx("section", {
    id: "contact-form"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("h1", null, "Anywhere in your app!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: "",
      password: ""
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
    return __jsx("form", {
      onSubmit: handleSubmit
    }, __jsx("label", null, "email"), __jsx("input", {
      type: "email",
      name: "email",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email
    }), errors.email && touched.email && errors.email, __jsx("label", null, "password"), __jsx("input", {
      type: "password",
      name: "password",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password
    }), errors.password && touched.password && errors.password, __jsx("button", {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=contact.js.184146a24f4c41766153.hot-update.js.map