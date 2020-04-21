import React, { Component } from 'react';
import SOCIALS from './data/social.js'

class Social extends Component {
        
    render() {

        const {id, name, link, image} = this.props.social

        return(
            <div style={{display: 'inline-block', margin: 10} }>
                <a href={link}><img src={image} alt='profile' style={{width: 30, height: 30 }} /></a>
            </div>
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