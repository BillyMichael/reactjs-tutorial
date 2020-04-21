import React, { Component } from 'react'; 

class App extends Component{
    constructor() {
        super();
        this.state = { displayBio: false };
        this.readMore = this.readMore.bind(this)
    }

    readMore() {
        console.log(this)
        this.setState({displayBio: true})
    }

    showLess() {
        console.log(this)
        this.setState({displayBio: false})
    }

    render() {
        return (
            <div>
                <h1>My name is billy.</h1>
                <p>This is a test</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>Im current learning reactJs</p>
                        <p>I like triathlon</p>
                        <button onClick={this.showLess}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.readMore}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App