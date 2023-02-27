import React, {useState} from "react";
import { Configuration, OpenAIApi } from "openai";
import key from "./keyAPI.jsx";
import keyAPI_example from "./keyAPI_example.jsx";
import { arrayItems } from './index'
import classes from './ChatGPT.module.css'

const ChatGPT = () =>{
    const configuration = new Configuration({
        // apiKey: key, // <- <-<- add api key to file keyAPI.jsx and uncommit it
        apiKey: keyAPI_example, // commit it
    });
    const openai = new OpenAIApi(configuration);
    const [option, setOption] = useState(arrayItems[0].option);
    const [input, setInput] = useState('');
    const [prevTextOfBot, setPrevTextOfBot] = useState('');
    const [result, setResult] = useState([]);

    const doStuff = async () => {
        console.log(prevTextOfBot)
        setResult([{writer: "user", value:input}, ...result, ]);

        let object = '';
        let response = '';

        if(input === 'continue' || input === 'продолжай' || input === 'продовжуй') {
            let object = { ...option, prompt: input + ' ' + prevTextOfBot};
            response = await openai.createCompletion(object);
        }else{
            object = { ...option, prompt: input };
            response = await openai.createCompletion(object);
        }

        

        setPrevTextOfBot(response.data.choices[0].text)
        setResult([{writer: "bot", value:response.data.choices[0].text}, {writer: "user", value:input},  ...result, ])
        setInput('');
    };

    return (
        <div className={classes.container}>
            <div className={classes.request}>
                <input
                    type="text"
                    value={input}
                    placeholder="say 'Hello'"
                    className={classes.input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={classes.action_btn} onClick={doStuff}><img src="./icon_send.png" alt="" style={{height:'20px'}} /></button>
            </div>

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