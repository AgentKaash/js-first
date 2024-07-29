const name = "kaash"
const repoCount = 50

// console.log(name + repoCount +" value"); //outdated

console.log('Hello my name is ${name} and my repo is ${repoCount}')

const gameName = new String('Kaash.com');

// console.log(gameName[2]);
// console.log(gameName.length);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)
console.log(newString);


const anotherString = gameName.slice(-8,5)
console.log(anotherString);


const newStringOne = "  kaash  "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://kaash.com/kl%20lai"

// console.log(url.replace('%20','-'))
// console.log(url.includes('lai'))

console.log(gameName.split('.'));
