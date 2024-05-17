/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.react.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Nabcellent <nabcellent.dev@gmail.com@wpquark.com>
 * @version 2.1.2
 * @link https://github.com/Red-Beard7/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2021 Nabcellent
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom")):0}(window,(function(e,t,n,r){return a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=(r=n.n(a),a=n(2),n.n(a));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};for(var n,r={},o=Object.keys(e),a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){e.prototype=Object.create(t.prototype),l(e.prototype.constructor=e,t)}function p(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var f=n(3),d=n.n(f),h=o.a.createContext(null),y="unmounted",m="exited",g="entering",b="entered",v="exiting";function P(){}function C(e,t){return e&&t&&t.split(" ").forEach((function(t){var n;n=t,(t=e).classList?t.classList.remove(n):"string"==typeof t.className?t.className=p(t.className,n):t.setAttribute("class",p(t.className&&t.className.baseVal||"",n))}))}(n=function(e){function t(t,n){var r,o=e.call(this,t,n)||this;n=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?n?(r=m,o.appearStatus=g):r=b:r=t.unmountOnExit||t.mountOnEnter?y:m,o.state={status:r},o.nextCallback=null,o}u(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===y?{status:m}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;e!==this.props&&(e=this.state.status,this.props.in?e!==g&&e!==b&&(t=g):e!==g&&e!==b||(t=v)),this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n=this.props.timeout,r=e=t=n;return null!=n&&"number"!=typeof n&&(r=n.exit,e=n.enter,t=void 0!==n.appear?n.appear:e),{exit:r,enter:e,appear:t}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===g?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===m&&this.setState({status:y})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=(i=this.props.nodeRef?[r]:[d.a.findDOMNode(this),r])[0],a=i[1],i=this.getTimeouts(),s=r?i.appear:i.enter;e||n?(this.props.onEnter(o,a),this.safeSetState({status:g},(function(){t.props.onEntering(o,a),t.onTransitionEnd(s,(function(){t.safeSetState({status:b},(function(){t.props.onEntered(o,a)}))}))}))):this.safeSetState({status:b},(function(){t.props.onEntered(o)}))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:d.a.findDOMNode(this);t?(this.props.onExit(r),this.safeSetState({status:v},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:m},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:m},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:d.a.findDOMNode(this);t=null==e&&!this.props.addEndListener;n&&!t?(this.props.addEndListener&&(n=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],this.props.addEndListener(n[0],n[1])),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===y)return null;var t=(n=this.props).children,n=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,c(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(h.Provider,{value:null},"function"==typeof t?t(e,n):o.a.cloneElement(o.a.Children.only(t),n))},t}(o.a.Component)).contextType=h,n.propTypes={},n.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P},n.UNMOUNTED=y,n.EXITED=m,n.ENTERING=g,n.ENTERED=b,n.EXITING=v;var E=n;(n=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=(o=t.resolveArguments(e,n))[0],o=o[1];t.removeClasses(r,"exit"),t.addClass(r,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=(o=t.resolveArguments(e,n))[0],o=o[1];t.addClass(r,o?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=(o=t.resolveArguments(e,n))[0],o=o[1]?"appear":"enter";t.removeClasses(r,o),t.addClass(r,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}u(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){var n,r,o;r=t,(n=e).classList?n.classList.add(r):(o=r,((t=n).classList?o&&t.classList.contains(o):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+o+" "))||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)))}))}(e,r))},n.removeClasses=function(e,t){var n=(o=this.appliedClasses[t]).base,r=o.active,o=o.done;this.appliedClasses[t]={},n&&C(e,n),r&&C(e,r),o&&C(e,o)},n.render=function(){var e=((e=this.props).classNames,c(e,["classNames"]));return o.a.createElement(E,s({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component)).defaultProps={classNames:""},n.propTypes={};var O=n;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(r,o.a.PureComponent);var e,t,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,t?(n=j(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(r);function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return N(_(e=n.call.apply(n,[this].concat(a))),"handleClick",(function(){e.props.onClick()})),N(_(e),"handleKeyDown",(function(t){32!==t.keyCode&&13!==t.keyCode||e.props.onClick()})),N(_(e),"handleDelete",(function(t,n){t.stopPropagation(),e.props.handleDeleteValue(n)})),N(_(e),"handleDeleteKeyboard",(function(t,n){32!==t.keyCode&&13!==t.keyCode||e.props.handleDeleteValue(n)})),N(_(e),"renderEmptyIcon",(function(){return o.a.createElement("span",{className:"rfipbtn__icon--empty"},e.props.noSelectedPlaceholder)})),e}return e=r,(t=[{key:"renderIcon",value:function(e){var t=this;return""===e||null==e?this.renderEmptyIcon():o.a.createElement("span",{className:"rfipbtn__icon",key:e},o.a.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),o.a.createElement("span",{className:"rfipbtn__del",onClick:function(n){return t.handleDelete(n,e)},onKeyDown:function(n){return t.handleDeleteKeyboard(n,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map((function(t){return e.renderIcon(t)})):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=i()("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),n=i()(this.props.className);return o.a.createElement("div",S({className:n,ref:this.props.domRef},e),o.a.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),o.a.createElement("div",{className:t},o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&R(e.prototype,t),r}(),N(n,"propTypes",{className:r.a.string.isRequired,isOpen:r.a.bool.isRequired,onClick:r.a.func.isRequired,domRef:r.a.object.isRequired,isMulti:r.a.bool.isRequired,value:r.a.oneOfType([r.a.number,r.a.string,r.a.arrayOf(r.a.oneOfType([r.a.number,r.a.string]))]).isRequired,renderIcon:r.a.func.isRequired,handleDeleteValue:r.a.func.isRequired,noSelectedPlaceholder:r.a.string.isRequired});var k,T,D,I=n;function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}k=n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(r,o.a.PureComponent);var e,t,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);return function(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,t?(n=V(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n.apply(this,arguments)}return e=r,(t=[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipcategory"},o.a.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map((function(e,t){return o.a.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)}))),o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&q(e.prototype,t),r}(),T="propTypes",D={handleCategory:r.a.func.isRequired,value:r.a.number.isRequired,categories:r.a.arrayOf(r.a.string).isRequired},T in k?Object.defineProperty(k,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):k[T]=D;var B=n;(n=function(e){return o.a.createElement("div",{className:"rfipsearch"},o.a.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))}).propTypes={handleSearch:r.a.func.isRequired,value:r.a.string.isRequired,placeholder:r.a.string.isRequired};var L=n;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){var r,o;r=e,t=n[o=t],o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft;e=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+e,left:t.left+n}}function X(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}}function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(a,o.a.PureComponent);var e,t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);return function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}(this,t?(n=ee(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),te(Z(t=r.call(this,e)),"handleChangePage",(function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=t.props.currentPage,o=t.state.totalPage;null!==n?"next"===n?r+=1:--r:r=parseInt(e.target.value,10)-1,o=(r=o-1<(r=r<0?0:r)?o-1:r)+1,null===n&&Number.isNaN(r)&&(r=0,o=""),t.setState({viewPage:o}),t.props.handleChangePage(r)})),te(Z(t),"handlePageKeyBoard",(function(e,n){13!==e.keyCode&&32!==e.keyCode||t.handleChangePage({},n)})),te(Z(t),"handleChangeValue",(function(e){t.props.handleChangeValue(e)})),te(Z(t),"handleValueKeyboard",(function(e,n){13!==e.keyCode&&32!==e.keyCode||t.handleChangeValue(n)})),t.state={viewPage:t.props.currentPage+1},t}return e=a,n=[{key:"getDerivedStateFromProps",value:function(e,t){var n=a.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),r=a.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=(i=a.getActiveIcons(n,r,e.currentSearch)).activeIcons,i=(n=i.activeTitles,r=e.currentPage,e.iconsPerPage);i={iconView:a.getCurrentViewIcons(o,i,r),titleView:a.getCurrentViewIcons(n,i,r),totalPage:Math.ceil(o.length/i)};return""!==t.viewPage&&(i.viewPage=e.currentPage+1),i}},{key:"getActiveIcons",value:function(e,t,n){var r=G(e);e=G(t);if(""===n||null===n)return{activeIcons:r,activeTitles:e};var o=[],a=[];return r.forEach((function(e,r){!function(e,t){e=e.toLowerCase();var n=(t=t.toLowerCase()).length,r=e.length;if(!(n<r)){if(r===n)return e===t;e:for(var o=0,a=0;o<r;o++){for(var i=e.codePointAt(o);a<n;)if(t.codePointAt(a++)===i)continue e;return}return 1}}(n,t[r])||(o.includes(e)||o.push(e),a.includes(t[r])||a.push(t[r]))})),{activeIcons:o,activeTitles:a}}},{key:"getCategoryFilteredState",value:function(e,t,n){var r=null,o=null===(o=n)?"null":"object"!==F(o)||Array.isArray(o)?Array.isArray(o)?"array":F(o):"object";if(Array.isArray(t)){if("object"!==o)throw new X(o,"object")}else if("array"!==o)throw new X(o,"array");return function(e,t){if(t=1<arguments.length&&void 0!==t?t:null,Array.isArray(e))return H(e);if(null!==t)return void 0!==e[t]?H(e[t]):[];var n=[],r=U({},e);return Object.keys(r).forEach((function(e){n=[].concat(H(n),H(r[e]))})),n}(n,r=0!==e&&Array.isArray(t)?t[e]||null:r)}},{key:"getCurrentViewIcons",value:function(e,t,n){return e.slice(n*t,(n+1)*t)}}],(t=[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=0<this.props.currentPage?o.a.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},o.a.createElement("i",{className:"fipicon-angle-left"}))):null,n=this.props.currentPage<this.state.totalPage-1?o.a.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},o.a.createElement("i",{className:"fipicon-angle-right"}))):null;return o.a.createElement("div",{className:"rfipicons__pager"},o.a.createElement("div",{className:"rfipicons__num"},o.a.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),o.a.createElement("span",{className:"rfipicons__sp"},"/"),o.a.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),o.a.createElement("div",{className:"rfipicons__arrow"},t,n))}},{key:"renderIconView",value:function(){var e=this;return 0<this.state.totalPage?this.state.iconView.map((function(t,n){var r=i()("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return o.a.createElement("span",{className:r,key:t,title:e.state.titleView[n]},o.a.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(n){return e.handleValueKeyboard(n,t)}},e.props.renderIcon(t)))})):o.a.createElement("span",{className:"rfipicons__icon--error"},o.a.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return o.a.createElement("div",{className:"rfipicons"},o.a.createElement("div",{className:"rfipicons__selector"},this.renderIconView()),this.renderPager())}}])&&J(e.prototype,t),n&&J(e,n),a}(),te(n,"propTypes",{categories:r.a.arrayOf(r.a.string),currentCategory:r.a.number,isMulti:r.a.bool.isRequired,icons:r.a.oneOfType([r.a.arrayOf(r.a.string),r.a.arrayOf(r.a.number),r.a.objectOf(r.a.oneOfType([r.a.arrayOf(r.a.number),r.a.arrayOf(r.a.string)]))]).isRequired,search:r.a.oneOfType([r.a.objectOf(r.a.arrayOf(r.a.string)),r.a.arrayOf(r.a.string)]),value:r.a.oneOfType([r.a.number,r.a.string,r.a.arrayOf(r.a.oneOfType([r.a.number,r.a.string]))]).isRequired,currentSearch:r.a.string.isRequired,handleChangeValue:r.a.func.isRequired,currentPage:r.a.number.isRequired,iconsPerPage:r.a.number.isRequired,handleChangePage:r.a.func.isRequired,renderIcon:r.a.func.isRequired,noIconPlaceholder:r.a.string.isRequired}),te(n,"defaultProps",{categories:null,currentCategory:null,search:null});var ne=n;function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(a,o.a.PureComponent);var e,t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=le(e);return function(e,t){if(t&&("object"===re(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ce(e)}(this,t?(n=le(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),ue(ce(t=r.call(this,e)),"handleCategory",(function(e){e=parseInt(e.target.value,10),Number.isNaN(e)&&(e=0),t.props.handleChangeCategory(e),t.props.handleChangePage(0)})),ue(ce(t),"handleSearch",(function(e){e=e.target.value,t.props.handleChangeSearch(e)})),t.state={},t}return e=a,n=[{key:"getDerivedStateFromProps",value:function(e){var t;return{categories:t=null!==(t=(t=e.icons,Array.isArray(t)?null:Object.keys(t)))?[e.allCatPlaceholder].concat(oe(t)):t,searchString:e.currentSearch}}}],(t=[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?o.a.createElement(L,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?o.a.createElement(B,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,o.a.createElement(ne,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}])&&ie(e.prototype,t),n&&ie(e,n),a}(),ue(n,"propTypes",{isMulti:r.a.bool.isRequired,value:r.a.oneOfType([r.a.number,r.a.string,r.a.arrayOf(r.a.any)]).isRequired,currentCategory:r.a.number.isRequired,currentPage:r.a.number.isRequired,currentSearch:r.a.string.isRequired,icons:r.a.oneOfType([r.a.arrayOf(r.a.number),r.a.arrayOf(r.a.string),r.a.objectOf(r.a.oneOfType([r.a.arrayOf(r.a.number),r.a.arrayOf(r.a.string)]))]).isRequired,search:r.a.oneOfType([r.a.object,r.a.arrayOf(r.a.string)]),showCategory:r.a.bool.isRequired,showSearch:r.a.bool.isRequired,iconsPerPage:r.a.number.isRequired,allCatPlaceholder:r.a.string.isRequired,searchPlaceholder:r.a.string.isRequired,noIconPlaceholder:r.a.string.isRequired,renderIcon:r.a.func.isRequired,handleChangeValue:r.a.func.isRequired,handleChangeCategory:r.a.func.isRequired,handleChangePage:r.a.func.isRequired,handleChangeSearch:r.a.func.isRequired}),ue(n,"defaultProps",{search:null});var pe=n;function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(a,o.a.PureComponent);var e,t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=me(e);return function(e,t){if(t&&("object"===fe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ye(e)}(this,t?(n=me(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(a);function a(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),ge(ye(t=r.call(this,e)),"syncPortalPosition",(function(){t.resetPortalPosition(),t.fixWindowOverflow()})),ge(ye(t),"fixWindowOverflow",(function(){var e=t.props.domRef.current.offsetWidth,n=t.props.domRef.current.offsetHeight,r=(u=window).innerWidth,o=u.pageYOffset,a=document.documentElement.clientHeight,i=(p=$(t.props.domRef.current)).left,s=p.top,c=$("self"===t.state.appendRoot?t.props.domRef.current:t.state.appendRoot),l=t.props.btnRef.current,u=t.props.domRef.current,p=$(l);l=getComputedStyle(l),l=(parseInt(l.borderTop,10)||0)+(parseInt(l.borderBottom,10)||0);r-20<i+e&&((e=p.left+t.props.btnRef.current.offsetWidth-(e+c.left))+c.left<0&&(e=10-c.left),u.style.left="".concat(e,"px")),a<n+s-o&&0<p.top-n&&("self"===t.state.appendRoot?u.style.top="-".concat(n-l,"px"):u.style.top="".concat(p.top+l-n,"px"))})),t.state={},t.debouncedSyncPortalPosition=(n=t.syncPortalPosition,250,function(){var e=this,t=arguments;clearTimeout(o),o=setTimeout((function(){return n.apply(e,t)}),250)}),t}return e=a,n=[{key:"calculateAppendAndClass",value:function(e){var t="self";return{portalClasses:i()({"rfipdropdown--portal":!1!==e}),appendRoot:t=!1!==e?document.querySelector(e):t}}},{key:"getDerivedStateFromProps",value:function(e){return{appendRoot:(e=a.calculateAppendAndClass(e.appendRoot)).appendRoot,portalClasses:e.portalClasses}}}],(t=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=$(r=this.props.btnRef.current),n=$(this.state.appendRoot),r=r.offsetHeight;this.props.domRef.current.style.left="".concat(t.left-n.left,"px"),this.props.domRef.current.style.top="".concat(t.top+r,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=i()(this.props.className,this.state.portalClasses);e=o.a.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?e:Object(f.createPortal)(e,this.state.appendRoot)}}])&&de(e.prototype,t),n&&de(e,n),a}(),ge(n,"propTypes",{appendRoot:r.a.oneOfType([r.a.bool,r.a.string]),children:r.a.node.isRequired,domRef:r.a.object.isRequired,btnRef:r.a.object.isRequired,className:r.a.string.isRequired}),ge(n,"defaultProps",{appendRoot:!1});var be=n;function ve(e){return(ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e){return function(e){if(Array.isArray(e))return Ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ce(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=[];n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(a,o.a.PureComponent);var e,t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Se(e);return function(e,t){if(t&&("object"===ve(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return we(e)}(this,t?(n=Se(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments))}}(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),Re(we(t=r.call(this,e)),"handleOuterClick",(function(e){e=e.target,t.isClickWithin(e)||t.closeDropdown()})),Re(we(t),"handleEscapeKeyboard",(function(e){27===e.keyCode&&t.closeDropdown()})),Re(we(t),"isClickWithin",(function(e){return"fipicon-angle-left"===e.className||"fipicon-angle-right"===e.className||"rfipicons__label"===e.className||t.fipButtonRef.current.contains(e)||t.fipDropDownRef.current&&t.fipDropDownRef.current.contains(e)})),Re(we(t),"handleToggle",(function(){t.setState((function(e){return t.handleDropDown(!e.isOpen,!1)}))})),Re(we(t),"closeDropdown",(function(){t.handleDropDown(!1)})),Re(we(t),"handleDropDown",(function(e){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r={isOpen:e};return r.elemClass=a.getDerivedClassName("rfip",t.props.theme,t.props.isMulti,e),r.btnClass=a.getDerivedClassName("rfipbtn",t.props.theme,t.props.isMulti,e),r.ddClass=a.getDerivedClassName("rfipdropdown",t.props.theme,t.props.isMulti,e),n&&t.setState(r),r})),Re(we(t),"handleChangeValue",(function(e){var n;t.props.isMulti?(n=Pe(t.state.value)).includes(e)?(n=n.filter((function(t){return t!==e}))).length||(n=xe):n.push(e):n=e===t.state.value?"":e,t.setState({value:n,isOpen:!t.props.closeOnSelect}),t.props.onChange(n)})),Re(we(t),"handleDeleteValue",(function(e){var n=t.props.isMulti?t.state.value.filter((function(t){return t!==e})):a.getDerivedValue(n,t.props.isMulti);t.setState({value:n}),t.props.onChange(n)})),Re(we(t),"handleChangePage",(function(e){t.setState({currentPage:e})})),Re(we(t),"handleChangeCategory",(function(e){t.setState({currentCategory:e,currentPage:0})})),Re(we(t),"handleChangeSearch",(function(e){t.setState({currentSearch:e,currentPage:0})})),Re(we(t),"resetPortalStyle",(function(e){["maxHeight","paddingTop","paddingBottom"].forEach((function(t){e.style[t]=null}))})),Re(we(t),"handlePortalEnter",(function(e){var n=e.childNodes[0];t.resetPortalStyle(n),e=getComputedStyle(n),t.fipPortalComputedStyle={height:e.height,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach((function(e){n.style[e]="0px"}))})),Re(we(t),"handlePortalEntering",(function(e){(e=e.childNodes[0]).style.maxHeight=t.fipPortalComputedStyle.height,e.style.paddingTop=t.fipPortalComputedStyle.paddingTop,e.style.paddingBottom=t.fipPortalComputedStyle.paddingBottom})),Re(we(t),"handlePortalEntered",(function(e){e=e.childNodes[0],t.resetPortalStyle(e),t.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&e.querySelector(".rfipsearch__input").focus()})),Re(we(t),"handlePortalExit",(function(e){var n=e.childNodes[0];t.resetPortalStyle(n),e=getComputedStyle(n).height,n.style.maxHeight=e})),Re(we(t),"handlePortalExiting",(function(e){(e=e.childNodes[0]).style.maxHeight="0px",e.style.paddingTop="0px",e.style.paddingBottom="0px"})),Re(we(t),"renderIcon",(function(e){return"function"==typeof t.props.renderFunc?t.props.renderFunc(e):"class"===t.props.renderUsing?o.a.createElement("i",{className:e}):(e=Re({},t.props.renderUsing,t.props.convertHex?String.fromCodePoint(parseInt(e,10)):e),o.a.createElement("i",e))})),t.fipButtonRef=o.a.createRef(),t.fipDropDownRef=o.a.createRef(),t.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},t.fipPortalComputedStyle=null,t}return e=a,n=[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return n.elemClass=a.getDerivedClassName("rfip",e.theme,e.isMulti,t.isOpen),n.btnClass=a.getDerivedClassName("rfipbtn",e.theme,e.isMulti,t.isOpen),n.ddClass=a.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,t.isOpen),n.value=a.getDerivedValue(e.value,e.isMulti),e.showCategory||0===t.currentCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||""===t.currentSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,n,r){return i()(e,"".concat(e,"--").concat(t),Re({},"".concat(e,"--multi"),n),"".concat(e,"--").concat(r?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var n=e;return t?n=Array.isArray(e)?Pe(e):xe:"number"!=typeof e&&"string"!=typeof e&&(n=""),n}}],(t=[{key:"componentDidMount",value:function(){var e=this;["click"].forEach((function(t){document.addEventListener(t,e.handleOuterClick,!1)})),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach((function(t){document.removeEventListener(t,e.handleOuterClick,!1)})),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return o.a.createElement("div",{className:this.state.elemClass,ref:this.fipRef},o.a.createElement(I,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),o.a.createElement(O,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},o.a.createElement(be,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},o.a.createElement(pe,e))))}}])&&Ee(e.prototype,t),n&&Ee(e,n),a}();Re(n,"displayName","FontIconPicker"),Re(n,"propTypes",{icons:r.a.oneOfType([r.a.arrayOf(r.a.string),r.a.arrayOf(r.a.number),r.a.objectOf(r.a.oneOfType([r.a.arrayOf(r.a.number),r.a.arrayOf(r.a.string)]))]).isRequired,search:r.a.oneOfType([r.a.objectOf(r.a.arrayOf(r.a.string)),r.a.arrayOf(r.a.string)]),iconsPerPage:r.a.number,theme:r.a.string,onChange:r.a.func.isRequired,showCategory:r.a.bool,showSearch:r.a.bool,value:r.a.oneOfType([r.a.arrayOf(r.a.string),r.a.arrayOf(r.a.number),r.a.number,r.a.string]),isMulti:r.a.bool,renderUsing:r.a.string,convertHex:r.a.bool,renderFunc:r.a.func,appendTo:r.a.oneOfType([r.a.bool,r.a.string]),allCatPlaceholder:r.a.string,searchPlaceholder:r.a.string,noIconPlaceholder:r.a.string,noSelectedPlaceholder:r.a.string,closeOnSelect:r.a.bool}),Re(n,"defaultProps",{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}),t.default=n}],i={},o.m=a,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7).default;function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var a,i}));
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./src/block/mrs-button/Inspector.js":
/*!*******************************************!*\
  !*** ./src/block/mrs-button/Inspector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tabControls_tabControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabControls/tabControls */ "./src/components/tabControls/tabControls.js");
/* harmony import */ var _generalTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalTab */ "./src/block/mrs-button/generalTab.js");
/* harmony import */ var _styleTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleTab */ "./src/block/mrs-button/styleTab.js");
/* harmony import */ var _advancedTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advancedTab */ "./src/block/mrs-button/advancedTab.js");






const Inspector = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabControls_tabControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    GeneralTab: _generalTab__WEBPACK_IMPORTED_MODULE_3__["default"],
    StyleTab: _styleTab__WEBPACK_IMPORTED_MODULE_4__["default"],
    AdvancedTab: _advancedTab__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/block/mrs-button/advancedTab.js":
/*!*********************************************!*\
  !*** ./src/block/mrs-button/advancedTab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AdvancedTab = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Advanced Tab"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedTab);

/***/ }),

/***/ "./src/block/mrs-button/edit.js":
/*!**************************************!*\
  !*** ./src/block/mrs-button/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inspector */ "./src/block/mrs-button/Inspector.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/block/mrs-button/editor.scss");







let firstTimeLoad = true;
function Edit(props) {
  const {
    clientId,
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    uniqueId,
    enableIcon,
    buttonIconPosition,
    buttonIcon,
    buttonText,
    removeText,
    textAlignments,
    buttonLink,
    buttonLinkTarget,
    buttonLinkFollow
  } = attributes;
  const [onLoad, setOnLoad] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor');
  const isBlockReserved = () => {
    const blockClientsIds = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select)('core/block-editor').getClientIdsWithDescendants();
    const allUniqueIds = [];
    blockClientsIds.forEach(id => {
      if ('undefined' !== typeof getBlock(id).attributes.uniqueId) allUniqueIds.push(getBlock(id).attributes.uniqueId);
    });
    const set = new Set();
    if (firstTimeLoad) {
      firstTimeLoad = false;
      for (const item of allUniqueIds) {
        if (set.has(item)) {
          setOnLoad(true);
        }
        set.add(item);
      }
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    firstTimeLoad = true;
    setOnLoad(false);
  }, [isSelected]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setTimeout(() => {
      isBlockReserved();
    }, 500);
    if (!uniqueId && onLoad) {
      setAttributes({
        uniqueId: clientId
      });
      setOnLoad(false);
    }
  }, [onLoad]);
  const updateButtonText = newText => {
    setAttributes({
      buttonText: newText
    });
  };
  const icon = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `mrs-button-icon ${buttonIcon}`
    });
  };
  console.log(uniqueId);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: textAlignments,
    onChange: value => setAttributes({
      textAlignments: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'mrs-button',
    id: 'mrs-button'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: buttonLinkTarget,
    rel: buttonLinkFollow ? 'nofollow noopener' : 'follow noopener'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-button-content"
  }, 'beforeText' === buttonIconPosition && enableIcon && icon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: buttonText,
    onChange: updateButtonText,
    className: `${removeText ? 'mrs-text-hide' : ''}`,
    allowedFormats: ['core/bold', 'core/italic']
  }), 'afterText' === buttonIconPosition && enableIcon && icon())))));
}

/***/ }),

/***/ "./src/block/mrs-button/generalTab.js":
/*!********************************************!*\
  !*** ./src/block/mrs-button/generalTab.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_toggle_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/toggle/toggle */ "./src/components/toggle/toggle.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icon_picker_icon_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon-picker/icon-picker */ "./src/components/icon-picker/icon-picker.js");






const GeneralTab = ({
  attributes,
  setAttributes
}) => {
  const {
    enableIcon
  } = attributes;
  const [openTab, setOpenTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('general');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General'),
    opened: 'general' === openTab ? true : false,
    onToggle: () => 'general' === openTab ? setOpenTab('') : setOpenTab('general')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_toggle_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Icon'),
    attributes: attributes,
    setAttributes: setAttributes,
    attributesKey: 'enableIcon'
  }), enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icon_picker_icon_picker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon'),
    attributes: attributes,
    setAttributes: setAttributes,
    attributesKey: 'buttonIcon'
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralTab);

/***/ }),

/***/ "./src/block/mrs-button/index.js":
/*!***************************************!*\
  !*** ./src/block/mrs-button/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block/mrs-button/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block/mrs-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block/mrs-button/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block/mrs-button/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/block/mrs-button/save.js":
/*!**************************************!*\
  !*** ./src/block/mrs-button/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, 'Mrs Button – hello from the saved content!');
}

/***/ }),

/***/ "./src/block/mrs-button/styleTab.js":
/*!******************************************!*\
  !*** ./src/block/mrs-button/styleTab.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StyleTab = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Style Tab"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleTab);

/***/ }),

/***/ "./src/components/icon-picker/icon-lists.js":
/*!**************************************************!*\
  !*** ./src/components/icon-picker/icon-lists.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fontAwesome = {
  'Number': ['fa-solid fa-0 fa-fw', 'fa-solid fa-1 fa-fw', 'fa-solid fa-2 fa-fw', 'fa-solid fa-3 fa-fw', 'fa-solid fa-4 fa-fw', 'fa-solid fa-5 fa-fw', 'fa-solid fa-6 fa-fw', 'fa-solid fa-7 fa-fw', 'fa-solid fa-8 fa-fw', 'fa-solid fa-9 fa-fw'],
  Accessibility: ['fab fa-accessible-icon', 'fas fa-american-sign-language-interpreting', 'fas fa-assistive-listening-systems', 'fas fa-audio-description', 'fas fa-blind', 'fas fa-braille', 'fas fa-closed-captioning', 'far fa-closed-captioning', 'fas fa-deaf', 'fas fa-low-vision', 'fas fa-phone-volume', 'fas fa-question-circle', 'far fa-question-circle', 'fas fa-sign-language', 'fas fa-tty', 'fas fa-universal-access', 'fas fa-wheelchair'],
  'Social': ['fa-brands fa-facebook', 'fa-brands fa-facebook-f', 'fa-brands fa-square-facebook', 'fa-brands fa-twitter', 'fa-brands fa-square-twitter', 'fa-brands fa-instagram', 'fa-brands fa-square-instagram', 'fa-brands fa-linkedin', 'fa-brands fa-linkedin-in', 'fa-brands fa-line', 'fa-brands fa-github', 'fa-brands fa-wordpress', 'fa-brands fa-whatsapp', 'fa-brands fa-behance', 'fa-brands fa-free-code-camp', 'fa-solid fa-square-share-nodes', 'fa-brands fa-square-google-plus', 'fa-brands fa-google-plus-g', 'fa-brands fa-square-gitlab', 'fa-brands fa-pinterest-p'],
  Arrows: ['fas fa-angle-double-down', 'fas fa-angle-double-left', 'fas fa-angle-double-right', 'fas fa-angle-double-up', 'fas fa-angle-down', 'fas fa-angle-left', 'fas fa-angle-right', 'fas fa-angle-up', 'fas fa-arrow-alt-circle-down', 'far fa-arrow-alt-circle-down', 'fas fa-arrow-alt-circle-left', 'far fa-arrow-alt-circle-left', 'fas fa-arrow-alt-circle-right', 'far fa-arrow-alt-circle-right', 'fas fa-arrow-alt-circle-up', 'far fa-arrow-alt-circle-up', 'fas fa-arrow-circle-down', 'fas fa-arrow-circle-left', 'fas fa-arrow-circle-right', 'fas fa-arrow-circle-up', 'fas fa-arrow-down', 'fas fa-arrow-left', 'fas fa-arrow-right', 'fas fa-arrow-up', 'fas fa-arrows-alt', 'fas fa-arrows-alt-h', 'fas fa-arrows-alt-v', 'fas fa-caret-down', 'fas fa-caret-left', 'fas fa-caret-right', 'fas fa-caret-square-down', 'far fa-caret-square-down', 'fas fa-caret-square-left', 'far fa-caret-square-left', 'fas fa-caret-square-right', 'far fa-caret-square-right', 'fas fa-caret-square-up', 'far fa-caret-square-up', 'fas fa-caret-up', 'fas fa-cart-arrow-down', 'fas fa-chart-line', 'fas fa-chevron-circle-down', 'fas fa-chevron-circle-left', 'fas fa-chevron-circle-right', 'fas fa-chevron-circle-up', 'fas fa-chevron-down', 'fas fa-chevron-left', 'fas fa-chevron-right', 'fas fa-chevron-up', 'fas fa-cloud-download-alt', 'fas fa-cloud-upload-alt', 'fas fa-download', 'fas fa-exchange-alt', 'fas fa-expand-arrows-alt', 'fas fa-external-link-alt', 'fas fa-external-link-square-alt', 'fas fa-hand-point-down', 'far fa-hand-point-down', 'fas fa-hand-point-left', 'far fa-hand-point-left', 'fas fa-hand-point-right', 'far fa-hand-point-right', 'fas fa-hand-point-up', 'far fa-hand-point-up', 'fas fa-hand-pointer', 'far fa-hand-pointer', 'fas fa-history', 'fas fa-level-down-alt', 'fas fa-level-up-alt', 'fas fa-location-arrow', 'fas fa-long-arrow-alt-down', 'fas fa-long-arrow-alt-left', 'fas fa-long-arrow-alt-right', 'fas fa-long-arrow-alt-up', 'fas fa-mouse-pointer', 'fas fa-play', 'fas fa-random', 'fas fa-recycle', 'fas fa-redo', 'fas fa-redo-alt', 'fas fa-reply', 'fas fa-reply-all', 'fas fa-retweet', 'fas fa-share', 'fas fa-share-square', 'far fa-share-square', 'fas fa-sign-in-alt', 'fas fa-sign-out-alt', 'fas fa-sort', 'fas fa-sort-alpha-down', 'fas fa-sort-alpha-up', 'fas fa-sort-amount-down', 'fas fa-sort-amount-up', 'fas fa-sort-down', 'fas fa-sort-numeric-down', 'fas fa-sort-numeric-up', 'fas fa-sort-up', 'fas fa-sync', 'fas fa-sync-alt', 'fas fa-text-height', 'fas fa-text-width', 'fas fa-undo', 'fas fa-undo-alt', 'fas fa-upload'],
  'Audio & Video': ['fas fa-audio-description', 'fas fa-backward', 'fas fa-circle', 'far fa-circle', 'fas fa-closed-captioning', 'far fa-closed-captioning', 'fas fa-compress', 'fas fa-eject', 'fas fa-expand', 'fas fa-expand-arrows-alt', 'fas fa-fast-backward', 'fas fa-fast-forward', 'fas fa-file-audio', 'far fa-file-audio', 'fas fa-file-video', 'far fa-file-video', 'fas fa-film', 'fas fa-forward', 'fas fa-headphones', 'fas fa-microphone', 'fas fa-microphone-slash', 'fas fa-music', 'fas fa-pause', 'fas fa-pause-circle', 'far fa-pause-circle', 'fas fa-phone-volume', 'fas fa-play', 'fas fa-play-circle', 'far fa-play-circle', 'fas fa-podcast', 'fas fa-random', 'fas fa-redo', 'fas fa-redo-alt', 'fas fa-rss', 'fas fa-rss-square', 'fas fa-step-backward', 'fas fa-step-forward', 'fas fa-stop', 'fas fa-stop-circle', 'far fa-stop-circle', 'fas fa-sync', 'fas fa-sync-alt', 'fas fa-undo', 'fas fa-undo-alt', 'fas fa-video', 'fas fa-volume-down', 'fas fa-volume-off', 'fas fa-volume-up', 'fab fa-youtube'],
  Business: ['fas fa-address-book', 'far fa-address-book', 'fas fa-address-card', 'far fa-address-card', 'fas fa-archive', 'fas fa-balance-scale', 'fas fa-birthday-cake', 'fas fa-book', 'fas fa-briefcase', 'fas fa-building', 'far fa-building', 'fas fa-bullhorn', 'fas fa-bullseye', 'fas fa-calculator', 'fas fa-calendar', 'far fa-calendar', 'fas fa-calendar-alt', 'far fa-calendar-alt', 'fas fa-certificate', 'fas fa-chart-area', 'fas fa-chart-bar', 'far fa-chart-bar', 'fas fa-chart-line', 'fas fa-chart-pie', 'fas fa-clipboard', 'far fa-clipboard', 'fas fa-coffee', 'fas fa-columns', 'fas fa-compass', 'far fa-compass', 'fas fa-copy', 'far fa-copy', 'fas fa-copyright', 'far fa-copyright', 'fas fa-cut', 'fas fa-edit', 'far fa-edit', 'fas fa-envelope', 'far fa-envelope', 'fas fa-envelope-open', 'far fa-envelope-open', 'fas fa-envelope-square', 'fas fa-eraser', 'fas fa-fax', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-globe', 'fas fa-industry', 'fas fa-paperclip', 'fas fa-paste', 'fas fa-pen-square', 'fas fa-pencil-alt', 'fas fa-percent', 'fas fa-phone', 'fas fa-phone-square', 'fas fa-phone-volume', 'fas fa-registered', 'far fa-registered', 'fas fa-save', 'far fa-save', 'fas fa-sitemap', 'fas fa-sticky-note', 'far fa-sticky-note', 'fas fa-suitcase', 'fas fa-table', 'fas fa-tag', 'fas fa-tags', 'fas fa-tasks', 'fas fa-thumbtack', 'fas fa-trademark'],
  Chess: ['fas fa-chess', 'fas fa-chess-bishop', 'fas fa-chess-board', 'fas fa-chess-king', 'fas fa-chess-knight', 'fas fa-chess-pawn', 'fas fa-chess-queen', 'fas fa-chess-rook', 'fas fa-square-full'],
  Code: ['fas fa-archive', 'fas fa-barcode', 'fas fa-bath', 'fas fa-bug', 'fas fa-code', 'fas fa-code-branch', 'fas fa-coffee', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-file-code', 'far fa-file-code', 'fas fa-filter', 'fas fa-fire-extinguisher', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-keyboard', 'far fa-keyboard', 'fas fa-microchip', 'fas fa-qrcode', 'fas fa-shield-alt', 'fas fa-sitemap', 'fas fa-terminal', 'fas fa-user-secret', 'fas fa-window-close', 'far fa-window-close', 'fas fa-window-maximize', 'far fa-window-maximize', 'fas fa-window-minimize', 'far fa-window-minimize', 'fas fa-window-restore', 'far fa-window-restore'],
  Communication: ['fas fa-address-book', 'far fa-address-book', 'fas fa-address-card', 'far fa-address-card', 'fas fa-american-sign-language-interpreting', 'fas fa-assistive-listening-systems', 'fas fa-at', 'fas fa-bell', 'far fa-bell', 'fas fa-bell-slash', 'far fa-bell-slash', 'fab fa-bluetooth', 'fab fa-bluetooth-b', 'fas fa-bullhorn', 'fas fa-comment', 'far fa-comment', 'fas fa-comment-alt', 'far fa-comment-alt', 'fas fa-comments', 'far fa-comments', 'fas fa-envelope', 'far fa-envelope', 'fas fa-envelope-open', 'far fa-envelope-open', 'fas fa-envelope-square', 'fas fa-fax', 'fas fa-inbox', 'fas fa-language', 'fas fa-microphone', 'fas fa-microphone-slash', 'fas fa-mobile', 'fas fa-mobile-alt', 'fas fa-paper-plane', 'far fa-paper-plane', 'fas fa-phone', 'fas fa-phone-square', 'fas fa-phone-volume', 'fas fa-rss', 'fas fa-rss-square', 'fas fa-tty', 'fas fa-wifi'],
  Computers: ['fas fa-desktop', 'fas fa-download', 'fas fa-hdd', 'far fa-hdd', 'fas fa-headphones', 'fas fa-keyboard', 'far fa-keyboard', 'fas fa-laptop', 'fas fa-microchip', 'fas fa-mobile', 'fas fa-mobile-alt', 'fas fa-plug', 'fas fa-power-off', 'fas fa-print', 'fas fa-save', 'far fa-save', 'fas fa-server', 'fas fa-tablet', 'fas fa-tablet-alt', 'fas fa-tv', 'fas fa-upload'],
  Currency: ['fab fa-bitcoin', 'fab fa-btc', 'fas fa-dollar-sign', 'fas fa-euro-sign', 'fab fa-gg', 'fab fa-gg-circle', 'fas fa-lira-sign', 'fas fa-money-bill-alt', 'far fa-money-bill-alt', 'fas fa-pound-sign', 'fas fa-ruble-sign', 'fas fa-rupee-sign', 'fas fa-shekel-sign', 'fas fa-won-sign', 'fas fa-yen-sign'],
  'Date & Time': ['fas fa-bell', 'far fa-bell', 'fas fa-bell-slash', 'far fa-bell-slash', 'fas fa-calendar', 'far fa-calendar', 'fas fa-calendar-alt', 'far fa-calendar-alt', 'fas fa-calendar-check', 'far fa-calendar-check', 'fas fa-calendar-minus', 'far fa-calendar-minus', 'fas fa-calendar-plus', 'far fa-calendar-plus', 'fas fa-calendar-times', 'far fa-calendar-times', 'fas fa-clock', 'far fa-clock', 'fas fa-hourglass', 'far fa-hourglass', 'fas fa-hourglass-end', 'fas fa-hourglass-half', 'fas fa-hourglass-start', 'fas fa-stopwatch'],
  Design: ['fas fa-adjust', 'fas fa-clone', 'far fa-clone', 'fas fa-copy', 'far fa-copy', 'fas fa-crop', 'fas fa-crosshairs', 'fas fa-cut', 'fas fa-edit', 'far fa-edit', 'fas fa-eraser', 'fas fa-eye', 'fas fa-eye-dropper', 'fas fa-eye-slash', 'far fa-eye-slash', 'fas fa-object-group', 'far fa-object-group', 'fas fa-object-ungroup', 'far fa-object-ungroup', 'fas fa-paint-brush', 'fas fa-paste', 'fas fa-pencil-alt', 'fas fa-save', 'far fa-save', 'fas fa-tint'],
  Editors: ['fas fa-align-center', 'fas fa-align-justify', 'fas fa-align-left', 'fas fa-align-right', 'fas fa-bold', 'fas fa-clipboard', 'far fa-clipboard', 'fas fa-clone', 'far fa-clone', 'fas fa-columns', 'fas fa-copy', 'far fa-copy', 'fas fa-cut', 'fas fa-edit', 'far fa-edit', 'fas fa-eraser', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-font', 'fas fa-heading', 'fas fa-i-cursor', 'fas fa-indent', 'fas fa-italic', 'fas fa-link', 'fas fa-list', 'fas fa-list-alt', 'far fa-list-alt', 'fas fa-list-ol', 'fas fa-list-ul', 'fas fa-outdent', 'fas fa-paper-plane', 'far fa-paper-plane', 'fas fa-paperclip', 'fas fa-paragraph', 'fas fa-paste', 'fas fa-pencil-alt', 'fas fa-print', 'fas fa-quote-left', 'fas fa-quote-right', 'fas fa-redo', 'fas fa-redo-alt', 'fas fa-reply', 'fas fa-reply-all', 'fas fa-share', 'fas fa-strikethrough', 'fas fa-subscript', 'fas fa-superscript', 'fas fa-sync', 'fas fa-sync-alt', 'fas fa-table', 'fas fa-tasks', 'fas fa-text-height', 'fas fa-text-width', 'fas fa-th', 'fas fa-th-large', 'fas fa-th-list', 'fas fa-trash', 'fas fa-trash-alt', 'far fa-trash-alt', 'fas fa-underline', 'fas fa-undo', 'fas fa-undo-alt', 'fas fa-unlink'],
  Files: ['fas fa-archive', 'fas fa-clone', 'far fa-clone', 'fas fa-copy', 'far fa-copy', 'fas fa-cut', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-file-archive', 'far fa-file-archive', 'fas fa-file-audio', 'far fa-file-audio', 'fas fa-file-code', 'far fa-file-code', 'fas fa-file-excel', 'far fa-file-excel', 'fas fa-file-image', 'far fa-file-image', 'fas fa-file-pdf', 'far fa-file-pdf', 'fas fa-file-powerpoint', 'far fa-file-powerpoint', 'fas fa-file-video', 'far fa-file-video', 'fas fa-file-word', 'far fa-file-word', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-paste', 'fas fa-save', 'far fa-save', 'fas fa-sticky-note', 'far fa-sticky-note'],
  Genders: ['fas fa-genderless', 'fas fa-mars', 'fas fa-mars-double', 'fas fa-mars-stroke', 'fas fa-mars-stroke-h', 'fas fa-mars-stroke-v', 'fas fa-mercury', 'fas fa-neuter', 'fas fa-transgender', 'fas fa-transgender-alt', 'fas fa-venus', 'fas fa-venus-double', 'fas fa-venus-mars'],
  Hands: ['fas fa-hand-lizard', 'far fa-hand-lizard', 'fas fa-hand-paper', 'far fa-hand-paper', 'fas fa-hand-peace', 'far fa-hand-peace', 'fas fa-hand-point-down', 'far fa-hand-point-down', 'fas fa-hand-point-left', 'far fa-hand-point-left', 'fas fa-hand-point-right', 'far fa-hand-point-right', 'fas fa-hand-point-up', 'far fa-hand-point-up', 'fas fa-hand-pointer', 'far fa-hand-pointer', 'fas fa-hand-rock', 'far fa-hand-rock', 'fas fa-hand-scissors', 'far fa-hand-scissors', 'fas fa-hand-spock', 'far fa-hand-spock', 'fas fa-handshake', 'far fa-handshake', 'fas fa-thumbs-down', 'far fa-thumbs-down', 'fas fa-thumbs-up', 'far fa-thumbs-up'],
  Health: ['fab fa-accessible-icon', 'fas fa-ambulance', 'fas fa-h-square', 'fas fa-heart', 'far fa-heart', 'fas fa-heartbeat', 'fas fa-hospital', 'far fa-hospital', 'fas fa-medkit', 'fas fa-plus-square', 'far fa-plus-square', 'fas fa-stethoscope', 'fas fa-user-md', 'fas fa-wheelchair'],
  Images: ['fas fa-adjust', 'fas fa-bolt', 'fas fa-camera', 'fas fa-camera-retro', 'fas fa-clone', 'far fa-clone', 'fas fa-compress', 'fas fa-expand', 'fas fa-eye', 'fas fa-eye-dropper', 'fas fa-eye-slash', 'far fa-eye-slash', 'fas fa-file-image', 'far fa-file-image', 'fas fa-film', 'fas fa-id-badge', 'far fa-id-badge', 'fas fa-id-card', 'far fa-id-card', 'fas fa-image', 'far fa-image', 'fas fa-images', 'far fa-images', 'fas fa-sliders-h', 'fas fa-tint'],
  Interfaces: ['fas fa-ban', 'fas fa-barcode', 'fas fa-bars', 'fas fa-beer', 'fas fa-bell', 'far fa-bell', 'fas fa-bell-slash', 'far fa-bell-slash', 'fas fa-bug', 'fas fa-bullhorn', 'fas fa-bullseye', 'fas fa-calculator', 'fas fa-calendar', 'far fa-calendar', 'fas fa-calendar-alt', 'far fa-calendar-alt', 'fas fa-calendar-check', 'far fa-calendar-check', 'fas fa-calendar-minus', 'far fa-calendar-minus', 'fas fa-calendar-plus', 'far fa-calendar-plus', 'fas fa-calendar-times', 'far fa-calendar-times', 'fas fa-certificate', 'fas fa-check', 'fas fa-check-circle', 'far fa-check-circle', 'fas fa-check-square', 'far fa-check-square', 'fas fa-circle', 'far fa-circle', 'fas fa-clipboard', 'far fa-clipboard', 'fas fa-clone', 'far fa-clone', 'fas fa-cloud', 'fas fa-cloud-download-alt', 'fas fa-cloud-upload-alt', 'fas fa-coffee', 'fas fa-cog', 'fas fa-cogs', 'fas fa-copy', 'far fa-copy', 'fas fa-cut', 'fas fa-database', 'fas fa-dot-circle', 'far fa-dot-circle', 'fas fa-download', 'fas fa-edit', 'far fa-edit', 'fas fa-ellipsis-h', 'fas fa-ellipsis-v', 'fas fa-envelope', 'far fa-envelope', 'fas fa-envelope-open', 'far fa-envelope-open', 'fas fa-eraser', 'fas fa-exclamation', 'fas fa-exclamation-circle', 'fas fa-exclamation-triangle', 'fas fa-external-link-alt', 'fas fa-external-link-square-alt', 'fas fa-eye', 'fas fa-eye-slash', 'far fa-eye-slash', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-filter', 'fas fa-flag', 'far fa-flag', 'fas fa-flag-checkered', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-frown', 'far fa-frown', 'fas fa-hashtag', 'fas fa-heart', 'far fa-heart', 'fas fa-history', 'fas fa-home', 'fas fa-i-cursor', 'fas fa-info', 'fas fa-info-circle', 'fas fa-language', 'fas fa-magic', 'fas fa-meh', 'far fa-meh', 'fas fa-microphone', 'fas fa-microphone-slash', 'fas fa-minus', 'fas fa-minus-circle', 'fas fa-minus-square', 'far fa-minus-square', 'fas fa-paste', 'fas fa-pencil-alt', 'fas fa-plus', 'fas fa-plus-circle', 'fas fa-plus-square', 'far fa-plus-square', 'fas fa-qrcode', 'fas fa-question', 'fas fa-question-circle', 'far fa-question-circle'],
  Maps: ['fas fa-ambulance', 'fas fa-anchor', 'fas fa-balance-scale', 'fas fa-bath', 'fas fa-bed', 'fas fa-beer', 'fas fa-bell', 'far fa-bell', 'fas fa-bell-slash', 'far fa-bell-slash', 'fas fa-bicycle', 'fas fa-binoculars', 'fas fa-birthday-cake', 'fas fa-blind', 'fas fa-bomb', 'fas fa-book', 'fas fa-bookmark', 'far fa-bookmark', 'fas fa-briefcase', 'fas fa-building', 'far fa-building', 'fas fa-car', 'fas fa-coffee', 'fas fa-crosshairs', 'fas fa-dollar-sign', 'fas fa-eye', 'fas fa-eye-slash', 'far fa-eye-slash', 'fas fa-fighter-jet', 'fas fa-fire', 'fas fa-fire-extinguisher', 'fas fa-flag', 'far fa-flag', 'fas fa-flag-checkered', 'fas fa-flask', 'fas fa-gamepad', 'fas fa-gavel', 'fas fa-gift', 'fas fa-glass-martini', 'fas fa-globe', 'fas fa-graduation-cap', 'fas fa-h-square', 'fas fa-heart', 'far fa-heart', 'fas fa-heartbeat', 'fas fa-home', 'fas fa-hospital', 'far fa-hospital', 'fas fa-image', 'far fa-image', 'fas fa-images', 'far fa-images', 'fas fa-industry', 'fas fa-info', 'fas fa-info-circle', 'fas fa-key', 'fas fa-leaf', 'fas fa-lemon', 'far fa-lemon', 'fas fa-life-ring', 'far fa-life-ring', 'fas fa-lightbulb', 'far fa-lightbulb', 'fas fa-location-arrow', 'fas fa-low-vision', 'fas fa-magnet', 'fas fa-male', 'fas fa-map', 'far fa-map', 'fas fa-map-marker', 'fas fa-map-marker-alt', 'fas fa-map-pin', 'fas fa-map-signs', 'fas fa-medkit', 'fas fa-money-bill-alt', 'far fa-money-bill-alt', 'fas fa-motorcycle', 'fas fa-music', 'fas fa-newspaper', 'far fa-newspaper', 'fas fa-paw', 'fas fa-phone', 'fas fa-phone-square', 'fas fa-phone-volume', 'fas fa-plane', 'fas fa-plug', 'fas fa-plus', 'fas fa-plus-square', 'far fa-plus-square', 'fas fa-print', 'fas fa-recycle', 'fas fa-road', 'fas fa-rocket', 'fas fa-search', 'fas fa-search-minus', 'fas fa-search-plus', 'fas fa-ship', 'fas fa-shopping-bag', 'fas fa-shopping-basket', 'fas fa-shopping-cart', 'fas fa-shower', 'fas fa-street-view', 'fas fa-subway', 'fas fa-suitcase', 'fas fa-tag', 'fas fa-tags', 'fas fa-taxi', 'fas fa-thumbtack'],
  Objects: ['fas fa-ambulance', 'fas fa-anchor', 'fas fa-archive', 'fas fa-balance-scale', 'fas fa-bath', 'fas fa-bed', 'fas fa-beer', 'fas fa-bell', 'far fa-bell', 'fas fa-bicycle', 'fas fa-binoculars', 'fas fa-birthday-cake', 'fas fa-bomb', 'fas fa-book', 'fas fa-bookmark', 'far fa-bookmark', 'fas fa-briefcase', 'fas fa-bug', 'fas fa-building', 'far fa-building', 'fas fa-bullhorn', 'fas fa-bullseye', 'fas fa-bus', 'fas fa-calculator', 'fas fa-calendar', 'far fa-calendar', 'fas fa-calendar-alt', 'far fa-calendar-alt', 'fas fa-camera', 'fas fa-camera-retro', 'fas fa-car', 'fas fa-clipboard', 'far fa-clipboard', 'fas fa-cloud', 'fas fa-coffee', 'fas fa-cog', 'fas fa-cogs', 'fas fa-compass', 'far fa-compass', 'fas fa-copy', 'far fa-copy', 'fas fa-cube', 'fas fa-cubes', 'fas fa-cut', 'fas fa-envelope', 'far fa-envelope', 'fas fa-envelope-open', 'far fa-envelope-open', 'fas fa-eraser', 'fas fa-eye', 'fas fa-eye-dropper', 'fas fa-fax', 'fas fa-fighter-jet', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-film', 'fas fa-fire', 'fas fa-fire-extinguisher', 'fas fa-flag', 'far fa-flag', 'fas fa-flag-checkered', 'fas fa-flask', 'fas fa-futbol', 'far fa-futbol', 'fas fa-gamepad', 'fas fa-gavel', 'fas fa-gem', 'far fa-gem', 'fas fa-gift', 'fas fa-glass-martini', 'fas fa-globe', 'fas fa-graduation-cap', 'fas fa-hdd', 'far fa-hdd', 'fas fa-headphones', 'fas fa-heart', 'far fa-heart', 'fas fa-home', 'fas fa-hospital', 'far fa-hospital', 'fas fa-hourglass', 'far fa-hourglass', 'fas fa-image', 'far fa-image', 'fas fa-images', 'far fa-images', 'fas fa-industry', 'fas fa-key', 'fas fa-keyboard', 'far fa-keyboard', 'fas fa-laptop', 'fas fa-leaf', 'fas fa-lemon', 'far fa-lemon', 'fas fa-life-ring', 'far fa-life-ring', 'fas fa-lightbulb', 'far fa-lightbulb', 'fas fa-lock', 'fas fa-lock-open', 'fas fa-magic', 'fas fa-magnet', 'fas fa-map', 'far fa-map', 'fas fa-map-marker', 'fas fa-map-marker-alt'],
  'Payments & Shopping': ['fab fa-amazon-pay', 'fab fa-apple-pay', 'fas fa-bell', 'far fa-bell', 'fas fa-bookmark', 'far fa-bookmark', 'fas fa-bullhorn', 'fas fa-camera', 'fas fa-camera-retro', 'fas fa-cart-arrow-down', 'fas fa-cart-plus', 'fab fa-cc-amazon-pay', 'fab fa-cc-amex', 'fab fa-cc-apple-pay', 'fab fa-cc-diners-club', 'fab fa-cc-discover', 'fab fa-cc-jcb', 'fab fa-cc-mastercard', 'fab fa-cc-paypal', 'fab fa-cc-stripe', 'fab fa-cc-visa', 'fas fa-certificate', 'fas fa-credit-card', 'far fa-credit-card', 'fab fa-ethereum', 'fas fa-gem', 'far fa-gem', 'fas fa-gift', 'fab fa-google-wallet', 'fas fa-handshake', 'far fa-handshake', 'fas fa-heart', 'far fa-heart', 'fas fa-key', 'fab fa-paypal', 'fas fa-shopping-bag', 'fas fa-shopping-basket', 'fas fa-shopping-cart', 'fas fa-star', 'far fa-star', 'fab fa-stripe', 'fab fa-stripe-s', 'fas fa-tag', 'fas fa-tags', 'fas fa-thumbs-down', 'far fa-thumbs-down', 'fas fa-thumbs-up', 'far fa-thumbs-up', 'fas fa-trophy'],
  Shapes: ['fas fa-bookmark', 'far fa-bookmark', 'fas fa-calendar', 'far fa-calendar', 'fas fa-certificate', 'fas fa-circle', 'far fa-circle', 'fas fa-cloud', 'fas fa-comment', 'far fa-comment', 'fas fa-file', 'far fa-file', 'fas fa-folder', 'far fa-folder', 'fas fa-heart', 'far fa-heart', 'fas fa-map-marker', 'fas fa-play', 'fas fa-square', 'far fa-square', 'fas fa-star', 'far fa-star'],
  Spinners: ['fas fa-asterisk', 'fas fa-certificate', 'fas fa-circle-notch', 'fas fa-cog', 'fas fa-compass', 'far fa-compass', 'fas fa-crosshairs', 'fas fa-life-ring', 'far fa-life-ring', 'fas fa-snowflake', 'far fa-snowflake', 'fas fa-spinner', 'fas fa-sun', 'far fa-sun', 'fas fa-sync'],
  Sports: ['fas fa-baseball-ball', 'fas fa-basketball-ball', 'fas fa-bowling-ball', 'fas fa-football-ball', 'fas fa-futbol', 'far fa-futbol', 'fas fa-golf-ball', 'fas fa-hockey-puck', 'fas fa-quidditch', 'fas fa-table-tennis', 'fas fa-volleyball-ball'],
  Status: ['fas fa-ban', 'fas fa-battery-empty', 'fas fa-battery-full', 'fas fa-battery-half', 'fas fa-battery-quarter', 'fas fa-battery-three-quarters', 'fas fa-bell', 'far fa-bell', 'fas fa-bell-slash', 'far fa-bell-slash', 'fas fa-calendar', 'far fa-calendar', 'fas fa-calendar-alt', 'far fa-calendar-alt', 'fas fa-calendar-check', 'far fa-calendar-check', 'fas fa-calendar-minus', 'far fa-calendar-minus', 'fas fa-calendar-plus', 'far fa-calendar-plus', 'fas fa-calendar-times', 'far fa-calendar-times', 'fas fa-cart-arrow-down', 'fas fa-cart-plus', 'fas fa-exclamation', 'fas fa-exclamation-circle', 'fas fa-exclamation-triangle', 'fas fa-eye', 'fas fa-eye-slash', 'far fa-eye-slash', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-info', 'fas fa-info-circle', 'fas fa-lock', 'fas fa-lock-open', 'fas fa-minus', 'fas fa-minus-circle', 'fas fa-minus-square', 'far fa-minus-square', 'fas fa-plus', 'fas fa-plus-circle', 'fas fa-plus-square', 'far fa-plus-square', 'fas fa-question', 'fas fa-question-circle', 'far fa-question-circle', 'fas fa-shield-alt', 'fas fa-shopping-cart', 'fas fa-sign-in-alt', 'fas fa-sign-out-alt', 'fas fa-thermometer-empty', 'fas fa-thermometer-full', 'fas fa-thermometer-half', 'fas fa-thermometer-quarter', 'fas fa-thermometer-three-quarters', 'fas fa-thumbs-down', 'far fa-thumbs-down', 'fas fa-thumbs-up', 'far fa-thumbs-up', 'fas fa-toggle-off', 'fas fa-toggle-on', 'fas fa-unlock', 'fas fa-unlock-alt'],
  'Users & People': ['fab fa-accessible-icon', 'fas fa-address-book', 'far fa-address-book', 'fas fa-address-card', 'far fa-address-card', 'fas fa-bed', 'fas fa-blind', 'fas fa-child', 'fas fa-female', 'fas fa-frown', 'far fa-frown', 'fas fa-id-badge', 'far fa-id-badge', 'fas fa-id-card', 'far fa-id-card', 'fas fa-male', 'fas fa-meh', 'far fa-meh', 'fas fa-power-off', 'fas fa-smile', 'far fa-smile', 'fas fa-street-view', 'fas fa-user', 'far fa-user', 'fas fa-user-circle', 'far fa-user-circle', 'fas fa-user-md', 'fas fa-user-plus', 'fas fa-user-secret', 'fas fa-user-times', 'fas fa-users', 'fas fa-wheelchair'],
  Vehicles: ['fab fa-accessible-icon', 'fas fa-ambulance', 'fas fa-bicycle', 'fas fa-bus', 'fas fa-car', 'fas fa-fighter-jet', 'fas fa-motorcycle', 'fas fa-paper-plane', 'far fa-paper-plane', 'fas fa-plane', 'fas fa-rocket', 'fas fa-ship', 'fas fa-shopping-cart', 'fas fa-space-shuttle', 'fas fa-subway', 'fas fa-taxi', 'fas fa-train', 'fas fa-truck', 'fas fa-wheelchair'],
  Writing: ['fas fa-archive', 'fas fa-book', 'fas fa-bookmark', 'far fa-bookmark', 'fas fa-edit', 'far fa-edit', 'fas fa-envelope', 'far fa-envelope', 'fas fa-envelope-open', 'far fa-envelope-open', 'fas fa-eraser', 'fas fa-file', 'far fa-file', 'fas fa-file-alt', 'far fa-file-alt', 'fas fa-folder', 'far fa-folder', 'fas fa-folder-open', 'far fa-folder-open', 'fas fa-keyboard', 'far fa-keyboard', 'fas fa-newspaper', 'far fa-newspaper', 'fas fa-paper-plane', 'far fa-paper-plane', 'fas fa-paperclip', 'fas fa-paragraph', 'fas fa-pen-square', 'fas fa-pencil-alt', 'fas fa-quote-left', 'fas fa-quote-right', 'fas fa-sticky-note', 'far fa-sticky-note', 'fas fa-thumbtack']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontAwesome);

/***/ }),

/***/ "./src/components/icon-picker/icon-picker.js":
/*!***************************************************!*\
  !*** ./src/components/icon-picker/icon-picker.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _re_d_beard_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @re.d_beard./react-fonticonpicker */ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _re_d_beard_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_re_d_beard_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _re_d_beard_react_fonticonpicker_dist_fonticonpicker_base_theme_react_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @re.d_beard./react-fonticonpicker/dist/fonticonpicker.base-theme.react.css */ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.base-theme.react.css");
/* harmony import */ var _re_d_beard_react_fonticonpicker_dist_fonticonpicker_material_theme_react_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @re.d_beard./react-fonticonpicker/dist/fonticonpicker.material-theme.react.css */ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.material-theme.react.css");
/* harmony import */ var _icon_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-lists */ "./src/components/icon-picker/icon-lists.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/icon-picker/editor.scss");






const IconPicker = ({
  attributes,
  setAttributes,
  label,
  attributesKey,
  onChange = false
}) => {
  const handleChange = value => {
    setAttributes({
      [attributesKey]: value
    });
  };
  const settings = {
    icons: _icon_lists__WEBPACK_IMPORTED_MODULE_4__["default"],
    theme: 'default',
    renderUsing: 'class',
    value: attributes,
    onChange: onChange ? onChange : handleChange,
    isMulti: false
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'mrs-icon-picker mrs-component-mb'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: 'mrs-component-title'
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_re_d_beard_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default()), {
    ...settings
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPicker);

/***/ }),

/***/ "./src/components/tabControls/tabControls.js":
/*!***************************************************!*\
  !*** ./src/components/tabControls/tabControls.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabControls_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabControls.scss */ "./src/components/tabControls/tabControls.scss");



const TabControls = ({
  attributes,
  setAttributes,
  GeneralTab = '',
  StyleTab = '',
  AdvancedTab = ''
}) => {
  const Tabs = [];
  if (GeneralTab) {
    Tabs.push({
      name: 'general',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-tab-panel-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: 'admin-settings'
      }), " General"),
      className: 'mrs-general-tab'
    });
  }
  if (StyleTab) {
    Tabs.push({
      name: 'style',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-tab-panel-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: 'admin-customizer'
      }), " Style"),
      className: 'mrs-style-tab'
    });
  }
  if (AdvancedTab) {
    Tabs.push({
      name: 'advanced',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-tab-panel-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: 'admin-generic'
      }), " Advanced"),
      className: 'mrs-advanced-tab'
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "mrs-tab-panel",
    activeClass: "active-tab",
    tabs: Tabs
  }, tab => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tab.name === 'general' && GeneralTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GeneralTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }), tab.name === 'style' && StyleTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }), tab.name === 'advanced' && AdvancedTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabControls);

/***/ }),

/***/ "./src/components/toggle/toggle.js":
/*!*****************************************!*\
  !*** ./src/components/toggle/toggle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const Toggle = ({
  label,
  attributes,
  attributesKey,
  setAttributes
}) => {
  console.log(attributes);
  console.log(attributesKey);
  console.log(setAttributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'mrs-toggle mrs-components-mb'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: label,
    checked: attributes,
    onChange: () => setAttributes({
      [attributesKey]: !attributes
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

/***/ }),

/***/ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.base-theme.react.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.base-theme.react.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.material-theme.react.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@re.d_beard./react-fonticonpicker/dist/fonticonpicker.material-theme.react.css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/mrs-button/editor.scss":
/*!******************************************!*\
  !*** ./src/block/mrs-button/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/mrs-button/style.scss":
/*!*****************************************!*\
  !*** ./src/block/mrs-button/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/icon-picker/editor.scss":
/*!************************************************!*\
  !*** ./src/components/icon-picker/editor.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/tabControls/tabControls.scss":
/*!*****************************************************!*\
  !*** ./src/components/tabControls/tabControls.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/block/mrs-button/block.json":
/*!*****************************************!*\
  !*** ./src/block/mrs-button/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/mrs-button","version":"0.1.0","title":"Mrs Button","category":"text","icon":"button","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"uniqueId":{"type":"string"},"enableIcon":{"type":"boolean","default":false},"buttonIconPosition":{"type":"string","default":"afterText"},"buttonIcon":{"type":"string","default":"fas fa-arrow-right"},"buttonText":{"type":"string","default":"Click Me"},"removeText":{"type":"boolean","default":false},"textAlignments":{"type":"string","default":"center"},"buttonLink":{"type":"string","default":""},"buttonLinkTarget":{"type":"string","default":"_blank"},"buttonLinkFollow":{"type":"boolean","default":false},"buttonFontSize":{"type":"object","default":{"device":{"desktop":"14","tablet":"","mobile":""},"unit":{"desktop":"px","tablet":"px","mobile":"px"}}},"buttonFontColor":{"type":"object","default":{"color":"#fff","hover":""}},"buttonIconSize":{"type":"object","default":{"device":{"desktop":"14","tablet":"","mobile":""},"unit":{"desktop":"px","tablet":"px","mobile":"px"}}},"buttonIconColor":{"type":"object","default":{"color":"#fff","hover":""}},"buttonIconGap":{"type":"object","default":{"device":{"desktop":"5","tablet":"","mobile":""},"unit":{"desktop":"px","tablet":"px","mobile":"px"}}},"bgButtonColor":{"type":"object","default":{"color":{"transparent":"","solid":"#0053F0","gradient":"linear-gradient(135deg,rgb(6,147,227) 0%,rgb(133,49,213) 100%)"},"hover":{"transparent":"","solid":"","gradient":"linear-gradient(135deg,rgb(6,147,227) 0%,rgb(133,49,213) 100%)"}}},"bgTransition":{"type":"object","default":{"value":0.3}},"buttonBorder":{"type":"object","default":{"color":"#DCDCDE","style":"solid","hoverColor":"#DCDCDE"}},"borderTransition":{"type":"object","default":{"value":0.3}},"buttonBorderWidth":{"type":"object","default":{"device":{"desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"tablet":{"top":"","right":"","bottom":"","left":""},"mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"desktop":"px","tablet":"px","mobile":"px"},"allChange":false}},"buttonBorderRadius":{"type":"object","default":{"device":{"desktop":{"top":"8","right":"8","bottom":"8","left":"8"},"tablet":{"top":"","right":"","bottom":"","left":""},"mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"desktop":"px","tablet":"px","mobile":"px"},"allChange":false}},"enableButtonBoxShadow":{"type":"boolean","default":false},"buttonShadowTransition":{"type":"object","default":{"value":0.3}},"buttonShadow":{"type":"object","default":{"device":{"desktop":{"top":"0","right":"3","bottom":"6","left":"0"},"tablet":{"top":"","right":"","bottom":"","left":""},"mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"desktop":"Outset","tablet":"Outset","mobile":"Outset"},"color":"#000026","hoverColor":"#000026"}},"buttonPadding":{"type":"object","default":{"device":{"desktop":{"top":"10","right":"28","bottom":"10","left":"28"},"tablet":{"top":"","right":"","bottom":"","left":""},"mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"desktop":"px","tablet":"px","mobile":"px"},"allChange":false}},"buttonHideOnDesktop":{"type":"boolean","default":false},"buttonHideOnTablet":{"type":"boolean","default":false},"buttonHideOnMobile":{"type":"boolean","default":false}},"textdomain":"mrs-button","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block/mrs-button/index": 0,
/******/ 			"block/mrs-button/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmrs_form"] = globalThis["webpackChunkmrs_form"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block/mrs-button/style-index"], () => (__webpack_require__("./src/block/mrs-button/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map