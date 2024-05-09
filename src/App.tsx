import {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {Timer} from "./Timer.tsx";
import {Quote, RANDOM_QUOTE_API_URL} from "./Quote.tsx";
import {TypeIt} from "./TypeIt.tsx";

const Score = ({score = 0}:{score: number}) => {
    return <div className="score">Score: {score}</div>;
}
const Missed = ({missed = 0}:{missed: number}) => {
    return <div className="missed">Missed: {missed}</div>;
}
async function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

const Main = () => {
    const [scores, setScores] = useState({score:0, missed:0})
    const [typedText, setTypedText] = useState("")
    const [quote, setQuote] = useState("")
    useEffect(() => {
        getRandomQuote().then(quote => setQuote(quote))
    }, [])
    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let [score, missed] = [0, 0]
        quote.split("").map((character: string, idx: number) => {
            const reached = idx < typedText.length
            const correct = reached && character == typedText.charAt(idx)
            if (reached) {
                score = correct ? score + 1 : score
                missed = correct ? missed : missed + 1
            }
        })
        setScores({score, missed})
        setTypedText(event.target.value)
    }
    return (
        <>
            <Timer/>
            <Score score={scores.score}/>
            <Missed missed={scores.missed}/>
            <div className="card">
                <Quote quote={quote} typedText={typedText}/>
                <TypeIt enabled={quote!=""} onChange={onChange}/>
            </div>
        </>
    );
}

const App = () => {
  return <Main/>
}

export default App
