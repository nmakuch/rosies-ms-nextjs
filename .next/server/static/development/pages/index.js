module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class CallToAction extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "call-to-action",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`background-image: url('${this.props.callImage}');`
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "block"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", null, this.props.callTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.callText), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: this.props.callLinkUrl,
      as: this.props.callLinkUrl
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "btn-main btn-solid-border"
    }, this.props.callLink)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "./components/Feature.js":
/*!*******************************!*\
  !*** ./components/Feature.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class Feature extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "feature",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`background-image: url('${this.props.featureImage}');`
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-6 col-md-offset-6"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
      className: "text-uppercase"
    }, this.props.featureTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.featureContent), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      href: "{{ .url }}",
      className: "btn-solid-border btn-main"
    }, this.props.featureBtnCaption)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "footer-manu"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      as: "/"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Home"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/services",
      as: "/services"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Services/Booking"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/faq",
      as: "/faq"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "FAQ"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contact",
      as: "/contact"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Contact Us"))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, "Copyright \xA9 Rosie's Maid Service 2019. All rights reserved.")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
      className: "navbar navbar-default"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container-fluid"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "navbar-header"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "navbar-brand",
      href: "/nextjs-rosies-ms/"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      width: "300px",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                            margin-top: 5px;
                          `,
      src: "data:image/png;base64,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",
      alt: "Rosie's Maid Service logo"
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      id: "navigation"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                          display: flex;
                          position: relative;
                          top: 11px;

                          li {
                            margin-left: 50px;
                          }

                          li a {
                            color: black;
                          }
                        `
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      as: "/"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Home"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/services",
      as: "/services"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Services"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contact",
      as: "/contact"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Contact Us")), " "))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HowItWorks.js":
/*!**********************************!*\
  !*** ./components/HowItWorks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class HowItWorks extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "service"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                width: 100%;
              `,
      className: "section-title"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", null, this.props.howTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.howSubTitle))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item col-sm-12 col-md-6 col-lg-4"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: this.props.item1img,
      alt: "Img"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", null, this.props.item1name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.item1text)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item col-sm-12 col-md-6 col-lg-4"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: this.props.item2img,
      alt: "Img"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", null, this.props.item2name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.item2text)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-0"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: this.props.item3img,
      alt: "Img"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", null, this.props.item3name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.item3text))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item col-sm-12 col-md-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      href: "#"
    }, "View Services")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */







class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
      styles: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
            ${_styles_styles__WEBPACK_IMPORTED_MODULE_2__["appStyles"]}
          `
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: this.props.contentClass
    }, this.props.children)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */




class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
      className: "navbar navbar-expand-lg navbar-light bg-light transparent-nav"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "navbar-brand",
      href: "#"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                margin-top: 5px;
                padding: 20px 0;
                width: 300px;

                @media only screen and (max-width: 450px) {
                  width: 200px;
                }
              `,
      src: "data:image/png;base64,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",
      alt: "Rosie's Maid Service logo"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
      onClick: this.toggleNavbar,
      className: `${classTwo}`,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarResponsive",
      "aria-controls": "navbarResponsive",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      className: "navbar-toggler-icon"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: `${classOne}`,
      id: "navbarResponsive"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                li a {
                  margin-left: 50px;
                  color: #333;
                  font-size: 16px;
                  font-weight: 500;
                }

                @media only screen and (max-width: 992px) {
                  li a {
                    margin-left: 0;
                  }

                  li {
                      margin-bottom: 20px;
                  }
                }
              `,
      className: "navbar-nav ml-auto"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      className: "nav-item active"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      as: "/"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Home"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      className: "nav-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/services",
      as: "/services"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Services/Booking"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      className: "nav-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/faq",
      as: "/faq"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "FAQ"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      className: "nav-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contact",
      as: "/contact"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Contact Us")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/ServiceHome.js":
/*!***********************************!*\
  !*** ./components/ServiceHome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ionicons_lib_IosContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ionicons/lib/IosContacts */ "react-ionicons/lib/IosContacts");
/* harmony import */ var react_ionicons_lib_IosContacts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosContacts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ionicons_lib_IosChatbubbles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ionicons/lib/IosChatbubbles */ "react-ionicons/lib/IosChatbubbles");
/* harmony import */ var react_ionicons_lib_IosChatbubbles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosChatbubbles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ionicons_lib_IosFingerPrint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ionicons/lib/IosFingerPrint */ "react-ionicons/lib/IosFingerPrint");
/* harmony import */ var react_ionicons_lib_IosFingerPrint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosFingerPrint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ionicons_lib_IosSchool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ionicons/lib/IosSchool */ "react-ionicons/lib/IosSchool");
/* harmony import */ var react_ionicons_lib_IosSchool__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_IosSchool__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */






class ServiceHome extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "call-to-action",
      className: "service-home",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`background-image: url('${this.props.serviceHomeBgImage}');`
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "block"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", null, this.props.serviceHomeTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.serviceHomeText1)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
              svg {
                margin: 25px 0 25px 0;
              }
            `
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-sm-6 col-md-3"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_ionicons_lib_IosSchool__WEBPACK_IMPORTED_MODULE_5___default.a, {
      fontSize: "80px",
      color: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null, this.props.item1name)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-sm-6 col-md-3"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_ionicons_lib_IosFingerPrint__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fontSize: "80px",
      color: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null, this.props.item2name)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-sm-6 col-md-3"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_ionicons_lib_IosChatbubbles__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fontSize: "80px",
      color: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null, this.props.item3name)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-sm-6 col-md-3"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "service-item"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_ionicons_lib_IosContacts__WEBPACK_IMPORTED_MODULE_2___default.a, {
      fontSize: "80px",
      color: "#fff"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null, this.props.item4name)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ServiceHome);

/***/ }),

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "slider",
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`background-image: url('${this.props.sliderBgImage}');`
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-12 col-md-offset-1"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "block text-center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
      className: "animated fadeInUp text-uppercase hero-h1"
    }, this.props.sliderTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
      className: "animated fadeInUp hero-p"
    }, this.props.sliderSubTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: this.props.sliderButtonUrl,
      as: this.props.sliderButtonUrl
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "btn-main btn-solid-border"
    }, this.props.sliderButtonTxt)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Wrapper.js":
/*!*******************************!*\
  !*** ./components/Wrapper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */



class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
      id: "intro"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "container"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "row"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-7 col-sm-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "block"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "section-title"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", null, this.props.wrapperTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.wrapperSubTitle)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.wrapperPara1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", null, this.props.wrapperPara2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                    a {
                      color: #333;
                      display: inline-block;
                      font-size: 16px;
                      letter-spacing: 1px;
                      padding: 14px 35px;
                      font-weight: 600;
                      margin-top: 25px;
                      border: 3px solid #333;
                      text-transform: uppercase;
                      border-radius: 0;
                      -webkit-transition: all 0.4s ease;
                      transition: all 0.4s ease;
                    }

                    a:hover {
                      background: #333;
                      color: #fff;
                      -webkit-transition: all 0.4s ease;
                      transition: all 0.4s ease;
                    }
                  `
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", null, "Book Now"))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "col-md-5 col-sm-12"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "block"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
                    @media only screen and (max-width: 768px) {
                      padding: 0 !important;
                    }
                  `,
      src: this.props.wrapperImage,
      alt: "Img"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slider */ "./components/Slider.js");
/* harmony import */ var _components_HowItWorks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HowItWorks */ "./components/HowItWorks.js");
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _components_ServiceHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ServiceHome */ "./components/ServiceHome.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Feature */ "./components/Feature.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement

/** @jsx jsx */










class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sliderBgImage: "../img/hero-bg.jpg",
      sliderTitle: "Toronto\u2019s #1 Rated Maid Service",
      sliderSubTitle: "Toronto\u2019s #1 Rated Maid Service",
      sliderButtonUrl: "/services",
      sliderButtonTxt: "Book Now"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_HowItWorks__WEBPACK_IMPORTED_MODULE_5__["default"], {
      howTitle: "How it works",
      howSubTitle: "This subtitle can be changed to whatever you want it to be",
      item1img: "img/booking.png",
      item1name: "1) You Book",
      item1text: "Schedule a condo cleaning that works best for you and a trusted cleaner will show up.",
      item2img: "img/cleaning.png",
      item2name: "2) We Clean",
      item2text: "Guaranteed quality or we will come back and clean any missed area for free.",
      item3img: "img/relaxing.png",
      item3name: "3) You Relax",
      item3text: "Enjoy your sparkling clean home, and look forward to the next cleaning."
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_ServiceHome__WEBPACK_IMPORTED_MODULE_7__["default"], {
      serviceHomeBgImage: "img/hero-bg.jpg",
      serviceHomeTitle: "TRUSTED TORONTO CLEANERS",
      serviceHomeText1: "We know inviting someone into your home is a big deal. All of our cleaners are carefully selected and will all be:",
      item1name: "Experienced and professional cleaners",
      item2name: "Given a background and reference check",
      item3name: "English speaking and screened by us to ensure",
      item4name: "Selected through an in-person interview"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      wrapperTitle: "Book on the go",
      wrapperSubTitle: "Our website is responsive and mobile friendly so you can book your appointment anywhere. We want to offer the same user experience to both desktop and mobile users.",
      wrapperPara1: "We offer a wide range of customizable cleaning services. In order to customize your own personal cleaning plan, you can view a full list our services on our Services/Booking page.",
      wrapperPara2: "We understand that things happen and you may need to cancel your appointment. We will cancel all charges for your scheduled appointment if you can provide us with notice of cancellation witin (1) day of the decided date and time.",
      wrapperImage: "img/mobile.png"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_CallToAction__WEBPACK_IMPORTED_MODULE_6__["default"], {
      callTitle: "You're one step away from a clean and happy home!",
      callText: "If you'd like to know more about the services we offer, please view our Services page by clicking the button below.",
      callLinkUrl: "/services",
      callLink: "View our services",
      callImage: "img/hero-bg.jpg"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/styles.js":
/*!**************************!*\
  !*** ./styles/styles.js ***!
  \**************************/
/*! exports provided: appStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStyles", function() { return appStyles; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const appStyles = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
.italic {
 font-style: italic;
}

.bold {
 font-weight: bold;
}

.center-text {
 text-align: center;
}

.post-area {
 padding: 40px;
 width: 100%;
 min-height: 150px;
 background-color: white;
 border-bottom: 1px dotted #ddd;
}

.post-area a:link,
.post-area a:visited {
 font-size: 30px;
 color: #333;
}

.post-area a:hover {
 color: #0D0017;
}

.lang-list {
 display: inline-block;
 margin-top: 15px;
}

.lang-list a {
 color: #0D0017;
 font-weight: bold;
}

body {
 font-family: 'Open Sans', sans-serif;
 -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
 font-family: 'Roboto', sans-serif;
}

h2 {
 font-size: 30px;
 font-weight: 400;
}

h3 {
 font-size: 28px;
 font-weight: 300;
}

p {
 font-size: 16px;
 line-height: 28px;
}

ul {
 padding: 0;
 margin: 0;
 list-style: none;
}

.fz-20{
 font-size: 20px;
}

a,
a:active,
a:focus,
a:active {
 text-decoration: none !important;
}

.section {
 padding: 100px 0;
}

.section-title {
 margin-bottom: 70px;
}

.section-title h2 {
 text-transform: uppercase;
 font-size: 36px;
 font-weight: 600;
 margin-bottom: 15px;
}

.section-title p {
 color: #666;
 font-size: 16px;
}

.btn-main,
.btn-transparent,
.btn-small {
 background: #655E7A;
 color: #fff;
 display: inline-block;
 font-size: 14px;
 letter-spacing: 1px;
 padding: 14px 35px;
 text-transform: uppercase;
 border-radius: 0;
 -webkit-transition: all 0.2s ease;
 transition: all 0.2s ease;
}

.btn-main:hover,
.btn-transparent:hover,
.btn-small:hover {
 background: white;
 color: #353240;
}

.btn-solid-border {
 border: 3px solid #fff;
 background: transparent;
 color: #fff;
 font-size: 16px;
 font-weight: 600;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

.btn-solid-border:hover {
 border: 3px solid #fff;
 background: #fff;
 text-shadow: none;

}

header {
 background: #fff;
 padding: 20px 0;
}

header .navbar {
 margin-bottom: 0px;
 border: 0px;
}

.navbar-right {
  color: red;
 }

header .navbar-brand {
 padding-top: 5px;
}

header .navbar-default {
 background: none;
 border: 0px;
}

header .navbar-default .navbar-nav {
 padding-top: 10px;
}

custom-nav ul {
  display: flex;
  color: red;
}

header .navbar-default .navbar-nav li a {
 color: #333333;
 padding: 10px 26px;
 font-size: 15px;
}

font header .navbar-default .navbar-nav li a:hover {
 color: #000;
}

#slider {
 background-repeat: no-repeat;
 background-size: cover;
 background-attachment: fixed;
 background-position: 10% 0%;
 padding: 150px 0 150px 0;
 position: relative;
}

#slider:before {
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 width: 100%;
 height: 100%;
 background: #1d192c;
 opacity: 0.7;
}

#slider .block {
 color: #E3E3E4;
}

#slider .block h1 {
 font-family: 'Roboto', sans-serif;
 font-weight: 700;
 font-size: 45px;
 line-height: 60px;
 letter-spacing: 5px;
 padding-bottom: 45px;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

#slider .block p {
 font-size: 23px;
 line-height: 40px;
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
 letter-spacing: 3px;
 margin-bottom: 100px;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

#intro {
 padding: 100px 0;
}

#intro .block h2 {
 line-height: 27px;
 margin: 0;
}

#intro .block p {
 color: #333;
}

#intro .block img {
 padding-left: 40px;
 width: 100%;
}

#intro .section-title {
 margin-bottom: 0px;
}

#intro .section-title p {
 padding-top: 20px;
}

#service {
 text-align: center;
 padding: 90px 0;
}

.service-home {
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 70px 0px;
  position: relative;
  text-align: center;
}

.service-home:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #1d192c;
  z-index: 0;
  opacity: 0.7;
}

#service .service-item {
 padding-right: 15px;
 margin-bottom: 100px;
}

#service .service-item a {
  color: #333;
  font-size: 16px;
  padding: 17px 35px;
  border: 3px solid #333;
  background: transparent;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;

  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
 }

 #service .service-item a:hover {
  color: #fff;
  border: 3px solid #333;
  background: #333;

  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
 }

#service .service-item img {
 width: 300px;
}

#service .service-item h4 {
 padding-top: 25px;
 font-weight: 800;
 margin: 0;
 color: #333;
 font-size: 26px;
}

#service .service-item p {
 color: #333;
 padding-top: 10px;
 margin: 0;
 font-size: 16px;
 line-height: 1.8;
}

#call-to-action {
 background-repeat: no-repeat;
 background-size: cover;
 background-attachment: fixed;
 padding: 70px 0px;
 position: relative;
 text-align: center;
 color: #fff;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

#call-to-action:before {
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 width: 100%;
 height: 100%;
 background: #1d192c;
 opacity: 0.7;
}

#call-to-action h2 {
 padding-bottom: 20px;
 line-height: 33px;
 margin: 0;
 font-size: 30px;
}

#call-to-action p {
 font-size: 16px;
 line-height: 1.6;
 margin-bottom: 50px;
}

#call-to-action .btn-call-to-action {
 padding: 15px 35px;
 border: none;
 background-color: #fff;
 font-size: 15px;
 color: #333333;
 margin-top: 30px;
}

#feature {
 background-position: 50% 94px;
 width: 100%;
 display: block;
 position: relative;
 overflow: visible;
 background-attachment: fixed;
 background-repeat: no-repeat;
 background-position: center center;
 background-color: #fff;
 -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
 -webkit-box-sizing: border-box;
 -moz-box-sizing: border-box;
 box-sizing: border-box;
 -webkit-backface-visibility: hidden;
 backface-visibility: hidden;
 padding: 100px 0;
}

#feature h2 {
 font-size: 28px;
 font-weight: 600;
 margin-bottom: 30px;
}

#feature p {
 color: #8d8f92;
 margin-bottom: 20px;
}

#feature .btn-view-works {
 background: #655E7A;
 color: #fff;
 padding: 10px 20px;
}

#testimonial {
 padding: 100px 0;
}

#testimonial .block h2 {
 line-height: 27px;
 color: #5C5C5C;
 padding-top: 110px;
}

#testimonial .block p {
 padding-top: 50px;
 color: #7B7B7B;
}

#testimonial .counter-box li {
 width: 50%;
 float: left;
 text-align: center;
 margin: 30px 0 30px;
}

#testimonial .counter-box li i {
 font-size: 35px;
}

#testimonial .counter-box li h4 {
 font-size: 30px;
 font-weight: bold;
}

#testimonial .counter-box li span {
 color: #555;
}

#testimonial .testimonial-carousel {
 text-align: center;
 width: 75%;
 border: 1px solid #DEDEDE;
 padding: 24px;
 margin: 0 auto;
}

#testimonial .testimonial-carousel img {
 padding-bottom: 38px;
}

#testimonial .testimonial-carousel p {
 line-height: 28px;
 font-weight: 300;
 padding-bottom: 20px;
}

#testimonial .testimonial-carousel .user img {
 padding-bottom: 0px;
 border-radius: 500px;
}

#testimonial .testimonial-carousel .user p {
 padding-bottom: 0;
 font-size: 12px;
 line-height: 20px;
 color: #353241;
}

#testimonial .testimonial-carousel .user p span {
 display: block;
 color: #353241;
 font-weight: 600;
}

#testimonial .testimonial-carousel .owl-carousel .owl-pagination div {
 border: 1px solid #1D1D1D;
 border-radius: 500px;
 display: inline-block;
 height: 10px;
 margin-right: 15px;
 width: 10px;
}

#testimonial .testimonial-carousel .owl-carousel .owl-pagination div.active {
 background: #5C5C5C;
 font-size: 30px;
 display: inline-block;
 border: 0px;
}

#clients-logo-section {
 padding-top: 30px;
 padding-bottom: 75px;
}

#clients-logo-section .clients-logo-img {
 padding: 0px 50px;
}

#global-header {
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 10% 0%;
  padding: 150px 0 150px 0;
  position: relative;
}

#global-header:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #1d192c;
  opacity: 0.7;
}

#global-header .block {
 color: #E3E3E4;
 margin: 0 auto;
 padding-left: 90px;
 text-align: center;
}

#global-header .block h1 {
 font-weight: 700;
 text-transform: uppercase;
 font-size: 45px;
 letter-spacing: 6px;
 padding-bottom: 15px;
 margin-top: 0;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

#global-header .block p {
 font-size: 23px;
 line-height: 40px;
 font-weight: 400;
 letter-spacing: 1px;
 word-spacing: 3px;
 text-shadow: 1px 1px 1px black, 1px 1px 1px rgba(0,0,0,0.2);
}

#portfolio-work {
 overflow: hidden;
 padding: 80px 0;
}

#portfolio-work .block .portfolio-menu {
 padding-bottom: 30px;
 text-align: center;
}

#portfolio-work .block .portfolio-menu ul {
 border: 1px solid #999999;
 display: inline-block;
 margin-bottom: 40px;
}

#portfolio-work .block .portfolio-menu ul li {
 display: inline-block;
 padding: 0px 25px;
 cursor: pointer;
 font-size: 15px;
 line-height: 40px;
 font-weight: 600;
 color: #333333;
 text-transform: capitalize;
 position: relative;
}

#portfolio-work .block .portfolio-menu ul .active {
 color: #655E7A;
 position: relative;
}

#portfolio-work .block .portfolio-menu ul .active:before {
 content: "\f0d7";
 position: absolute;
 font-family: 'FontAwesome';
 bottom: -18px;
 font-size: 30px;
 width: 20px;
 left: 0px;
 right: 0px;
 top: 23px;
 margin: 0 auto;
 color: #fff;
 text-shadow: 0 1px 0px rgba(0, 0, 0, 0.9);
 -webkit-transition: all 0.4s ease-in-out;
 -moz-transition: all 0.4s ease-in-out;
 -o-transition: all 0.4s ease-in-out;
 -ms-transition: all 0.4s ease-in-out;
 transition: all 0.4s ease-in-out;
}

#portfolio-work .block .portfolio-menu ul li:hover:before {
 content: "\f0d7";
 position: absolute;
 font-family: 'FontAwesome';
 bottom: -18px;
 font-size: 30px;
 width: 20px;
 left: 0px;
 right: 0px;
 top: 24px;
 margin: 0 auto;
 color: #fff;
 text-shadow: 0 1px 0px rgba(0, 0, 0, 0.9);
 -webkit-transition: all 0.4s ease-in-out;
 -moz-transition: all 0.4s ease-in-out;
 -o-transition: all 0.4s ease-in-out;
 -ms-transition: all 0.4s ease-in-out;
 transition: all 0.4s ease-in-out;
}

#portfolio-work .block .portfolio-contant ul li {
 float: left;
 width: 32.22%;
 overflow: hidden;
 margin: 6px;
 position: relative;
}

#portfolio-work .block .portfolio-contant ul li:hover .overly {
 opacity: 1;
}

#portfolio-work .block .portfolio-contant ul li:hover .position-center {
 position: absolute;
 top: 50%;
 -webkit-transform: translate(0%, -50%);
 -moz-transform: translate(0%, -50%);
 -ms-transform: translate(0%, -50%);
 transform: translate(0%, -50%);
}

#portfolio-work .block .portfolio-contant ul li a {
 display: block;
 color: #fff;
}

#portfolio-work .block .portfolio-contant ul li a h2 {
 font-size: 22px;
 text-transform: uppercase;
 letter-spacing: 1px;
}

#portfolio-work .block .portfolio-contant ul li a p {
 font-size: 15px;
}

#portfolio-work .block .portfolio-contant ul li a span {
 font-style: italic;
 font-size: 13px;
 color: #655E7A;
}

#portfolio-work .block .portfolio-contant ul img {
 width: 100%;
 height: auto;
}

#portfolio-work .block .portfolio-contant .overly {
 position: absolute;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;
 background: rgba(0, 0, 0, 0.9);
 opacity: 0;
 -webkit-transition: .3s all;
 -o-transition: .3s all;
 transition: .3s all;
 text-align: center;
}

#portfolio-work .block .portfolio-contant .position-center {
 position: absolute;
 top: 50%;
 left: 10%;
 -webkit-transform: translate(0%, 50%);
 -moz-transform: translate(0%, 50%);
 -ms-transform: translate(0%, 50%);
 transform: translate(0%, 50%);
 -webkit-transition: .5s all;
 -o-transition: .5s all;
 transition: .5s all;
}

#portfolio-work .block .mix {
 display: none;
}

#wrapper-work {
 overflow: hidden;
 padding-top: 100px;
}

#wrapper-work ul li {
 width: 50%;
 float: left;
 position: relative;
}

#wrapper-work ul li img {
 width: 100%;
 height: 100%;
}

#wrapper-work ul li .items-text {
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 width: 100%;
 height: 100%;
 color: #fff;
 background: rgba(0, 0, 0, 0.6);
 padding-left: 44px;
 padding-top: 140px;
}

#wrapper-work ul li .items-text h2 {
 padding-bottom: 28px;
 padding-top: 75px;
 position: relative;
}

#wrapper-work ul li .items-text h2:before {
 content: "";
 position: absolute;
 left: 0;
 bottom: 0;
 width: 75px;
 height: 3px;
 background: #fff;
}

#wrapper-work ul li .items-text p {
 padding-top: 30px;
 font-size: 16px;
 line-height: 27px;
 font-weight: 300;
 padding-right: 80px;
}

#features-work {
 padding-top: 50px;
 padding-bottom: 75px;
}

#features-work .block ul li {
 width: 19%;
 text-align: center;
 display: inline-block;
 padding: 40px 0px;
}

#contact-form {
 padding-top: 70px;
 padding-bottom: 35px;
}

#contact-form .block form .form-group {
 padding-bottom: 15px;
 margin: 0px;
}

#contact-form .block form .form-group .form-control {
 background: #F6F8FA;
 height: 60px;
 border: 1px solid #EEF2F6;
 box-shadow: none;
 width: 100%;
}

#contact-form .block form .form-group-2 {
 padding-bottom: 15px;
 margin: 0px;
}

#contact-form .block form .form-group-2 textarea {
 background: #F6F8FA;
 height: 135px;
 border: 1px solid #EEF2F6;
 box-shadow: none;
 width: 100%;
}

#contact-form .block button {
 width: 100%;
 height: 60px;
 background: #47424C;
 border: none;
 color: #fff;
 font-family: 'Open Sans', sans-serif;
 font-size: 18px;
}

.address-block li {
 margin-bottom: 20px;
}

.address-block li i {
 margin-right: 15px;
 font-size: 20px;
 width: 20px;
}

.social-icons {
 margin-top: 40px;
}

.social-icons li {
 display: inline-block;
 margin: 0 6px;
}

.social-icons a {
 display: inline-block;
}

.social-icons i {
 color: #2C2C2C;
 margin-right: 25px;
 font-size: 25px;
}

.google-map {
 position: relative;
}

.google-map #map {
 width: 100%;
 height: 300px;
 background-color: #ff432e;
}

#contact-box {
 padding-top: 35px;
 padding-bottom: 58px;
}

#contact-box .block img {
 width: 100%;
}

#contact-box .block h2 {
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 color: #000;
 font-size: 28px;
 padding-bottom: 30px;
}

#contact-box .block p {
 color: #5C5C5C;
 display: block;
}

#features-contact {
 padding-top: 50px;
 padding-bottom: 75px;
}

#features-contact .block ul li {
 width: 19%;
 text-align: center;
 display: inline-block;
 padding: 40px 0px;
}

.blog-post {
 margin-bottom: 50px;
}

.blog-post img {
 margin-bottom: 15px;
}

.blog-post p {
 margin: 15px 0 20px;
}

.post-title {
 color: #655E7A;
 font-size: 25px;
 font-weight: 600;
 display: block;
 margin-bottom: 10px;
}

.heading {
 padding-bottom: 60px;
 text-align: center;
}

.heading h2 {
 color: #000;
 font-size: 30px;
 line-height: 40px;
 font-weight: 400;
}

.heading p {
 font-size: 16px;
 line-height: 40px;
 color: #292929;
 font-weight: 300;
}

footer {
 background: #F5F5F5;
 text-align: center;
 padding-top: 48px;
 padding-bottom: 55px;
}

footer p {
 font-size: 13px;
 line-height: 25px;
 color: #919191;
}

footer a {
 color: #595959;
}

footer .footer-manu {
 padding-bottom: 25px;
}

footer .footer-manu ul {
 margin: 0px;
 padding: 0px;
}

footer .footer-manu ul li {
 display: inline-block;
 padding: 0px 20px;
}

footer .footer-manu ul li a {
 display: inline-block;
 color: #494949;
}

footer .footer-manu ul li a:hover {
 color: #000;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

 #wrapper {
   text-align: center;
 }
 #wrapper .block img {
   padding-top: 100px;
   width: 50%;
 }

 #content {
   text-align: center;
 }
 #content .block {
   padding-bottom: 100px;
 }

 #features {
   text-align: center;
 }

 footer .navbar {
   margin-bottom: 0px;
   border: 0px;
   min-height: 40px;
 }
 footer .navbar-default {
   border: 0px;
   width: 68%;
 }
 footer .navbar-default .navbar-nav li a {
   color: #494949;
   padding: 10px 10px;
   font-size: 15px;
 }
 footer .navbar-default .navbar-nav li a:hover {
   color: #000;
 }

 #slider-work .block h1 {
   font-size: 28px;
 }
 #slider-work .block p {
   font-size: 15px;
 }

 #portfolio-work .block .portfolio-manu {
   padding-left: 0px;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading {
   padding: 5px 0 5px 13px;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading h2 {
   font-size: 20px;
   line-height: 25px;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading p {
   font-size: 11px;
   line-height: 20px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay {
   padding-left: 15px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay h2 {
   padding-top: 30px;
   padding-bottom: 15px;
   font-size: 20px;
   line-height: 25px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay p {
   font-size: 11px;
   line-height: 20px;
   padding-top: 15px;
 }

 #wrapper-work ul li .items-text {
   padding-top: 0;
   padding-left: 25px;
 }
 #wrapper-work ul li .items-text h2 {
   padding-bottom: 10px;
   padding-top: 40px;
 }
 #wrapper-work ul li .items-text p {
   font-size: 14px;
   line-height: 20px;
   padding-right: 30px;
 }

 #features-work .block ul li {
   width: 49%;
 }

 #wrapper-contact .block {
   padding-bottom: 50px;
 }
 #features-contact .block ul li {
   width: 49%;
 }
}

@media only screen and (max-width: 767px) {
 .heading {
   padding-left: 0px;
 }
 h2 {
   font-size: 18px;
 }
 p {
   font-size: 13px;
 }
 header .navbar-default .navbar-toggle {
   margin-top: 20px;
   margin-bottom: 20px;
 }
 #slider {
   padding-top: 90px;
   padding-bottom: 100px;
 }
 #slider .block {
   padding-left: 0px;
 }
 #slider .block h1 {
   font-size: 20px;
 }
 #slider .block p {
   font-size: 13px;
 }

 #wrapper {
   text-align: center;
   padding-top: 70px;
   padding-bottom: 100px;
 }
 #wrapper .block img {
   padding-top: 100px;
   padding-left: 0px;
   width: 100%;
 }

 #service {
   padding-top: 100px;
 }
 #service .thumbnail {
   padding-bottom: 70px;
 }

 #call-to-action p {
   padding: 0px 0px 40px;
 }
 #call-to-action .btn {
   padding: 10px 20px;
   font-size: 15px;
 }

 #content {
   text-align: center;
   padding-top: 70px;
 }
 #content .block {
   padding-bottom: 100px;
 }
 #content .block h2 {
   padding-top: 0px;
 }
 #content .block-bottom {
   padding: 0px;
 }
 #content .block-bottom .item-img {
   padding-left: 0px;
 }

 #features .features-img {
   text-align: center;
 }

 #slider-work {
   padding-top: 100px;
   padding-bottom: 100px;
 }
 #slider-work .block {
   padding-left: 0px;
 }
 #slider-work .block h1 {
   font-size: 20px;
 }
 #slider-work .block p {
   font-size: 11px;
   line-height: 25px;
 }

 #portfolio-work .block .portfolio-manu {
   padding-left: 0px;
   text-align: center;
 }
 #portfolio-work .block .portfolio-manu ul li {
   padding: 0 8px;
 }
 #portfolio-work .block .portfolio-contant ul li {
   width: 100%;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading {
   padding: 5px 0 5px 13px;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading h2 {
   font-size: 20px;
   line-height: 25px;
 }
 #portfolio-work .block .portfolio-contant ul li a .img-heading p {
   font-size: 11px;
   line-height: 20px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay {
   padding-left: 15px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay h2 {
   padding-top: 65px;
   padding-bottom: 15px;
   font-size: 20px;
   line-height: 25px;
 }
 #portfolio-work .block .portfolio-contant ul li a .overlay p {
   font-size: 11px;
   line-height: 20px;
   padding-top: 15px;
   padding-right: 5px;
 }

 #wrapper-work ul li {
   float: none;
   width: 100%;
 }
 #wrapper-work ul li .items-text {
   padding-left: 15px;
   padding-top: 30px;
 }
 #wrapper-work ul li .items-text h2 {
   padding-top: 10px;
   padding-bottom: 15px;
   font-size: 20px;
   line-height: 25px;
 }
 #wrapper-work ul li .items-text p {
   font-size: 11px;
   line-height: 20px;
   padding-top: 15px;
 }

 #features-work .block ul li {
   display: block;
   width: 100%;
 }

 #slider-contact {
   padding-top: 100px;
   padding-bottom: 100px;
 }
 #slider-contact .block {
   padding-left: 0px;
 }
 #slider-contact .block h1 {
   font-size: 20px;
 }
 #slider-contact .block p {
   font-size: 11px;
   line-height: 25px;
 }


 #wrapper-contact .block {
   padding-bottom: 50px;
 }
 #wrapper-contact .block .location p {
   width: 100%;
 }
 #wrapper-contact .block .social-media-icon a i {
   padding-top: 30px;
 }

 #features-contact .block ul li {
   display: block;
   width: 100%;
 }
`;

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickmakuch/Documents/Code/rosies-ms-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ionicons/lib/IosChatbubbles":
/*!****************************************************!*\
  !*** external "react-ionicons/lib/IosChatbubbles" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/IosChatbubbles");

/***/ }),

/***/ "react-ionicons/lib/IosContacts":
/*!*************************************************!*\
  !*** external "react-ionicons/lib/IosContacts" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/IosContacts");

/***/ }),

/***/ "react-ionicons/lib/IosFingerPrint":
/*!****************************************************!*\
  !*** external "react-ionicons/lib/IosFingerPrint" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/IosFingerPrint");

/***/ }),

/***/ "react-ionicons/lib/IosSchool":
/*!***********************************************!*\
  !*** external "react-ionicons/lib/IosSchool" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/IosSchool");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map