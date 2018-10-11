// import npm packages
import chalk from 'chalk'
import inquirer from 'inquirer';
// relative path
import menuList from './menuList'

const questions = [
  {type: 'confirm', name: 'place', message: 'For Here?', default: true},
  {type: 'list', name: 'menu', message: 'What do you order?', choices: menuList},
  {type: 'input', name: 'number', message: 'How many?'},
];

// use npm packages
inquirer
  .prompt(questions)
  .then((answers) => {
    // object destructuring
    const {
      place,
      menu,
      number,
    } = answers;

    // ternary operator
    const placeText = place ? 'For Here' : 'To Go';

    console.log('YOUR ORDER');
    console.log('------------------');
    // use npm packages
    console.log('place: ' + chalk.green(placeText));
    console.log('order: ' + chalk.green(menu));
    console.log('number: ' + chalk.green(number));
  });
