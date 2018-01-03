import React from 'react';
import { Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}  style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
        )

}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
    
    }
}

export default Button;