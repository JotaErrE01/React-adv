import { useState } from 'react';


export const useProduct = (initialState: number = 0) => {

    const [counter, setCounter] = useState(initialState);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(0, prev + value));
    }

    return {
        counter,
        increaseBy,
    }
}
