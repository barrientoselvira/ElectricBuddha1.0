import React from 'react';
import {
//   AppRegistry,
//   StyleSheet,
//   Text,
  View,
} from 'react-360';
import brainStates from '../data/brainStates';
import theWelcome from './theWelcome';


export default class ChooseStates extends React.Component {
    constructor() {
        super ();
        this.state = {
            currentWaves: 'Normal'
        };
    }

    switchWaves = (waves) => {
        this.setState({currentWaves: waves}); 
};


    render() {
        const {
            currentWaves
        } = this.state;
    
        return (
            <View>
                <waves currentWaves={currentWaves} />
                <Menu
                waves = {waves}
                switchWaves={this.switchWaves}
                currentWaves={currentWaves} />
            
            <Info currentWaves={currentWaves} />
            </View>

        );
    }
};

