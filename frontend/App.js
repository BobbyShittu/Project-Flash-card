import React, {Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import DeckList from './src/components/DeckList';
import AddDeck from './src/components/AddDeck';
import AddCard from './src/components/AddCard';
import DeckDetail from './src/components/DeckDetail';
import StartQuiz from './src/components/StartQuiz';
import { createStore , compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import  logger  from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';
import reducer from './src/reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import uuid from 'uuid';
import { setLocalNotification } from './notifications'




const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor}) => <Ionicons name='ios-albums' size={30} color={tintColor}/>
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor}) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: 'black',
            style: {
                height: 56,
                backgroundColor: 'white',
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset: {
                    width: 0,
                    height:3
                },
                shadowRadius: 6,
                shadowOpacity:1
            }
        }
    })


const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        }
    },

    DeckDetail: {
        screen: DeckDetail,
        navigationOptions:
            {
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'black'
                }
            }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions:
        {
            headerTintColor: 'white',
            headerTitle: 'Add Card',
            headerStyle: {
                backgroundColor: 'black'
            }
        }
    },
    StartQuiz: {
        screen: StartQuiz,
        navigationOptions:
        {
            headerTintColor: 'white',
            headerTitle: 'Quiz',
            headerStyle: {
                backgroundColor: 'black'
            }
        }
    },
    

})

export const key = uuid()

const middlewares = [
   
    thunkMiddleware, logger
]

const store = createStore(reducer, compose(applyMiddleware(...middlewares)))


class App extends Component {

    componentDidMount() {
        setLocalNotification()
    }

    render() {
      
        return(
        <Provider store={store}>
            <View style={{ flex: 1 }}>
            <MainNavigator/>

            </View>
            </Provider>
            
    );

    }
}
export default App
