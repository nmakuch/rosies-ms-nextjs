import { css } from "@emotion/core";

export const appStyles = css`
.checkbox-container {
  box-sizing: border-box;
  text-align:center;
}

.checkbox-label {
  display: block;
  position: relative;
  margin-right: 40px;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  height: 24px;
  width: auto;
  clear: both;
}

.checkbox-label input {
  position: absolute;
  cursor: pointer;
  display: none;
}

.checkbox-label .checkbox-custom {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 35px;
  width: 35px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  border: 2px solid #000;
}

.checkbox-label .checkbox-custom.circular {
  border-radius: 50%;
}

.checkbox-label input:checked ~ .checkbox-custom.circular {
  border-radius: 50%;
}

.checkbox-label input:checked ~ .checkbox-custom.circular::after {
  opacity:1;
  left: 7px;
  top: 7px;
  width: 17px;
  height: 17px;
  background-color: black;
  border-radius: 50%;
  }


.checkbox-label input:checked ~ .checkbox-custom {
  background-color: #FFFFFF;
  border-radius: 5px;
  -webkit-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  opacity:1;
  border: 2px solid #000;
}


.checkbox-label .checkbox-custom::after {
  position: absolute;
  content: "";
  left: 12px;
  top: 6px;
  width: 8px;
  height: 16px;
  border-radius: 5px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  opacity:0;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.1s ease-out;
  -moz-transition: all 0.1s ease-out;
  -ms-transition: all 0.1s ease-out;
  -o-transition: all 0.1s ease-out;
}


.checkbox-label input:checked ~ .checkbox-custom::after {
-webkit-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
opacity:1;
left: 12px;
top: 6px;
width: 8px;
height: 16px;
border: solid #000;
border-width: 0 3px 3px 0;
background-color: transparent;
border-radius: 0;
}


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
 font-size: 36px;
 font-weight: 600;
 margin-bottom: 15px;
}

.section-title p {
 color: #666;
 font-size: 16px;

 @media only screen and (max-width: 767px) {
  font-size: 13px;
 }
 
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
 border: 3px solid #000;
 color: white;
 background: #000;
 font-size: 16px;
 font-weight: 600;
 text-shadow: none;
}

.btn-solid-border:hover {
 border: 3px solid #444;
 color: #fff;
 background: #444;
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
 background-position: 0% 0%;
 padding: 125px 0 100px 0;
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
 background: white;
 opacity: 0.5;
}

#slider .block {
 color: #E3E3E4;
}

#slider .block h1 {
 font-family: 'Roboto', sans-serif;
 font-size: 45px;
 line-height: 60px;
 letter-spacing: 3px;
 padding-bottom: 50px;
 margin: 0; 
 color: black;
 text-shadow: 0px 0px 10px rgba(255,255,255,1);
}

#slider .block p {
 font-size: 20px;
 line-height: 40px;
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
 letter-spacing: 3px;
 margin-bottom: 60px;
 color: black;
 text-shadow: 0px 0px 20px rgba(255,255,255,1), 0px 0px 20px rgba(255,255,255,1);
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
 padding: 100px 25px 125px 25px;
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
  background: black;
  z-index: 0;
  opacity: 0.55;
}

#service .service-item {
 padding-right: 15px;
 margin-bottom: 100px;
}

#service .service-item a {
  color: #fff;
  font-size: 16px;
  padding: 17px 35px;
  border: 3px solid #000;
  background: #000;
  font-size: 16px;
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
  background: #444;

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
 padding-top: 50px;
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
 padding: 100px 25px;
 position: relative;
 text-align: center;
 color: #fff;
 text-shadow: 0px 0px 35px rgba(255,255,255,1), 0px 0px 35px rgba(255,255,255,1);
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
 background: #fff;
 opacity: 0.7;
}

#call-to-action h2 {
 padding-bottom: 20px;
 line-height: 45px;
 font-weight: 700;
 margin: 0;
 font-size: 30px;
 color: #000;
}

#call-to-action p {
 color: #000;
 font-size: 16px;
 line-height: 28px;
 margin-bottom: 50px;
 text-shadow: 0px 0px 5px rgba(255,255,255,1), 0px 0px 5px rgba(255,255,255,1),0px 0px 5px rgba(255,255,255,1);
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
  background: white;
  opacity: 0.4;
}

#global-header .block {
 color: black;
 margin: 0 auto;
 padding-left: 90px;
 text-align: center;
}

#global-header .block h1 {
 font-weight: 600;
 font-size: 50px;
 letter-spacing: 3px;
 padding-bottom: 15px;
 margin-top: 0;
 text-shadow: 0px 0px 60px rgba(255,255,255,1), 0px 0px 60px rgba(255,255,255,1);
 text-transform: uppercase;
}

#global-header .block p {
 font-size: 23px;
 line-height: 40px;
 font-weight: 400;
 letter-spacing: 1px;
 word-spacing: 3px;
 text-shadow: 0px 0px 30px rgba(255,255,255,1), 0px 0px 30px rgba(255,255,255,1);
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

#contact-form, #service-form {
 padding-top: 70px;
 padding-bottom: 35px;
}

#contact-form .block form .form-group, #service-form .block form .form-group {
 padding-bottom: 15px;
 margin: 0px;
}

#contact-form .block form .form-group .form-control, #service-form .block form .form-group .form-control {
 background: #F6F8FA;
 height: 60px;
 border: 1px solid #EEF2F6;
 box-shadow: none;
 width: 100%;
}

#contact-form .block form .form-group-2, #service-form .block form .form-group-2 {
 padding-bottom: 15px;
 margin: 0px;
}

#contact-form .block form .form-group-2 textarea, #service-form .block form .form-group-2 textarea {
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
 color: #007bff;
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
   color: #007bff;
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
  #global-header .block h1 {
    font-size: 45px;
    line-height: 60px;
    margin-bottom: 0;
  }

  #global-header .block p {
    font-size: 16px;
  }
 .heading {
   padding-left: 0px;
 }
 h2 {
   font-size: 24px;
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
   line-height: 60px;
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

 #service .service-item p {
  font-size: 13px;
  line-height: 24px;
 }

 #call-to-action p {
   padding: 0px 0px 40px;
   font-size: 14px;
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

 @media only screen and (max-width: 510px) {
   #slider, 
   .service-home, 
   #call-to-action, 
   #feature, 
   #global-header {
      background-attachment: scroll;
   }

   #intro .block h2 {
    font-size: 28px;
   }

   .section-title h2 {
    font-size: 28px;
   }
 }
`;
