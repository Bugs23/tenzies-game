import React from "react"
import "./style.css"

import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

export default function App() {
	const [dice, setDice] = React.useState(allNewDice())

	const [tenzies, setTenzies] = React.useState(false)

	// helper functiom fpr generating a new die that returns an object with all the dice properties
	function generateNewDie() {
		return {
	        		value: Math.ceil(Math.random() * 6), 
	        		isHeld: false,
	        		id: nanoid()
        		}	
	}

	React.useEffect(() => {
		// check if every dice is being held
		const allHeld = dice.every((die) => die.isHeld)
		// get the number being held in the first dice
		const firstValue = dice[0].value
		// check if every dice has the same number
		const sameNumber = dice.every((die) => die.value === firstValue)

		// if all dice are being held and all dice have the same number change tenzies to true
		if (allHeld && sameNumber) {
			setTenzies(true)
		}

	}, [dice])

    function allNewDice() {
        // create a new dice array to hold the numbers
        const newDice = []
        // loop 10 times
        for (let i = 0; i < 10; i++) {
            // push object with a value property set to the random number 
            // and an isHeld property set to false
        	newDice.push(generateNewDie())
        }
        // return newDice
        return newDice
    }

    function rollDice() {
    	setDice((oldDice) => {
    		return oldDice.map((die) => {
    			return die.isHeld ? die : generateNewDie()
    		})
    	})
    }

    function holdDice(id) {
    	setDice((oldDice) => {
    		return oldDice.map((die) => {
    			return die.id === id ? {...die, isHeld: !die.isHeld} : die
    		})
    	})
    }

    const diceElements = dice.map((die) => 
    	<Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    )

	return (
		<main>
			{tenzies && <Confetti />}
			<h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			<div className="dice-container">
				{diceElements}
			</div>
			<button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
		</main>
	)
}