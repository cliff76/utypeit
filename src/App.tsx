import {useEffect, useState} from 'react'
import './App.css'

const RANDOM_QUOTE_API_URL = import.meta.env.VITE_RANDOM_QUOTE_API_URL

const Timer = () => {
    return <div className="timer">0</div>;
}

async function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}
const Quote = () => {
    const [quote, setQuote] = useState("")
    useEffect(() => {
        getRandomQuote().then(quote => setQuote(quote))
    }, [])
    let index = 0
    return (
        <div className="quote-display">
            {
                quote.split("").map((character: string) => {
                        return (<span id={`character-${index++}`}>{character}</span>)
                    }
                )
            }
        </div>
    )
};

const TypeIt = () => {
    return (
        <textarea id="teypeit" autoFocus className="quote-input">
            U Type It
        </textarea>
    )
};

const Main = () => {
    return (
        <div className="card">
            <Quote/>
            <TypeIt/>
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
