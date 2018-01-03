import React, { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import Button from './Button'


class NoMoreCards extends Component {


    render() {

        const { correct, wrong, name } = this.props
        let total = correct + wrong

        return (
            <View style={styles.container} >

                <Text style={{ marginTop: 20, fontSize: 40, }} >Quiz result</Text>

                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 12, color: 'black', margin:20, justifyContent: 'center', alignItems: 'center',textAlign: 'center',
                    }}>Correct {correct}</Text>
                    <Text style={{fontSize: 12,color: 'black', margin:20, justifyContent: 'center', alignItems: 'center',textAlign: 'center',
                    }}>Wrong {wrong}</Text>
                </View>


                <View style={styles.box}>
                    <Text style={styles.score}>{Math.round((correct / total) * 100)}%</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() =>
                            this.props.navigation.navigate('StartQuiz', { name: name }, { params: { param: name } })
                        }>
                        <Text style={styles.text}> Restart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resultbutton}
                        onPress={() =>
                            this.props.navigation.navigate('DeckDetail', { name: name, length: total })}>
                        <Text style={styles.text}>  Deck </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    resultbutton: {
        backgroundColor: 'black',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30

    },
    box: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    score: {
        fontSize: 50,
        color:'white'
    }
})

export default NoMoreCards