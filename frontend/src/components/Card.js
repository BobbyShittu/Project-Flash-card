import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
            </View>
        )
    
}

const styles ={
    containerStyle: {
        flex:1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        justifyContent: 'space-around',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        margin: 5,
        marginTop:25
    }
}

export default Card;