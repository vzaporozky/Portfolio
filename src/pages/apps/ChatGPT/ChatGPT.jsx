import React, {useState} from "react";
import { Configuration, OpenAIApi } from "openai";
import key from "./keyAPI";
import { arrayItems } from './index'
import classes from './ChatGPT.module.css'

const ChatGPT = () =>{
    const configuration = new Configuration({
        apiKey: key,
    });
    const openai = new OpenAIApi(configuration);
    const [option, setOption] = useState(arrayItems[0].option);
    const [input, setInput] = useState("");
    const [result, setResult] = useState([{writer: "user", value:'hello'}, {writer: 'bot', value:'hi'}]);

    // const selectOption = (option) => {
    //     setOption(option);
    // };

    const doStuff = async () => {
        let object = { ...option, prompt: input };

        const response = await openai.createCompletion(object);

        setResult(response.data.choices[0].text);
    };

    return (
        <div className={classes.container}>
            <textarea
                className={classes.text_area}
                cols={55}
                rows={10}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className={classes.action_btn} onClick={doStuff}>
                DO YOU STUFF!
            </button>

            <h3 className={classes.result_text}>{result.length > 0 ? result.map(el =>{
                return <span>{el.value}</span>
            }) : ""}</h3>
        </div>
    );
}

export default ChatGPT