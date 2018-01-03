import { GET_NEW_DECK , GET_CARD, FETCH_DECKS, EMPTY_DECK, DELETE_DECK} from '../actions/DeckList';



const DeckListReducer = (state = {} , action) => {
    switch (action.type) {
        case GET_NEW_DECK:
            let a = {
                [action.deck]: {
                    title: action.deck,
                    questions: []
                }
            }
            if (Object.keys(a).length < 0) {
                return { ...a }
            }
            else {
                let b = Object.assign(state, a)
                return {...b}
            }

        case FETCH_DECKS:
            return {...state,...action.decks }

        case EMPTY_DECK:
            return {}

        case GET_CARD:
         
            let newState = state;
            newState[action.title].questions.push(action.data)
            return { ...newState }

        case DELETE_DECK:
            let newstate = state;
            delete newstate[action.title]
            return newstate  
         
       
        default:
            return state
    }
}

export default DeckListReducer