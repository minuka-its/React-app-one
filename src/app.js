console.log("App.js is running");

var userName = 'ArTy';
var age = '21';
var address = 'Sri Lanka';

var app = {
    titleName : 'My App',
    header : 'Welcome to the Web Page',
    options: []
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const render = () => {
    const template = (
        <div>
            <h1>{app.titleName}</h1>
            <p>{app.header}</p>
            <form onSubmit={onFormSubmit}>
                <input style={{marginRight:'10px'}} type="text" name="option"></input>
                <button>Submit</button>
            </form>
            <ul>
            {app.options.map((item)=> {
                <li>item</li>
            })}
            </ul>
        </div>
    )
    
ReactDOM.render(template,appRoot)
};

render();


