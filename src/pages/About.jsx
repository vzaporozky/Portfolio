import React from "react";
import classes from "./About.module.css"
import DropDownList from "../components/UI/DropDownList/DropDownList"

const About = () => {
    return (
        <div className={classes.about}>
            <h1>About</h1>
            <p>На этой странице вы можете найти все мои пет-проекты, которые я сделал на HTML, CSS, JavaScript и React</p>
            <DropDownList 
                name='HangMan'
                img='./images/Hangman_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. 
                    When the user starts the game, a random word is generated from the selected category and is displayed on the screen as underscores. 
                    The user can guess a letter from the English alphabet by clicking on the corresponding button, and the game will indicate whether the letter is in the word or not. 
                    If the user guesses a letter correctly, it will replace one or more of the underscores with that letter. 
                    If the user guesses incorrectly, a part of the hangman will be drawn, with each incorrect guess drawing another part of the hangman. 
                    The game continues until either the user correctly guesses the word or the hangman is fully drawn. 
                    The user can choose to play again after they win or lose the game. 
                    The app uses the HTML5 canvas to draw the hangman and has a limit of 10 incorrect guesses before the user loses. 
                    The app also provides a clue for the selected word and the category from which the word is chosen.'
                linkGit='https://github.com/vzaporozky/Hang_man'
                listDesc={['The app is written in React and uses hooks to manage state.',
                    'The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with. ',
                    'The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect. ',
                    'The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly. ',
                    'The app has functions to randomly select a word and to display the hidden word with blanks for unguessed letters. ',
                    'The app includes functions to draw the various parts of the hangman on the canvas as the player guesses incorrectly. ',
                    'The app includes a function to clear the canvas after each round',
                    'The app has a function to create the HTML for the game, which is called when the user clicks the "Play" button',
                    'The app uses various state variables to manage the game, including the selected class for each letter button, the number of lives remaining, whether the player has won or lost, the count of incorrect guesses, the clue for the selected word, the category of the selected word, the selected word itself, the hidden word with blanks, the incorrectly guessed letters, the current status of the game ("Play" or "Try Again"), the copy of the selected word, and the count of incorrect guesses for drawing the hangman.',
                    'The app uses useEffect hook to keep track of the state changes of certain variables and call a function when these changes occur.',
                    'The app has a nice user interface with clear instructions, and it is easy to play.'
                ]}
            />
            <DropDownList 
                name='HangMan'
                img='./images/Hangman_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. '
                linkGit='https://github.com/vzaporozky/Hang_man'
                listDesc={['The app is written in React and uses hooks to manage state.',
                    'The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with. ',
                    'The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect. ',
                    'The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly. '
                ]}
            />
            <DropDownList 
                name='HangMan'
                img='./images/Hangman_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. '
                linkGit='https://github.com/vzaporozky/Hang_man'
                listDesc={['The app is written in React and uses hooks to manage state.',
                    'The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with. ',
                    'The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect. ',
                    'The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly. '
                ]}
            />
            <DropDownList 
                name='HangMan'
                img='./images/Hangman_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. '
                linkGit='https://github.com/vzaporozky/Hang_man'
                listDesc={['The app is written in React and uses hooks to manage state.',
                    'The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with. ',
                    'The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect. ',
                    'The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly. '
                ]}
            />
            <DropDownList 
                name='HangMan'
                img='./images/Hangman_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='The HangMan app is a game built using React that allows the user to play the popular word-guessing game, HangMan. 
                    The game has three categories: Premier League Football Teams, Films, and Cities. '
                linkGit='https://github.com/vzaporozky/Hang_man'
                listDesc={['The app is written in React and uses hooks to manage state.',
                    'The app includes an array of categories, hints, and words. These arrays are used to randomly select a word to play with. ',
                    'The app includes an alphabet array that is used to display buttons for each letter of the alphabet. Clicking a button marks that letter as either correct or incorrect. ',
                    'The app includes a canvas element that is used to draw the hangman as the player guesses incorrectly. '
                ]}
            />
        </div>
    )
}
export default About;