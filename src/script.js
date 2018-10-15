import chalk from 'chalk'
import inquirer from 'inquirer';
import { foods, drinks } from './menuList'

const foodChoices = foods.map((food) => {
  return `${food.name} ${food.price}円 (${food.calorie}kcal)`
});

const drinkChoices = drinks.map((drink) => {
  return `${drink.name} ${drink.price}円 (${drink.amount}ml)`
});

const questions = [
  {type: 'confirm', name: 'place', message: '店内でお召し上がりですか？(Yかnを入力)', default: true},
  {type: 'list', name: 'food', message: 'お料理を選んでください', choices: foodChoices},
  {type: 'list', name: 'drink', message: 'お飲み物を選んでください', choices: drinkChoices},
];

console.log(chalk.bgCyan.bold('Progate Cafeへようこそ！'));
inquirer
  .prompt(questions)
  .then((answers) => {
    const {
      place,
      food,
      drink,
    } = answers;

    const placeText = place ? '店内' : '持ち帰り';

    console.log('------------------');
    console.log(chalk.bold('【ご注文内容】'));
    console.log('店内/持ち帰り: ' + chalk.yellow.bold(placeText));
    console.log('フード: ' + chalk.yellow.bold(food));
    console.log('ドリンク: ' + chalk.yellow.bold(drink));
    console.log('------------------');
    console.log(chalk.bold('またのご来店をお待ちしております！'));
  });
