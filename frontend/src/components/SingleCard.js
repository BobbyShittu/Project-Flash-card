import React from 'react';
import { View } from 'react-native';



const SingleCard = (props) => {

    return (
        <View syle={styles.containerStyle}>
            {props.children}
        </View>
        
        )
}


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        margin: 5,
        marginTop: 10
    }
}

export default SingleCard