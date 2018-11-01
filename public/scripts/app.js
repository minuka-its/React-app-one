'use strict';

console.log("App.js is running");

var userName = 'ArTy';
var age = '21';
var address = 'Sri Lanka';

var app = {
    titleName: 'My App',
    header: 'Welcome to the Web Page'
};

var user = {
    name: 'ArTyOnline',
    age: '21',
    address: 'Colombo'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.titleName
    ),
    React.createElement(
        'p',
        null,
        app.header
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello --' + user.name.toUpperCase() + '--'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.address && React.createElement(
        'p',
        null,
        'Location: ',
        user.address || 'missing'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
