import React, { Component } from 'react';

import Propcomponent from './components/Propcomponent';

export default class App extends Component {
    state = {
        Name: "Swetha",
        Subject: "Fullstackdevelopment",
        section: "Section D"
    }
    render() {
        return (
            <div>
                I am {this.state.Name} I learn {this.state.Subject}
                <Propcomponent section = {this.state.section} />          
            </div>
        );
    }
}
