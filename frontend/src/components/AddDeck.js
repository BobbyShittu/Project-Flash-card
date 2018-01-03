import React, { Component , PropTypes} from 'react';
import { addDeck } from '../actions/DeckList';
import { connect } from 'react-redux';
import Input from './input'
import Card from './Card';
import Button from './Button';
import uuid from 'uuid';
import { saveDeckTitle } from '../../API'



class AddDeck extends Component {
   state = {
           title:''

        }

   //static propTypes = {
   //    navigation:PropTypes.object
   //}

   submit() {
       if (this.state.title === '') {
           alert('This field is required')
       }
       else {
           this.props.getTitle(this.state.title)
           this.props.navigation.navigate('DeckDetail', { name: this.state.title, length: 1 })
       }
    
   }

   onChange(title) {
       this.setState({ title })
   }
  
   render() {
      
        return (
            <Card>
                    <Input
                        name='title'
                        label='What is the title of your new deck?'
                    placeholder='My Deck'
                    value={this.state.text}
                    onChangeText={this.onChange.bind(this)}
                />
                <Button onPress={this.submit.bind(this)}>
                    Submit
                    </Button>
            </Card>
        )
    }
}



     function mapDispatchToProps(dispatch, { navigation }) {
        
            
              return {
                  getTitle: (title) => {
                      dispatch(addDeck(title))
                  }
     }
}



export default connect(null, mapDispatchToProps)(AddDeck)