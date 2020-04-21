import React, { Component } from 'react'; 

class App extends Component{
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
    }

    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio})
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
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App