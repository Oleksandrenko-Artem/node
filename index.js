console.log('hi from node!');

const number1 = 5;
const number2 = 8;

const multiple = (n1, n2) => n1 * n2;

console.log(number1 + number2);
console.log(multiple(8, 19));

class Article{
    constructor(content) {
        this.content = content;
    }
    render() {
        return this.content;
    }
}
const newArticle = new Article('Content for article!');
console.log(newArticle.render());