import React, { Component} from 'react';
import { Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import Card from './Card';
import { connect } from 'react-redux'
import Button from './Button';
import {clearLocalNotification, setLocalNotification} from '../../notifications'



class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => (

        {
            title: navigation.state.params.name,
            headerRight: (
                <TouchableOpacity
                    title={'Home'}
                    onPress={() => navigation.navigate('DeckList')}
                >
                    <Text style={{ color:'white', fontSize:20, padding: 10 }}>Home</Text>
                 </TouchableOpacity>
            ),
        })

    startQuiz = () => {
        let deck = this.props.decks
        const name = this.props.navigation.state.params.name
        const dlength = deck[name].questions.length
        if (dlength < 1) {
            alert('No Cards available, Please add Card')
        }
        else {
            alert('Swipe card right for Correct and Swipe left for Incorrect')
            this.props.navigation.navigate('StartQuiz', {name:name, length:dlength})
        }
        clearLocalNotification()
        .then(setLocalNotification)
    }

    render() {
        let deck = this.props.decks
        let dlength;
        let name = this.props.navigation.state.params.name

        if (deck[name] === undefined) {
            dlength = 0
        }
        else {
            dlength = deck[name].questions.length
        }
       
        return (
            <Card>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{dlength} cards</Text>
                <Button onPress={() => this.props.navigation.navigate('AddCard',  { name: name, length:dlength })}>
                    
                        <Text>Add Card</Text>
                    
                </Button>
                <Button onPress={this.startQuiz}>
                    
                        <Text>Start Quiz</Text>
                   
                </Button>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 40
    },
    text: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
});


const mapStateToProps = (state) => {
    return {
        decks: state.Deck
    }
}

export default connect(mapStateToProps)(DeckDetail)