import React, { Component } from 'react';
import { Text, Keyboard , TouchableOpacity} from 'react-native';
import Input from './input';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';
import { addCard } from '../actions/DeckList'
import { connect } from 'react-redux';

class AddCard extends Component {

    componentDidMount() {
        const { name, length } = this.props.navigation.state.params
        this.setState({ qlength: length })
    }

    static navigationOptions = ({ navigation }) => (

        {
            headerRight: (
                <TouchableOpacity
                    title={'Home'}
                    onPress={() => navigation.navigate('DeckList')}
                >
                    <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>Home</Text>
                </TouchableOpacity>
            ),
        })

    state = {
        question: '',
        answer: '',
        qlength:0
    };

    submit() {
        const { name, length } = this.props.navigation.state.params
        const data = {
            question: this.state.question,
            answer: this.state.answer
        }
        if (this.state.question === ''|| this.state.answer === '') {
            alert('This field is required')
        }
        else {
            this.props.addCard(name, data)
            let newLength = length + 1
            this.props.navigation.navigate('DeckDetail', { name: name, length: newLength })
            Keyboard.dismiss()
        }
     

    }
    render() {
       
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.navigation.state.params.name}</Text>
                    <Input
                        label='Question'
                        placeholder='How many states are in the United States ?'
                        value={this.state.question}
                        onChangeText={question => this.setState({ question })}
                    />
                    <Input
                      
                        label='Answer'
                        placeholder='50'
                        value={this.state.answer}
                        onChangeText={answer => this.setState({ answer })}
                    />
                    <Button onPress={this.submit.bind(this)}>
                    Submit
                    </Button>
                    </CardSection>
                </Card>
            )
    }
}




export default connect(null, {addCard})(AddCard)
