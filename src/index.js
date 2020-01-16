console.log('Hello Webpack Project.');
import React from 'react';
import ReactDOM from 'react-dom';
import sum from './sum.js';
import './styles/mycss.scss';
console.log(sum(2, 5));

const title = 'React with Webpack and Babel';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

// Additionally in the src/index.js file, you have to define that hot reloading is available and should be used:
module.hot.accept();
