import React, { Component } from 'react';
import SOCIALS from './data/social.js'

class Social extends Component {
        
    render() {

        const {id, name, link} = this.props.social

        return(
            <div style={{display: 'inline-block', margin: 10} }>{name}</div>
        )
    }
}

class Socials extends Component {
    render() {
        return(
            <div>
                <div>Social</div>
                <div>
                    {
                        SOCIALS.map(SOCIAL => {
                            return(
                                <Social key={SOCIAL.key} social={SOCIAL}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Socials