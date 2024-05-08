import {useEffect, useState} from "react";

export const RANDOM_QUOTE_API_URL = import.meta.env.VITE_RANDOM_QUOTE_API_URL

async function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

export const Quote = (props: { typedText: string }) => {
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
                        return (<span id={`character-${index++}`}
                                      className={!reached ? "" : correct ? "correct" : "incorrect"}>{character}</span>)
                    }
                )
            }
        </div>
    )
};