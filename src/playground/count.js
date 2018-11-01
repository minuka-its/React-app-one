let count = 0;

const addOne = () =>{
    count++;
    render();
}

const minusOne = () =>{
    count--;
    render(); 
}

const reset = () =>{
    count = 0;
    render();
}

var appRoot = document.getElementById('app');

const render =  () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne} type="button" className="btn btn-outline-success">+1</button>
            <button onClick={minusOne} type="button" className="btn btn-outline-success">-1</button>
            <button onClick={reset} type="button" className="btn btn-outline-success">reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot);
};




render();