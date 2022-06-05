class Dashboard extends React.Component {
    render(){
        return (
            <div class='dashboard'>
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}

class DetailBox extends React.Component {
    render(){
        // console.log(this.props)
        return (
            <div class='topDetail'>
                <Detail blockName={'Reviews'} blockValue={1281} />
                <Detail blockName={'Average Rating'} blockValue={4.6} />
                <Detail blockName={'Sentiment Analysis'} blockValue={960} />
            </div>
        )
    }
}

class Detail extends React.Component {
    render(){
        return (
            <div class='detail'>
                <h2>{this.props.blockName}</h2>
                <p>{this.props.blockValue}</p>
            </div>
        )
    }
}

class WebVisitors extends React.Component {
    render(){
        return (
            <div class='visitors'>
                <h2>Website Visitors</h2>
                <p>{this.props.visitorsNum}</p>
                <VisitorsData />
            </div>
        )
    }
}

class VisitorsData extends React.Component {
    render(){
        return (
            <div class='visitorsData'>
                <h2>Visitors Data</h2>
            </div>
        )
    }
}

class ContentBox extends React.Component {
    render(){
        return (
            <div class='content'>
                <DetailBox />
                <WebVisitors visitorsNum={821} />
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <div class='container'>
                <Dashboard />
                <ContentBox />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.main'));