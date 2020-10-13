import { useState } from 'react';

const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState( initialState );

    const increment = () => {
        setCounter( counter + 1 );
    };

    const decrement = () => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initialState );
    };

    //Aca extraemos la logica del contador
    return {
        counter,
        increment,
        decrement,
        reset
    };
};

export default useCounter;
