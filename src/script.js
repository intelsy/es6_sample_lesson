import chalk from 'chalk'
import inquirer from 'inquirer';
import { foods, drinks } from './menuList'

const foodChoices = foods.map((food) => {
  return `${food.name} ${food.price}円 (${food.calorie}kcal)`
});

const drinkChoices = drinks.map((drink) => {
  return `${drink.name} ${drink.price}円 (${drink.calorie}ml)`
});

const questions = [
  {type: 'confirm', name: 'place', message: 'For Here?', default: true},
  {type: 'list', name: 'food', message: 'Select Food', choices: foodChoices},
  {type: 'list', name: 'drink', message: 'Select Drink', choices: drinkChoices},
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const {
      place,
      food,
      drink,
    } = answers;

    const placeText = place ? '店内' : '持ち帰り';

    console.log('YOUR ORDER');
    console.log('------------------');
    console.log('place: ' + chalk.green(placeText));
    console.log('food: ' + chalk.green(food));
    console.log('drink: ' + chalk.green(drink));
    console.log('------------------');
    console.log('またのご来店をお待ちしております')
  });
