import * as API from '../../API';
export const GET_NEW_DECK = 'GET_NEW_DECK';
export const GET_CARD = 'GET_CARD';
export const FETCH_DECKS = 'FETCH_DECKS';
export const LOADING_DECKS = 'LOADING_DECKS';
export const EMPTY_DECK = 'EMPTY_DECK';
export const DELETE_DECK = 'DELETE_DECK'


export const getNewDeck = (deck) => {
    return {
        type: GET_NEW_DECK,
        deck
        
    }
}

export const fetchDecks = (decks) => {
    return {
        type: FETCH_DECKS,
        decks
    }
}

export const loadingDecks = (ans) => {
    return {
        type: LOADING_DECKS,
        ans
    }
}

export const emptyDeck = () => {
    return {
        type: EMPTY_DECK,

    }
}

export const getCard = (title, data) => {
    return {
        type: GET_CARD,
        title,
        data
    }
}

export const removeDeck = (title, data) => {
    return {
        type: DELETE_DECK,
        title,
        data
    }
}

export const emptyDecks = (data) => {
    return function (dispatch) {
        return API.clearDeck(dispatch(emptyDeck()))

    }
}

export const addDeck = (title) => {
    return function (dispatch) {
        return API.saveDeckTitle(title)
            .then((resp) => {
                dispatch(getNewDeck(title))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getDecks = () => {
    return function (dispatch) {
        return API.getDecks()
            .then((resp) => {
                dispatch(fetchDecks(resp))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const addCard = (title, data) => {
    return function (dispatch) {
        return API.addCardToDeck(title, data) 
            .then((resp) => {
                dispatch(getCard(title, data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const deleteDeck = (title, data) => {
    return function (dispatch) {
        return API.removeDeck(data)
            .then((resp) => {
                dispatch(removeDeck(title, data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}