import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
        )
}

const styles = {

    containerStyle: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#ddd',
    }
}

export default CardSection