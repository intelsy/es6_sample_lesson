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
  return drink.name + ' ' + drink.price + '\u5186 (' + drink.amount + 'ml)';
});

var questions = [{ type: 'confirm', name: 'place', message: '店内でお召し上がりですか？(Yかnを入力)', default: true }, { type: 'list', name: 'food', message: 'お料理を選んでください', choices: foodChoices }, { type: 'list', name: 'drink', message: 'お飲み物を選んでください', choices: drinkChoices }];

console.log(_chalk2.default.bgCyan.bold('Progate Cafeへようこそ！'));
_inquirer2.default.prompt(questions).then(function (answers) {
  var place = answers.place,
      food = answers.food,
      drink = answers.drink;


  var placeText = place ? '店内' : '持ち帰り';

  console.log('------------------');
  console.log(_chalk2.default.bold('【ご注文内容】'));
  console.log('店内/持ち帰り: ' + _chalk2.default.yellow.bold(placeText));
  console.log('フード: ' + _chalk2.default.yellow.bold(food));
  console.log('ドリンク: ' + _chalk2.default.yellow.bold(drink));
  console.log('------------------');
  console.log(_chalk2.default.bold('またのご来店をお待ちしております！'));
});