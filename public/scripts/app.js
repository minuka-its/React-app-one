'use strict';

console.log("App.js is running");

var userName = 'ArTy';
var age = '21';
var address = 'Sri Lanka';

var app = {
    titleName: 'My App',
    header: 'Welcome to the Web Page',
    options: []
};

var appRoot = document.getElementById('app');

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
var render = function render() {
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { style: { marginRight: '10px' }, type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Submit'
            )
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (item) {
                React.createElement(
                    'li',
                    null,
                    'item'
                );
            })
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
