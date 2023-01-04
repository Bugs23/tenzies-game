import React from "react"
import "./style.css"

import Die from "./Die"

export default function App() {
	const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        // create a new dice array to hold the numbers
        const newDice = []
        // loop 10 times
        for (let i = 0; i < 10; i++) {
            // push object with a value property set to the random number 
            // and an isHeld property set to false
        	newDice.push({
        		value: Math.ceil(Math.random() * 6), 
        		isHeld: false
        	})
        }
        // return newDice
        return newDice
    }

    function rollDice() {
    	setDice(allNewDice())
    }

    const diceElements = dice.map((die) => <Die value={die.value} />)

	return (
		<main>
			<div className="dice-container">
				{diceElements}
				<button className="roll-dice" onClick={rollDice}>Roll Dice</button>
			</div>
		</main>
	)
}