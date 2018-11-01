console.log("App.js is running");

var userName = 'ArTy';
var age = '21';
var address = 'Sri Lanka';

var app = {
    titleName : 'My App',
    header : 'Welcome to the Web Page'
}

var user = {
    name: 'ArTyOnline',
    age: '21',
    address: 'Colombo'
}

var template = (
    <div>
        <h1>{app.titleName}</h1>
        <p>{app.header}</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>{'Hello --' + user.name.toUpperCase()+'--'}</h1>
        <p>Age: {user.age}</p>
        {user.address &&
        <p>Location: {user.address || 'missing'}</p>}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);