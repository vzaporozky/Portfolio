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