'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _menuList = require('./menuList');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questions = [
// {type: '選択形式', name: '答えを格納するキー', message: '店内でお召し上がりですか？(Yかnを入力)', choices: インポートする配列}
{ type: 'confirm', name: 'place', message: '店内でお召し上がりですか？(Yかnを入力)', default: true }, { type: 'list', name: 'food', message: 'お料理を選んでください', choices: _menuList.foods }, { type: 'list', name: 'drink', message: 'お飲み物を選んでください', choices: _menuList.drinks }];

console.log(_chalk2.default.bgCyan.bold('Progate Cafeへようこそ！'));
_inquirer2.default.prompt(questions).then(function (answers) {

    // const place = answers.place
    // const food  = answers.food
    // const drink = answers.drink

    // const {place} = answers
    // const {food}  = answers
    // const {drink} = answers

    var place = answers.place,
        food = answers.food,
        drink = answers.drink;

    // if (place){
    //   const placeText = '店内'
    // }else{
    //   const placeText = '持ち帰り'
    // }

    var placeText = place ? '店内' : '持ち帰り';

    console.log('------------------');
    console.log('【ご注文内容】');
    console.log('店内/持ち帰り: ' + placeText);
    console.log('フード: ' + food);
    console.log('ドリンク: ' + drink);
    console.log('------------------');
    console.log(_chalk2.default.red.bold('またのご来店をお待ちしております！'));

    // console.log('------------------');
    // console.log(chalk.bold('【ご注文内容】'));
    // console.log('店内/持ち帰り: ' + chalk.yellow.bold(placeText));
    // console.log('フード: ' + chalk.yellow.bold(food));
    // console.log('ドリンク: ' + chalk.yellow.bold(drink));
    // console.log('------------------');
    // console.log(chalk.bold('またのご来店をお待ちしております！'));
});