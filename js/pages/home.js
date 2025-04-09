console.log('home');

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

const liDOM1 = document.getElementsByTagName('li');
console.log(liDOM1);

const liDOM2 = ulDOM[0].getElementsByTagName('li');
console.log(liDOM2);

const liDOM3 = ulDOM[1].getElementsByTagName('li');
console.log(liDOM2);

const titleDOM = document.getElementById('title');
console.log(titleDOM);
console.log([titleDOM]);

const errorDOM = document.getElementById('error');
console.log(errorDOM);

const listDOM = document.getElementsByClassName('list');
console.log(listDOM);

const itemDOM = document.getElementsByClassName('item');
console.log(itemDOM);

const itemDOM1 = listDOM[0].getElementsByClassName('item');
console.log(itemDOM1);

const pomidorasDOM = document.querySelector('.list .item');
console.log(pomidorasDOM);

const darzovesDOM = document.querySelectorAll('.list:nth-of-type(1) > .item');
console.log(darzovesDOM);

console.clear();

const get1 = document.getElementsByTagName('ul');
console.log(get1);

const get2 = get1[0].getElementsByTagName('li');
console.log(get2);

const get3 = document.getElementById('title');
console.log(get3);
console.log([get3]);

const get4 = document.getElementsByClassName('list-second');
console.log(get4);

const get5 = document.querySelector('.list-second .item:nth-of-type(2)');
console.log(get5);

const get6 = document.querySelectorAll('.list .item');
console.log(get6);
