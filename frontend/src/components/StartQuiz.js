import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeCards from 'react-native-swipe-cards'
import Questions from './Questions'
import NoMoreCards from './NoMoreCards'






class StartQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            correct: 0,
            wrong: 0,
            name: '',
            position: 1
        };
    }

    componentDidMount() {
        let deck = this.props.decks
        let name = this.props.navigation.state.params.name

        let data = Object.keys(deck).reduce((pre, item) => {
            return deck[name]
        }, [])
        this.setState({card: data,name})
    }

    handleYup = (card) => {
        this.setState(prevState => {
            return{correct:prevState.correct + 1, position:prevState.position + 1 }
        })
        console.log(`correct for ${card.answer}`)
    }

    handleNope = (card) => {
        this.setState(prevState => {
            return { wrong: prevState.wrong + 1, position: prevState.position + 1 }
        })
        console.log(`wrong for ${card.answer}`)
    }

    render() {
        return (
            <SwipeCards
                stack={true}
                cards={this.state.card.questions}
                renderCard={(cardData) => <Questions cardData={cardData} {...this.state} />}
                renderNoMoreCards={() => <NoMoreCards {...this.state} {...this.props} />}
                handleYup={this.handleYup}
                handleNope={this.handleNope}
            />
            )
    }

}


const mapStateToProps = (state) => {
    return {
        decks:state.Deck
    }
}



export default connect(mapStateToProps)(StartQuiz)