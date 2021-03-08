import React, { Component } from 'react'
import {shuffle} from 'lodash';

import Card from './../Card/Card';

import './CardGame.scss';

import crab from './../../assets/crab.png';
import dolphin from './../../assets/dolphin.png';
import fish from './../../assets/fish.png';
import kraken from './../../assets/kraken.png';
import octopus from './../../assets/octopus.png';
import shrimp from './../../assets/shrimp.png';
import turtle from './../../assets/turtle.png';
import whale from './../../assets/whale.png';

class CardGame extends Component{
    constructor(props){
        super(props);
        this.state ={
            cards: [
                {name: 'crab', open: false, id: 1, image : crab , isCompleted: false},
                {name: 'dolphin', open: false, id: 2, image : dolphin , isCompleted: false},
                {name: 'fish', open: false, id: 3, image : fish , isCompleted: false},
                {name: 'kraken', open: false, id: 4, image : kraken , isCompleted: false},
                {name: 'octopus', open: false, id: 5, image : octopus , isCompleted: false},
                {name: 'shrimp', open: false, id: 6, image : shrimp , isCompleted: false},
                {name: 'turtle', open: false, id: 7, image : turtle , isCompleted: false},
                {name: 'whale', open: false, id: 8, image : whale , isCompleted: false},
                {name: 'crab', open: false, id: 9, image : crab , isCompleted: false},
                {name: 'dolphin', open: false, id: 10, image : dolphin , isCompleted: false},
                {name: 'fish', open: false, id: 11, image : fish , isCompleted: false},
                {name: 'kraken', open: false, id: 12, image : kraken , isCompleted: false},
                {name: 'octopus', open: false, id: 13, image : octopus , isCompleted: false},
                {name: 'shrimp', open: false, id: 14, image : shrimp , isCompleted: false},
                {name: 'turtle', open: false, id: 15, image : turtle , isCompleted: false},
                {name: 'whale', open: false, id: 16, image : whale , isCompleted: false},
            ],
            flippedCards: [],
            matchedCards: [],
            shuffledCards: [],
            isOpen: false,
            score: 0
        }
    }
    componentDidMount(){
        this.setState({ shuffledCards: shuffle(this.state.cards) })
    }
    onClickHandler = (animals, index) => {
        if(this.state.flippedCards.length === 2){
            setTimeout(() => {
                this.check()
            }, 750)
        }else {
            let flippedCards = this.state.flippedCards;
            let shuffledCards = this.state.shuffledCards;
            shuffledCards[index].open = true;
            flippedCards.push(animals);
            this.setState({
                flippedCards,
                shuffledCards
            })
            if(this.state.flippedCards.length === 2){
                setTimeout(() => {
                    this.check()
                }, 750)
            }
        }
    }

    check = () => {
        console.warn('isCheck');
        let shuffledCards = this.state.shuffledCards;
        let matchedCards = this.state.matchedCards;


        if((this.state.flippedCards[0].name === this.state.flippedCards[1].name)){
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).isCompleted = true;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).isCompleted = true;
            matchedCards.push(this.state.flippedCards[0], this.state.flippedCards[1]) 
        }else {
            shuffledCards.find(card => card.id === this.state.flippedCards[0].id).open = false;
            shuffledCards.find(card => card.id === this.state.flippedCards[1].id).open = false;
        }

        this.setState({
          matchedCards,
          flippedCards: []
        })
    }
        render() {
            return(
                <div className="card-container">
                    { this.state.shuffledCards.map(
                        (animals, index) =>
                        <Card
                        open ={animals.open}
                        animals = {animals}
                        onClickHandler={() => this.state.flippedCards.length === 2 ? null : this.onClickHandler (animals,index)}
                        />
                    )}
                </div>
            )
        }

    
}


export default CardGame;