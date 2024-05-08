import {ChangeEvent} from "react";

export const TypeIt = ({onChange}: { onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return (
        <textarea id="typeIt"
                  autoFocus className="quote-input"
                  onChange={ onChange }
        >

        </textarea>
    )
};