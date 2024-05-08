import {useEffect, useState} from "react";

export const Timer = () => {
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