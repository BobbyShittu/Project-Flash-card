import React from 'react';
import { TextInput, View, Text } from 'react-native'


const Input = ({label, value, onChangeText, placeholder}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
        )
}

const styles = {
    inputStyle: {
        height: 40,
       width:350,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10, 
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        
    },
    labelStyle: {
        fontSize: 30,
        paddingLeft: 20,
        
    },
    containerStyle: {
        height: 40,
        alignItems:'center'
    }
}

export default Input