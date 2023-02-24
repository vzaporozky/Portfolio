import React, {useState, useEffect} from "react";

const ColorGame = () => {
    const [color_display, setColor_display] = useState("");
    const [hard_button, setHard_button] = useState(true);
    const [easy_button, setEasy_button] = useState(false);
    const [result, setResult] = useState("");
    const [permissionChoose, setPermissionChoose] = useState(true);

    const ColorBlock = (props) => {
        return(
            <div className="color_game_color" {...props}></div>
        )
    }
    
    const [colors, setColors] = useState([
        {backgroundColor:'', display:'block', i: 0},{backgroundColor:'', display:'block', i: 3},
        {backgroundColor:'', display:'block', i: 1},{backgroundColor:'', display:'block', i: 4},
        {backgroundColor:'', display:'block', i: 2},{backgroundColor:'', display:'block', i: 5}
        ]);

    function randomColor(elem) {
        let [r, g, b] = Array.from({length: 3}, () => Math.floor(Math.random() * 256));
        elem.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    
    function chooseColors(){
        setResult('');
        setPermissionChoose(true);
        if(hard_button === true){
            for(let i = 0; i < 6; i++)
                randomColor(colors[i]);
    
            let random_num = Math.floor(Math.random() * 6);
    
            setColor_display(`${colors[random_num].backgroundColor}`)
        }else{
            for(let i = 0; i < 3; i++)
                randomColor(colors[i]);
    
            let random_num = Math.floor(Math.random() * 3);
    
            setColor_display(`${colors[random_num].backgroundColor}`)
        }
    }
    
    function selectComplex(event){
        if(event.target.classList.contains('color_game_hard')){
            setEasy_button(false)
            setHard_button(true)
            for(let i = 3; i < 6; i++)
                colors[i].display='block';
            chooseColors()
        }
        if(event.target.classList.contains('color_game_easy')){
            setHard_button(false)
            setEasy_button(true)
            for(let i = 3; i < 6; i++)
                colors[i].display='none';
            chooseColors()
        }
    }


    function colorBlockOnClick(event) {
        if (permissionChoose === true && event.target.style.backgroundColor !== color_display) {
            setResult('Try again');
            event.target.style.backgroundColor = 'rgb(63, 63, 63)';
        }
        if (permissionChoose === true && event.target.style.backgroundColor === color_display) {
            setResult('Succes');
            setPermissionChoose(false);
            for (let i in colors) {
                colors[i].backgroundColor = event.target.style.backgroundColor;
            }
        }
    }
    
    useEffect(() => {
        chooseColors();
      }, []);
    

    return (
        <div>
            <h1 className="color_game_title">THE GREAT <span className="color_display">{color_display}</span> GUESSING GAME</h1>

            <div className="color_game_stripe">
                <div className="color_game_stipe_container">
                    <input type="button" value="New Color" className="color_game_new_color" onClick={chooseColors} />
                    <span className="color_game_result" style={{margin: 0, color:"black"}}>{result}</span>
                    <div className="color_game_select" onClick={selectComplex}>
                        <input type="button" value="Easy" 
                            className={`color_game_complexity color_game_easy ${easy_button ? 'color_game_selected' : ''}`
                            } />
                        <input type="button" value="Hard" 
                        className={`color_game_complexity color_game_hard  ${hard_button ? 'color_game_selected' : ''}`} />
                    </div>
                </div>
            </div>

            <div className="color_game_container">
                <div className="color_game_main" >
                    {colors.map(item => (
                        <ColorBlock key={item.i} className={'color_game_color show'} onClick={colorBlockOnClick} style={{backgroundColor: item.backgroundColor, display: item.display}} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default ColorGame;

// import React, { useState, useEffect } from 'react';

// function ColorGame() {
//   const [colorDisplay, setColorDisplay] = useState('RGB');
//   const [result, setResult] = useState('');
//   const [colors, setColors] = useState(Array(6).fill('#000000'));
//   const [isHardMode, setIsHardMode] = useState(true);

//   // Generate a random color
//   const randomColor = () => {
//     const color = Math.floor(Math.random()*16777215).toString(16);
//     return '#' + color;
//   }

//   // Set the colors of the game board
//   const chooseColors = () => {
//     if (isHardMode) {
//       const newColors = Array(6).fill('').map(() => randomColor());
//       setColors(newColors);
//       const randomNum = Math.floor(Math.random() * 6);
//       setColorDisplay(colors[randomNum]);
//     } else {
//       const newColors = Array(3).fill('').map(() => randomColor());
//       setColors(newColors.concat(Array(3).fill('#000000')));
//       const randomNum = Math.floor(Math.random() * 3);
//       setColorDisplay(colors[randomNum]);
//     }
//   }

//   // Handle button click to toggle game mode
//   const handleModeClick = (mode) => {
//     setIsHardMode(mode === 'hard');
//     chooseColors();
//   }

//   // Check if the selected color is correct
//   const handleColorClick = (color, index) => {
//     if (color === colorDisplay) {
//       setResult('Success!');
//       setColors(colors.map((c, i) => i <= index ? colorDisplay : c));
//     } else {
//       setResult('Try again');
//       const newColors = [...colors];
//       newColors[index] = '#000000';
//       setColors(newColors);
//     }
//   }

//   useEffect(() => {
//     chooseColors();
//   }, []);

//   return (
//     <div>
//       <h1>THE GREAT <span className="color_display">{colorDisplay}</span> GUESSING GAME</h1>
//       <div className="stripe">
//         <div className="stipe_container">
//           <button onClick={chooseColors}>New Color</button>
//           <span className="result">{result}</span>
//           <div className="select">
//             <button className={isHardMode ? 'complexity hard selected' : 'complexity hard'} onClick={() => handleModeClick('hard')}>Hard</button>
//             <button className={!isHardMode ? 'complexity easy selected' : 'complexity easy'} onClick={() => handleModeClick('easy')}>Easy</button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="main">
//           {colors.map((color, index) => (
//             <div className="color" key={index} style={{backgroundColor: color}} onClick={() => handleColorClick(color, index)}></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ColorGame;