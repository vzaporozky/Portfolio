import React, {useState} from "react";
import classes from './DropDownList.module.css'

const DropDownList = () => {
    const [state, setState] = useState(false)
    const [howToDo, setHowToDo] = useState(false)

    const changeState = () => {
        setState(!state)
        setHowToDo(false)
    }

    const changeHowToDo = (event) => {
        event.stopPropagation()
        setHowToDo(!howToDo)
    }
    

    return (
        <div className={classes.container} onClick={changeState}>
            <div className={classes.block}>
                <img src="./images/Hangman_main.png" alt="" />
                <h1>HangMan</h1>
            </div>
            <div className={state ? classes.description_disp : classes.none}>
                <ul className={classes.list}>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li style={{marginRight:'30px'}}>HTML</li>
                    <li>REACT</li>
                    <li>SASS</li>
                </ul>
                <p style={{marginTop:'20px'}} onClick={event => event.stopPropagation()}>The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. 
                    When the user starts the game, a random word is generated from the selected category and is displayed on the screen as underscores. 
                    The user can guess a letter from the English alphabet by clicking on the corresponding button, and the game will indicate whether the letter is in the word or not. 
                    If the user guesses a letter correctly, it will replace one or more of the underscores with that letter. 
                    If the user guesses incorrectly, a part of the hangman will be drawn, with each incorrect guess drawing another part of the hangman. 
                    The game continues until either the user correctly guesses the word or the hangman is fully drawn. 
                    The user can choose to play again after they win or lose the game. 
                    The app uses the HTML5 canvas to draw the hangman and has a limit of 10 incorrect guesses before the user loses. 
                    The app also provides a clue for the selected word and the category from which the word is chosen.
                </p>

                <p  onClick={event => event.stopPropagation()} style={{marginTop:'20px'}}>First version of the application: 
                    <a href="https://github.com/vzaporozky/Hang_man" style={{color: "white"}}>https://github.com/vzaporozky/Hang_man</a>
                </p>
                
                <button className={classes.button} onClick={changeHowToDo}>How To Do It</button>
                <ul className={howToDo ? classes.howToDoIt_list : classes.none} onClick={event => event.stopPropagation()}>
                    <li>The app is written in React and uses hooks to manage state.</li>
                    <li>The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with.</li>
                    <li>The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect.</li>
                    <li>The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly.</li>
                    <li>The app has functions to randomly select a word and to display the hidden word with blanks for unguessed letters.</li>
                    <li>The app includes functions to draw the various parts of the hangman on the canvas as the player guesses incorrectly.</li>
                    <li>The app includes a function to clear the canvas after each round.</li>
                    <li>The app has a function to create the HTML for the game, which is called when the user clicks the "Play" button.</li>
                    <li>The app uses various state variables to manage the game, including the selected class for each letter button, the number of lives remaining, 
                        whether the player has won or lost, the count of incorrect guesses, the clue for the selected word, the category of the selected word, the selected word itself, 
                        the hidden word with blanks, the incorrectly guessed letters, the current status of the game ("Play" or "Try Again"), the copy of the selected word, 
                        and the count of incorrect guesses for drawing the hangman.</li>
                    <li>The app uses useEffect hook to keep track of the state changes of certain variables and call a function when these changes occur.</li>
                    <li>The app has a nice user interface with clear instructions, and it is easy to play.</li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownList;