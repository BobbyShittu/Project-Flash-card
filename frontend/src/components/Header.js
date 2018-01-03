import React from 'react';
import {Text,View, StyleSheet } from 'react-native';



const Header = (props) => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textstyle}>{props.headerText}</Text>   
            </View>
        )
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity:0.4
    }
})

export default Header