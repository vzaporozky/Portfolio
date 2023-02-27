import React from "react";
import classes from "./About.module.css"
import DropDownList from "../components/UI/DropDownList/DropDownList"

const About = () => {
    return (
        <div className={classes.about}>
            <h1>About</h1>
            <p>На этой странице вы можете найти все мои пет-проекты, которые я сделал на HTML, CSS, JavaScript и React</p>
            <DropDownList 
                name='ChatGPT Clone'
                img='./images/ChatGPT_main.png'
                listTech={['REACT','JavaScript','CSS',]}
                description='This application is a simple chat based on the OpenAI API. The user can enter text messages into the input field and send them by clicking on a button. 
                After sending a message, the OpenAI API processes it and returns a response message, which is displayed in the chat box. Messages are displayed in reverse chronological order, 
                with the newest messages at the top and older messages at the bottom. Additionally, the user can continue the conversation by entering the command 
                "continue" or its equivalent in another language. In this case, the previous response will be used as context for the next request'
                listDesc={[
                    'Create a new project in your IDE and install necessary dependencies, including the React library and the openai package for working with the API',
                    'Create a file to store the API key that will be used for authentication when making requests to the API. For example, a file named keyAPI.jsx',
                    'Create the ChatGPT component and import necessary dependencies: React, useState for managing the component`s state, OpenAIApi and Configuration for working with the OpenAI API, as well as the arrayItems array and the ChatGPT.module.css style file',
                    'In the ChatGPT component, create an instance of the Configuration class, passing in the API key from the keyAPI.jsx file',
                    'Create an instance of the OpenAIApi class, passing in the created configuration object.',
                    'Create the necessary component states, including the input string for storing the user`s message text, the previous bot response text prevTextOfBot, the result array for storing message history, and the option option for passing request parameters to the API.',
                    'Create the doStuff function for processing user messages. Inside the function, call the createCompletion method of the openai instance, passing in the option object created from the current values of input and prevTextOfBot. Get the bot response text from the text property of the first element in the choices array of the API response. Update the component states: add the current user message to the beginning of the result array, update prevTextOfBot with the new bot response text, and add the current user message and new bot response text to the beginning of the result array. Reset the input string.',
                    'Return the markup from the ChatGPT component with two blocks: the input block and the output block. In the input block, place an input field for the user`s message text and a send message button. In the output block, place a list of results consisting of several blocks, where each block will display one message from the result array, including the message author and text. Display the message list in reverse order - the newest messages should be on top.',
                    'Set an onChange event handler for the input field to update the input state in real time.',
                    'Set an onClick event handler for the send message button to call the doStuff function when the button is clicked',
                ]}
            />
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
                name='Color Game'
                img='./images/ColorGame_main.png'
                listTech={['JavaScript','CSS','HTML','REACT','SASS']}
                description='This is a simple color guessing game called "The Great Guessing Game". The game consists of a set of color blocks displayed on the screen, and the player`s task is to guess the correct color from a given set of options. The game offers two levels of difficulty - Easy and Hard, which affects the number of color blocks displayed.

                The game starts by generating a random color from the set of available colors, and the player must select the color block that matches this color. If the player selects the correct block, a success message is displayed. If not, the player is allowed to keep guessing until the correct color is selected.
                
                The game includes a "New Color" button that generates a new set of random colors for the player to guess. It also includes a result message that displays whether the player`s guess was correct or not. Additionally, the game offers a "Select" button to choose the difficulty level between Easy and Hard.
                
                Overall, this is a simple yet enjoyable game that tests the player`s ability to recognize and distinguish between different colors.'
                linkGit='https://github.com/vzaporozky/Color_Game'
                listDesc={['Create a new React component called "ColorGame" using the useState and useEffect hooks.',
                    'Inside the ColorGame component, create a nested functional component called "ColorBlock" which returns a div element with the class "color_game_color". The ColorBlock component should accept props and spread them onto the div element',
                    'Define the "colors" state variable as an array of six objects, each with the properties "backgroundColor", "display", and "i". The "backgroundColor" and "display" properties should be initially empty strings and the "i" property should be a unique integer value for each object.',
                    'Define the "randomColor" function that takes an element as an argument and generates a random RGB color value for its background color.',
                    'Define the "chooseColors" function that sets the "result" and "permissionChoose" variables to their default values and generates random colors for each color block based on the current difficulty level. It also selects a random color from the generated colors to be the color to guess.',
                    'Define the "selectComplex" function that sets the "hard_button" or "easy_button" variables to true or false based on which difficulty level button was clicked. It also sets the "display" property of the last three color blocks in the "colors" array to either "block" or "none" depending on the selected difficulty level, and calls the "chooseColors" function.',
                    'Define the "colorBlockOnClick" function that checks whether the player is allowed to make a guess and whether their guess matches the color to guess. If the guess is incorrect, it sets the "result" variable to "Try again" and changes the background color of the clicked block to gray. If the guess is correct, it sets the "result" variable to "Success", sets the "permissionChoose" variable to false, and changes the background color of all color blocks to the correct color.',
                    'Use the useEffect hook to call the "chooseColors" function when the component mounts',
                    'Render the game UI with a heading that displays the current color to guess, buttons to select the difficulty level, buttons to generate new colors and display the result of the player`s guess, and a grid of six color blocks generated by mapping over the "colors" array and passing each object as props to the ColorBlock component.'
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