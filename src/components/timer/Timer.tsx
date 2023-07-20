import { FC, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';

const Timer: FC = () => {

    const Ref = useRef<any>(null);

    const [ timer, setTimer ] = useState('0:00');
    
    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return { total, minutes, seconds };
    };

    const startTimer = (e: string) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >=0 ) {
            setTimer(minutes + ':' + (seconds > 9 ? seconds : '0' + seconds));
        }
    };

    const clearTimer = (e: string) => {
        setTimer('5:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => startTimer(e), 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds());
        deadline.setMinutes(deadline.getMinutes() + 5)
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime().toString());
    }, [ ]);

    return (
        <Box component='span'>{ timer }</Box>
    )
};

export default Timer;
