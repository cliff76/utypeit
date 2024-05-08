import {ChangeEvent, useEffect, useState} from 'react'
import './App.css'

const RANDOM_QUOTE_API_URL = import.meta.env.VITE_RANDOM_QUOTE_API_URL

const Timer = () => {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const startTime = new Date()
        const timerId = setInterval(() => {
            setTimer(() => Math.floor((new Date() - startTime) / 1000))
        }, 1000)

        return () => clearInterval(timerId)
    }, []);
    return <div className="timer">{timer}</div>;
}

async function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}
const Quote = (props:{typedText: string}) => {
    const [quote, setQuote] = useState("")
    useEffect(() => {
        getRandomQuote().then(quote => setQuote(quote))
    }, [])
    let index = 0
    return (
        <div className="quote-display">
            {
                quote.split("").map((character: string, idx: number) => {
                        const reached = idx < props.typedText.length
                        const correct = reached && character == props.typedText.charAt(idx)
                        return (<span id={`character-${index++}`} className={!reached ? "" : correct ? "correct" : "incorrect"}>{character}</span>)
                    }
                )
            }
        </div>
    )
};

const TypeIt = ({onChange}: { onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return (
        <textarea id="typeIt"
                  autoFocus className="quote-input"
                  onChange={ onChange }
        >

        </textarea>
    )
};

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
