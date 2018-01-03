import { combineReducers } from 'redux';
import DeckListReducer from './DeckListReducer';
import loadingDeck from './LoadingDeck'

const reducer = combineReducers({
    Deck: DeckListReducer,
    loading:loadingDeck
})

export default reducer