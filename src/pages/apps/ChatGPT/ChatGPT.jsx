import React, {useState} from "react";
import { Configuration, OpenAIApi } from "openai";
import key from "./keyAPI.jsx";
import { arrayItems } from './index'
import classes from './ChatGPT.module.css'

const ChatGPT = () =>{
    const configuration = new Configuration({
        apiKey: key,
    });
    const openai = new OpenAIApi(configuration);
    const [option, setOption] = useState(arrayItems[0].option);
    // const [option, setOption] = useState({});
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    // const [result, setResult] = useState('');

    // const selectOption = (option) => {
    //     setOption(option);
    // };

    const doStuff = async () => {
        setResult([{writer: "user", value:input}, ...result, ]);

        let object = { ...option, prompt: input };

        const response = await openai.createCompletion(object);

        // setResult([...result, {writer: "user", value:input}]);
        // setResult([...result, {writer: "user", value:input},{writer: "bot", value:response.data.choices[0].text}])
        setResult([{writer: "bot", value:response.data.choices[0].text}, {writer: "user", value:input},  ...result, ])
        setInput('');
        // console.log(result)
        // setResult(response.data.choices[0].text);
    };

    // const userSetInResult = (event) =>{
    //     setResult([...result, {writer: "user", value:input}]);
    // }

    return (
        <div className={classes.container}>
            <div className={classes.request}>
                <input
                    type="text"
                    value={input}
                    className={classes.input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={classes.action_btn} onClick={doStuff}><img src="./icon_send.png" alt="" style={{height:'20px'}} /></button>
            </div>

            {/* <h3 className="result-text">{result.length > 0 ? result : ""}</h3> */}
            <div className={classes.result_block}>{result.length > 0 ? result.map((el, i) =>{
                if(el.writer === 'bot'){
                    return <div key={i} className={classes.text_bot + ' ' + classes.result_text}>{el.value}<div/></div>
                }else if(el.writer === 'user'){
                    return <div key={i} className={classes.text_user + ' ' + classes.result_text}>{el.value}<div/></div>
                }
            }) : ""}</div>
        </div>
    );
}

export default ChatGPT