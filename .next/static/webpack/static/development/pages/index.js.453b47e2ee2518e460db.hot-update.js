webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/toDoItem.js":
/*!********************************!*\
  !*** ./components/toDoItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/malika/Documents/Projects/todo/components/toDoItem.js";



var TodoItem = function TodoItem(props) {
  console.log('fsf', props.item);

  var labelClass = function labelClass() {
    if (!props.item.isCheckedVal) {
      return 'default';
    } else {
      return 'checked';
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2976631941",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2976631941",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    name: "checktem",
    onClick: function onClick() {
      return props.checked(props.item.id);
    },
    className: "jsx-2976631941",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-2976631941" + " " + "lbl ".concat(labelClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.item.value)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2976631941",
    css: ".lbl.jsx-2976631941 .default.jsx-2976631941{-webkit-text-decoration:none;text-decoration:none;}.lbl.jsx-2976631941 .checked.jsx-2976631941{-webkit-text-decoration:line-through;text-decoration:line-through;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWxpa2EvRG9jdW1lbnRzL1Byb2plY3RzL3RvZG8vY29tcG9uZW50cy90b0RvSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBRzBDLEFBR1Esa0RBRmpDLGdCQUdBIiwiZmlsZSI6Ii9Vc2Vycy9tYWxpa2EvRG9jdW1lbnRzL1Byb2plY3RzL3RvZG8vY29tcG9uZW50cy90b0RvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvZG9JdGVtID0gKHByb3BzKT0+e1xuICAgIGNvbnNvbGUubG9nKCdmc2YnLHByb3BzLml0ZW0pXG4gICAgXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9ICgpID0+e1xuICAgICAgICBpZighcHJvcHMuaXRlbS5pc0NoZWNrZWRWYWwpe1xuICAgICAgICAgICAgcmV0dXJuICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrdGVtXCIgb25DbGljaz17KCk9PnByb3BzLmNoZWNrZWQocHJvcHMuaXRlbS5pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2BsYmwgJHtsYWJlbENsYXNzKCl9YH0+e3Byb3BzLml0ZW0udmFsdWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAubGJsIC5kZWZhdWx0e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYmwgLmNoZWNrZWR7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbSJdfQ== */\n/*@ sourceURL=/Users/malika/Documents/Projects/todo/components/toDoItem.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ })

})
//# sourceMappingURL=index.js.453b47e2ee2518e460db.hot-update.js.map