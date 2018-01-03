import React, {Component } from 'react';
import { Text, ScrollView,View, StyleSheet , FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { getDecks , emptyDecks, deleteDeck} from '../actions/DeckList';
import { MaterialIcons } from '@expo/vector-icons';


class DeckList extends Component {


    componentDidMount() {
        this.props.getDecks()
        //this.props.emptyDecks()
    }                                                                                                                                                                                                                

    
    _keyExtractor = (item, index) => item.id

    delete = (obj) => {
        this.props.deleteDeck(obj.item.title, obj.item)
    }

    renderList = (obj) => {
        var swipeToDelete = [{
            text: 'Delete',
            backgroundColor: 'red',
            onPress: () => {
                this.delete(obj)
            }
        }]

        return (
            <Swipeout right={swipeToDelete} autoClose backgroundColor="#faebd7" >
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('DeckDetail', { name: obj.item.title, length: obj.item.amount })}>
                <View style={styles.cardstyle}>
                    <Text style={styles.text}>{obj.item.title}</Text>
                    <Text style={styles.text}>{obj.item.amount}</Text>
                </View>
            </TouchableOpacity>
                </Swipeout>
            )
    }

    render() {
       
        let deck = this.props.decks
        let data
        console.log(deck)
        if (deck === null) {
            data = []
        }
        else {
            data = Object.keys(deck).reduce((b, item) => {
                b.push({
                    id: Math.random(),
                    title: deck[item].title,
                    amount: deck[item].questions.length
                })
                return b
            }, [])
            console.log(data.length)
        }

        if (this.props.loading === false) {
            return (
                <View>
                    <ActivityIndicator
                        color='black'
                        size='large'
                    />
                </View>
            )
        }
        else {
            if (data.length > 0) {
                return (
                    <ScrollView>

                        <View style={styles.containerStyle}>
                            <FlatList data={data}
                                renderItem={this.renderList}
                                keyExtractor={this._keyExtractor} />
                        </View>
                    </ScrollView>
                )
            }
            else {
                return (
                    <View>
                        <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center' }}> No Deck at the moment </Text>
                        </View>
                        <TouchableOpacity style={{ padding: 10, bottom: 0, alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate(
                                'AddDeck')} >
                            <MaterialIcons name="add-circle-outline" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            }

        } 
          
    }
}
const styles = {
    containerStyle: {
        margin: 15,
        marginTop:50
    },
    cardstyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    text: {
        fontSize: 20,
        lineHeight:60
    }
};


const mapStateToProps = (state) => {
    console.log(state)
    return {
        decks: state.Deck
    }
}



export default connect(mapStateToProps, {getDecks, emptyDecks, deleteDeck})(DeckList)