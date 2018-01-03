import { LOADING_DECKS } from '../actions/DeckList'


export default function loadingDeck(state = Boolean, action) {
    switch (action.type) {
        case LOADING_DECKS:
            return action.isLoading;

        default:
            return state;
    }
}



