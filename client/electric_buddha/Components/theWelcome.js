import React from 'react';
import {
    Text, 
    View, 
    StyleSheet
} from 'react-360';

const theWelcome = ({currentState}) => (
    <View style= {styles.header}>
    <Text style={styles.headerTitle} Brain Wave States></Text>
    <Text style={styles.headerSubtitle}>{currentState}</Text>
    </View>
);


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: 600,
    },
    headerTitle: {
        fontSize: 60,
        textAlign: 'center',
        color: '#fff'
    },
    headerSubtitle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff'
    }
});



export default theWelcome;