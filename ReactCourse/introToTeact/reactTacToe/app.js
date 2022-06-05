class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>React Tac Toe</h1>
            </div>
        )
    }
}

class Player extends React.Component {
    render(){
        // console.log(this.props)
        return (
            <div>
                <h2>Player {this.props.playerNumber}</h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Player playerNumber={"X"} />
                <Player playerNumber={"O"} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));