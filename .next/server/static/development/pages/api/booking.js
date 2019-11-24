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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/booking.js":
/*!******************************!*\
  !*** ./pages/api/booking.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sgMail = __webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail");

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});
/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  sgMail.setApiKey("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");
  const {
    email,
    name,
    phone,
    radioValue,
    radioLabel,
    cleanerMessage,
    startYear,
    startMonth,
    startDay,
    startTime,
    optionsAddOns3,
    labelsAddOns3,
    pets,
    attendance,
    unit,
    address,
    buzzer
  } = req.body;
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let grandTotalArr = [];
  let sumOptionsAddOns3 = optionsAddOns3.reduce((a, b) => a + b, 0);
  grandTotalArr.push(sumOptionsAddOns3);
  let reducedArr = grandTotalArr.reduce((a, b) => a + b, 0);
  let grandTotalSumHST = formatter.format(reducedArr * 1.13 + radioLabel * 1.13);
  const contentTo = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From ${name}`,
    text: cleanerMessage,
    html: `
    <h1>New Booking</h1>
        <h2>Date and time</h2>
        <p>${month[startMonth]} ${startDay}, ${startYear} at ${startTime}</p>
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
        <h3>Phone</h3>
        <p>${phone}</p>
        <h3>Are there pets in the house?</h3>
        <p>${pets}</p>
        <h3>Will the client be home?</h3>
        <p>${attendance}</p>
        <h3>Address</h3>
        <p>${address}</p>
        <h3>Unit Number</h3>
        <p>${unit}</p>
        <h3>Buzzer</h3>
        <p>${buzzer}</p>
        <h3>Cleaner message</h3>
        <p>${cleanerMessage}</p>

        <h3>Selected plan:</h3>
        <p>${radioValue}</p>

        <h3>Add Ons:</h3>
        ${labelsAddOns3[0] ? `<p>${labelsAddOns3[0]}</p>` : ""}
        ${labelsAddOns3[1] ? `<p>${labelsAddOns3[1]}</p>` : ""}
        ${labelsAddOns3[2] ? `<p>${labelsAddOns3[2]}</p>` : ""}
        ${labelsAddOns3[3] ? `<p>${labelsAddOns3[3]}</p>` : ""}
        ${labelsAddOns3[4] ? `<p>${labelsAddOns3[4]}</p>` : ""}
        ${labelsAddOns3[5] ? `<p>${labelsAddOns3[5]}</p>` : ""}


        <h3>Grand Total</h3>
        <p>${grandTotalSumHST}</p>`
  };
  const contentFrom = {
    to: email,
    from: "rosiesmaidservice@gmail.com",
    subject: `Rosie's Maid Service - Appointment Booking`,
    html: `
    <h1>Hi ${name}, thanks for booking an appointment with Rosie's Maid Service!</h1>
    <p>We will contact you in the next 2 hours to confirm your appointment (unless we are experiencing periods of high traffic</p>
    <br /><h2>You have selected the following date/time and cleaning package:</h2>

        <h3>Date and time</h3>
        <p>${month[startMonth]} ${startDay}, ${startYear}  at ${startTime}</p>

        <h3>Selected plan:</h3>
        <p>${radioValue}</p>

        <h3>Add Ons:</h3>
        ${labelsAddOns3[0] ? `<p>${labelsAddOns3[0]}</p>` : ""}
        ${labelsAddOns3[1] ? `<p>${labelsAddOns3[1]}</p>` : ""}
        ${labelsAddOns3[2] ? `<p>${labelsAddOns3[2]}</p>` : ""}
        ${labelsAddOns3[3] ? `<p>${labelsAddOns3[3]}</p>` : ""}
        ${labelsAddOns3[4] ? `<p>${labelsAddOns3[4]}</p>` : ""}
        ${labelsAddOns3[5] ? `<p>${labelsAddOns3[5]}</p>` : ""}

        <h3>Grand Total</h3>
        <p>${grandTotalSumHST}</p>
        
        <h3>Contact us if you have any questions or concers</h3>
        <p>(437) 777-6243</p>`
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

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/api/booking.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickmakuch/Documents/Code/rosies-ms-nextjs/pages/api/booking.js */"./pages/api/booking.js");


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
//# sourceMappingURL=booking.js.map