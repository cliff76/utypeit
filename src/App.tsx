import {ChangeEvent, useState} from 'react'
import './App.css'
import {Timer} from "./Timer.tsx";
import {Quote, RANDOM_QUOTE_API_URL} from "./Quote.tsx";
import {TypeIt} from "./TypeIt.tsx";

const Main = () => {
    const [typedText, setTypedText] = useState("")
    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => setTypedText(event.target.value)
    return (
        <div className="card">
            <Quote typedText={typedText}/>
            <TypeIt onChange={onChange}/>
        </div>
    );
}

const App = () => {
    console.log("API URL", RANDOM_QUOTE_API_URL)

  return (
    <>
        <Timer/>
        <Main/>
    </>
  )
}

export default App
