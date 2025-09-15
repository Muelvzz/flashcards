import '../css/cards.css'
import Questions from './Questions.js'
import React from 'react'

export default function Card() {

    const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
    const [isFlipped, setIsFlipped] = React.useState(true)

    let showCard = isFlipped ? Questions[currentCardIndex].definition : Questions[currentCardIndex].term

    function toggleCard() {
        setIsFlipped(!isFlipped)
    }

    function nextCard() {
        if (currentCardIndex === Questions.length - 1){
            setCurrentCardIndex(currentCardIndex)
        } else {
            setCurrentCardIndex(currentCardIndex + 1)
        }
    }

    function prevCard() {
        if (currentCardIndex === 0){
            setCurrentCardIndex(currentCardIndex)
        } else {
            setCurrentCardIndex(currentCardIndex - 1)
        }
    }

    return (
        <>
            <div className="card-container">
                <div className="card-container-label">
                    <p>Back</p>
                </div>
                <div className="card-container-flashcard">{showCard}</div>
                <div className="card-container-button">
                    <button onClick={prevCard}>PREVIOUS</button>
                    <button onClick={toggleCard} >FLIP</button>
                    <button onClick={nextCard}>NEXT</button>
                </div>
            </div>
        </>
    )
}