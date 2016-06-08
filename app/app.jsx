var React = require('react');
var ReactDOM = require('react-dom');

var a = {
  'name': 'jeremy'
};

var b = {
  'age' : '34'
  ...a
};

console.log(b);

//this initialize the app
ReactDOM.render(
<h1>Boilerplate app</h1>,
    document.getElementById('app')
);
