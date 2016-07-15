var React = require('react');
var ReactDOM = require('react-dom');
var ProductContainer = require('./components/ProductContainer.jsx');

var PRODUCTS = [
  {category: 'PC', price: '$19.99', stocked: true, name: 'CS:GO'},
  {category: 'PC', price: '$9.99', stocked: true, name: 'DoTA 2'},
  {category: 'PC', price: '$29.99', stocked: false, name: 'Pokemon GO'},
  {category: 'Console', price: '$49.99', stocked: true, name: 'Max Payne'},
  {category: 'Console', price: '$59.99', stocked: false, name: 'God of War'},
  {category: 'Console', price: '$89.99', stocked: true, name: 'Last of us'}
];

const main = document.getElementById('main');

ReactDOM.render(<ProductContainer products={PRODUCTS} />, main);