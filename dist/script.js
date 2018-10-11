'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questions = [{ type: 'confirm', name: 'place', message: 'For Here?', default: true }, { type: 'list', name: 'menu', message: 'What do you order?', choices: _menuList2.default }, { type: 'input', name: 'number', message: 'How many?' }];

// use npm packages

// relative path
// import npm packages
_inquirer2.default.prompt(questions).then(function (answers) {
  // object destructuring
  var place = answers.place,
      menu = answers.menu,
      number = answers.number;

  // ternary operator

  var placeText = place ? 'For Here' : 'To Go';

  console.log('YOUR ORDER');
  console.log('------------------');
  // use npm packages
  console.log('place: ' + _chalk2.default.green(placeText));
  console.log('order: ' + _chalk2.default.green(menu));
  console.log('number: ' + _chalk2.default.green(number));
});