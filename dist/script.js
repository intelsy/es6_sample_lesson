'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _menuList = require('./menuList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var foodChoices = _menuList.foods.map(function (food) {
  return food.name + ' ' + food.price + '\u5186 (' + food.calorie + 'kcal)';
});

var drinkChoices = _menuList.drinks.map(function (drink) {
  return drink.name + ' ' + drink.price + '\u5186 (' + drink.calorie + 'ml)';
});

var questions = [{ type: 'confirm', name: 'place', message: 'For Here?', default: true }, { type: 'list', name: 'food', message: 'Select Food', choices: foodChoices }, { type: 'list', name: 'drink', message: 'Select Drink', choices: drinkChoices }];

_inquirer2.default.prompt(questions).then(function (answers) {
  console.log(answers);
  var place = answers.place,
      food = answers.food,
      drink = answers.drink;


  var placeText = place ? '店内' : '持ち帰り';

  console.log('YOUR ORDER');
  console.log('------------------');
  console.log('place: ' + _chalk2.default.green(placeText));
  console.log('food: ' + _chalk2.default.green(food));
  console.log('drink: ' + _chalk2.default.green(drink));
  console.log('------------------');
  console.log('またのご来店をお待ちしております');
});