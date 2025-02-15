'use strict';

const listWorkers = document.querySelector('ul');
const items = [...document.querySelectorAll('li')];

const sortList = () =>
  items.sort(
    (a, b) =>
      convertStrToNumber(b.dataset.salary.slice(1)) -
      convertStrToNumber(a.dataset.salary.slice(1)),
  );

sortList(items);

listWorkers.innerHTML = '';
items.forEach((item) => listWorkers.appendChild(item));

function convertStrToNumber(num) {
  return +num.replace(',', '');
}
