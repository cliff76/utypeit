export const RANDOM_QUOTE_API_URL = import.meta.env.VITE_RANDOM_QUOTE_API_URL

export const Quote = (props: { quote:string; typedText: string; }) => {
    let [score, missed] = [0, 0]
    return (
        <div className="quote-display">
            {props.quote.split("").map((character: string, idx: number) => {
                const reached = idx < props.typedText.length
                const correct = reached && character == props.typedText.charAt(idx)
                if (reached) {
                    score = correct ? score + 1 : score
                    missed = correct ? missed : missed + 1
                }
                return (<span id={`character-${idx}`}
                              className={!reached ? "" : correct ? "correct" : "incorrect"}>{character}</span>)
            })}
        </div>
    )
};