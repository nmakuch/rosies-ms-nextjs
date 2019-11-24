module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sgMail = __webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail");

/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  sgMail.setApiKey("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");
  const {
    email,
    message,
    name,
    phone
  } = req.body;
  const contentTo = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Contact form submission from ${name} - ${email}`,
    text: message,
    html: `<h1>New contact form submission</h1><br />
    <h2>Personal details</h2>

    <table>
    <tr>
      <td><h3>Name</h3></td>
      <td><p>${name}</p></td>
    </tr>
    <tr>
    <td><h3>Email</h3></td>
    <td><p>${email}</p></td>
    </tr>
    <tr>
    <td><h3>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
    <td><p>${phone}</p></td>
</tr>
  </table>
  <br />
    
    <h3>User's message</h3><p>${message}</p>`
  };
  const contentFrom = {
    to: email,
    from: "rosiesmaidservice@gmail.com",
    subject: `Rosie's Maid Service - Contact Us`,
    html: `
    <h1>Hi ${name}! Thanks for taking interest in Rosie's Maid Service</h1>
    <br /><h2>We have recieved your message and will get back to you shortly :)</h2>
    <p>It usually takes us 2 hours to get back to clients (unless we are experiencing periods of high traffic).</p>

    <h2>You can view your submission below</h2>
    
    <h3>Personal details</h3>

    <table>
    <tr>
      <td><h3>Name</h3></td>
      <td><p>${name}</p></td>
    </tr>
    <tr>
    <td><h3>Email</h3></td>
    <td><p>${email}</p></td>
    </tr>
    <tr>
    <td><h3>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
    <td><p>${phone}</p></td>
</tr>
  </table>
  <br />
    
    <h3>Your message</h3><p>${message}</p>
    `
  };

  try {
    await sgMail.send(contentTo);
    await sgMail.send(contentFrom);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
});

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/api/send.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickmakuch/Documents/Code/rosies-ms-nextjs/pages/api/send.js */"./pages/api/send.js");


/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ })

/******/ });
//# sourceMappingURL=send.js.map