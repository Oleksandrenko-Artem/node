import cowsay from 'cowsay';
import Article from "./Article.mjs";
import { multiplication, del, sum } from "./math.mjs";

console.log(cowsay.say({text: 'Hello World!'}));

console.log('hi from node!');

const number1 = 5;
const number2 = 8;

console.log(sum(number1,  number2));
console.log(multiplication(8, 19));
console.log(del(45, 4));

const newArticle = new Article('Content for article!');
console.log(newArticle.render());