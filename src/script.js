import chalk from 'chalk'
import inquirer from 'inquirer';
import { foods, drinks } from './menuList'

const questions = [
  // 下記のように予め記入しておくことで、inquirer自体の暗記よりもパッケージを使うことに専念してもらう。
  // {type: '選択形式', name: '答えを格納するキー', message: '店内でお召し上がりですか？(Yかnを入力)', choices: インポートする配列}
  {type: 'confirm', name: 'place', message: '店内でお召し上がりですか？(Yかnを入力)', default: true},
  {type: 'list', name: 'food', message: 'お料理を選んでください', choices: foods},
  {type: 'list', name: 'drink', message: 'お飲み物を選んでください', choices: drinks},
];

console.log(chalk.bgCyan.bold('Progate Cafeへようこそ！'));
inquirer
  .prompt(questions)
  .then((answers) => {

  // object destructuringは下記のように段階的に教えていくと分かりやすそう。
    // const place = answers.place
    // const food  = answers.food
    // const drink = answers.drink

    // const {place} = answers
    // const {food}  = answers
    // const {drink} = answers

    const {
      place,
      food,
      drink,
    } = answers;

    // 三項演算子はレッスンの終盤に教えるので、最初の方はif文で書いてもらう必要がある
    // if (place){
    //   const placeText = '店内'
    // }else{
    //   const placeText = '持ち帰り'
    // }
    const placeText = place ? '店内' : '持ち帰り';

    // chalkを盛り込み過ぎると何が大事か分からなくなる&chalkを後付けすることになる と思ったので、シンプルにしてみました。
    console.log('------------------');
    console.log('【ご注文内容】');
    console.log('店内/持ち帰り: ' +　placeText);
    console.log('フード: ' + food);
    console.log('ドリンク: ' + drink);
    console.log('------------------');
    console.log(chalk.red.bold('またのご来店をお待ちしております！'));

    // console.log('------------------');
    // console.log(chalk.bold('【ご注文内容】'));
    // console.log('店内/持ち帰り: ' + chalk.yellow.bold(placeText));
    // console.log('フード: ' + chalk.yellow.bold(food));
    // console.log('ドリンク: ' + chalk.yellow.bold(drink));
    // console.log('------------------');
    // console.log(chalk.bold('またのご来店をお待ちしております！'));
  });
