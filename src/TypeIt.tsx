import {ChangeEvent} from "react";

export const TypeIt = ({enabled, onChange}: { enabled: boolean; onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return (
        <textarea id="typeIt"
                  autoFocus className="quote-input"
                  onChange={ onChange }
                  disabled={!enabled}
        >

        </textarea>
    )
};