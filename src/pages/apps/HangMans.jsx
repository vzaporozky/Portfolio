import React, {useState, useEffect, useRef} from "react";

const HangMan = () =>{

    const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z']);

            const arrCategor = [
        ["everton", "liverpool", "swansea", "chelsea", "hull"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    const arrHint = [
        ["Based in Mersyside", "Based in Mersyside", 
        "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", 
        "Once managed by Phil Brown"],

        ["Science-Fiction horror film", "1971 American action film", "Historical drama", 
        "Anamated Fish", "Giant great white shark"],

        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", 
        "Netherlands capital", "Czech Republic capital"]
    ];

    const category = [
        "The Chosen Category Is Premier League Football Teams", 
        "The Chosen Category Is Films", 
        "The Chosen Category Is Cities"];

    const [selectedClass, setSelectedClass] = useState(false);
    const [lives, setLives] = useState(true);
    const [win, setWin] = useState(null);
    const [lost, setLost] = useState(null);
    const [count, setCount] = useState(10);
    const [clue, setClue] = useState('');
    const [categoryClue, setCategoryClue] = useState('');
    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState('');
    const [wr, setWr] = useState('');
    const [play, setPlay] = useState('Play');
    

    let nextStick;
    let stickCount = 9;
    let indexArr, indexWord;

    function randomWord(){
        indexArr = Math.floor(Math.random()*3);
        indexWord = Math.floor(Math.random()*5);
        return [arrCategor[indexArr][indexWord], arrHint[indexArr][indexWord], category[indexArr]]
    }
    
    function displayWord(word){
        let displayedWord = '';
        for (let i = 0; i < word.length; i++){
            if (word[i] === '-'){
                displayedWord += '- ';
            }
            else {
                displayedWord += '_ ';
            }
        }
        return displayedWord
    }

    
     const canvasRef = useRef(null);
  
    const head = function(){
        const myStickman = canvasRef.current;
        const context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }
        
    const draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        const myStickman = canvasRef.current;
        const context = myStickman.getContext('2d');
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke(); 
    }

    const frame1 = function() {draw (0, 150, 150, 150)}
    const frame2 = function() {draw (10, 0, 10, 600)}
    const frame3 = function() {draw (0, 5, 70, 5)}
    const frame4 = function() {draw (60, 5, 60, 15)}
    const torso = function() {draw (60, 36, 60, 70)}
    const rightArm = function() {draw (60, 46, 100, 50)}
    const leftArm = function() {draw (60, 46, 20, 50)}
    const rightLeg = function() {draw (60, 70, 100, 100)}
    const leftLeg = function() {draw (60, 70, 20, 100)}

    const drawArray = [rightLeg, leftLeg, rightArm, leftArm,  
        torso,  head, frame4, frame3, frame2, frame1]; 



    function createHtmlGame(play){
        // context.clearRect(0, 0, 600, 600);
        setPlay(play)
        stickCount = 9;
        setCount(10)
        setWin(false)
        setLost(false)
        setWr(randomWord())
        setCategoryClue(wr[2])
        setClue('')
        setWord(wr[0]);
        setHiddenWord('')
        setHiddenWord(displayWord(wr[0]));

        setAlphabet([''])
        setTimeout(() =>{
            setAlphabet(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'])
        })
    }

    const createOnLoad = () =>{createHtmlGame('Play')}
    const createOnClick = () =>{createHtmlGame('Play Again')}

    const letterOnClick = (event) => {
        let copyWord = wr[0];
        console.log(copyWord);
        let copyWordDisplayed = hiddenWord.split(' ')

        if(!event.target.classList.contains('hangMan_selected')){
            for(let i = 0; i < copyWord.length; i++){
                let index = copyWord.indexOf(event.target.innerHTML);
                if(index >= 0){
                    event.target.classList.add('hangMan_selected');
                    copyWordDisplayed[index] = copyWord[index];
                    setHiddenWord(copyWordDisplayed.join(' '))


                    if(copyWordDisplayed.indexOf('_') < 0){
                        if(lost === false){
                            setLives(true);
                            setWin(true);
                        }
                    }
                    continue
                }
            } 
        }
        if(!event.target.classList.contains('hangMan_selected')){
            console.log(win, lost)
            if(win === true){
                event.target.classList.add('hangMan_selected');
            }else if(lost === true){
                event.target.classList.add('hangMan_selected');
            }else if(count > 1){
                event.target.classList.add('hangMan_selected')
                setCount(count-1);
                nextStick =  drawArray[stickCount];
                nextStick();
                --stickCount;
            }else{
                setLost(true);
                nextStick =  drawArray[stickCount];
                nextStick();
            }
        }
    }

    const addAlphabet = () => {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];
        alphabet.map(el => {
            return(
                <div 
                    className={"hangMan_letter" + '' + (selectedClass && lives 
                        ? 'selected':'')} 
                    key={el}  
                    onClick={letterOnClick}
                    // onClick={addSelected}
                    >
                    {el}
                </div>
                // <div className="hangMan_letter">{el}</div>
            )
        })
    }

    const Clue = () => {
        setClue(wr[1])
    }

    // const playAgainOnClick = () => {
        // context.clearRect(0, 0, 600, 600);
    //     createHtmlGame()
    // }

    useEffect(() => {
        setTimeout(() => {
            createOnLoad();
        },100)
    }, []);

    //   useEffect(() =>{
    //     addAlphabet()
    // }, [alphabet])


    return(
        <div className="hangMan_main">
            <div className="hangMan_head">
                <h1>HangMan</h1>
                <h2>VANILLA JAVASCRIPT HANGMAN GAME</h2>
                <h3>Use the alphabet below to guess the word, or click hint to get a clue.</h3>
            </div>

            <div className="hangMan_letters" >
                {/* {addAlphabet()} */}
                {alphabet.map(el => {
                    return(
                        <div 
                            className={"hangMan_letter" + '' + (selectedClass && lives 
                                ? 'selected':'')} 
                            key={el}  
                            onClick={letterOnClick}
                            // onClick={addSelected}
                            >
                            {el}
                        </div>
                        // <div className="hangMan_letter">{el}</div>
                    )
                })}
            </div>

            <div className="hangMan_word_main">
                <h2 className="hangMan_category">{categoryClue}</h2>
                <div className="hangMan_word">{hiddenWord}</div>
            </div>

            <div className="hangMan_lives">
                <p className="hangMan_lives_result">{lives 
                                            ? win ? 'You won!' 
                                            : lost ? 'You lost!' 
                                            : `You have ${count} lives`
                                            : 'fds'}</p>

                <p className="hangMan_clue">Clue - {clue}</p>
            </div>

            <canvas ref={canvasRef} className="hangMan_stick_man">dont work</canvas>

            <div className="hangMan_buttons">
                <input type="button" value="Hint" className="hangMan_btn hangMan_hint" onClick={Clue}/>
                <input type="button" value={play} className="hangMan_btn hangMan_playAgain" onClick={createOnClick}/>
                {/* onClick={playAgainOnClick} */}
            </div>
        </div>
    )
}

export default HangMan;