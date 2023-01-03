import React from "react"
import "./style.css"

import Die from "./Die"

export default function App() {
    function allNewDice() {
        // create a new dice array to hold the numbers
        const newDice = []
        // loop 10 times
        for (let i = 0; i < 10; i++) {
            // push a random number from 1-6 to the new dice array
        	newDice.push(Math.ceil(Math.random() * 6))
        }
        // return newDice
        return newDice
    }

	return (
		<main>
			<div className="dice-container">
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
				<Die value="1"/>
			</div>
		</main>
	)
}