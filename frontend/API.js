import { AsyncStorage } from 'react-native';


const TITLE_KEY = 'Flashcards:db'

export const getDecks=()=>{
   return  AsyncStorage.getItem(TITLE_KEY)
        .then((data) => {
            return JSON.parse(data)
        })
}

export  const getDeck=()=>{
    AsyncStorage.setItem(TITLE_KEY)
        .then((result) => {

        })

}

export const removeDeck= (deck) => {
    return AsyncStorage.getItem(TITLE_KEY)
        .then((resp) => {
            const data = JSON.parse(resp)
            data[deck.title] = undefined
            delete data[deck.title]
            AsyncStorage.setItem(TITLE_KEY, JSON.stringify(data))
        })
}

export const clearDeck= ()=> {
    AsyncStorage.removeItem(TITLE_KEY)
        .then((err) => {
        })
}

export const saveDeckTitle = (data) => {

    let b = {
        [data]: {
            title: data,
            questions:[]
        }
    }


    return AsyncStorage.mergeItem(TITLE_KEY, JSON.stringify(b))
}

export const addCardToDeck = (title,data) => {
    return AsyncStorage.getItem(TITLE_KEY)
        .then((resp) => {
            const deck = JSON.parse(resp)
            deck[title].questions.push(data)
            AsyncStorage.setItem(TITLE_KEY, JSON.stringify(deck))
            return JSON.parse(resp)
        })
}