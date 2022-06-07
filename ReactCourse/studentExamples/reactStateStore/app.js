console.table(data);
// create class component to render data to the screen.
class App extends React.Component {
    // Initialize the state.
    state = {
        data: data,
        value: "",
        name: "",
        price: 0,
        description:"Describe this item",
        isHiring: true,
    };
    // create a method to change user input.
    handleChange = (e) => {
        // console.log('hello')
        this.setState({
            [e.target.id] : e.target.value,
        });
    };

    // create a method to submit the form
    handleFormSubmit = (e) => {
        e.preventDefault();
        // add a new item to our data array
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }

        this.setState({
            data:[newItem, ...this.state.data],
        })
        // console.log(this.state.data)
    }

    // create a function to toggle the value of our hiring state.
    handleToggleHiring = () => {
        this.setState({
            isHiring: !this.state.isHiring,
        })
    }

    render(){
        // console.log(this.state);
        const dataList = this.state.data.map((element) => {
            return(
                <ul>
                    <li>
                        {element.name}
                        {element.price}
                    </li>
                </ul>
            )
        });
        return(
            <div>
                <h1>Big Time Shopping</h1>
                {this.state.isHiring? 
                <h2>Yes, we are hiring</h2> :
                <h2>Sorry, try again tomorrow</h2>}
                <button onClick={this.handleToggleHiring}>Toggle Hiring</button>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name"
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <label htmlFor="price">Price: </label>
                    <input 
                        id="price"
                        type="text" 
                        value={this.state.price} 
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <label htmlFor="description">Description: </label>
                    <input 
                        id="description"
                        type="text" 
                        value={this.state.description} 
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <input type="submit" disabled={this.state.price&&this.state.name&&this.state.description? false:true}/>
                </form>
                <div>
                <h2>Preview our new item</h2>
                <h3>{this.state.name}</h3>
                <h4>{this.state.price}</h4>
                <h5>{this.state.description}</h5>
                </div>
                {dataList}
                {/* {this.state.data[3].name} */}
            </div>
        );
    }
}
// render component to the screen.
ReactDOM.render(<App/>, document.querySelector('.container'));
