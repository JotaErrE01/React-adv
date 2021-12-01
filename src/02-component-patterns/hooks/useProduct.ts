import { useEffect, useState, useRef } from 'react';
import { IProduct, OnChangeArgs, InitialValues } from '../interfaces/ProductsInterfaces';

interface useProductArgs {
    product: IProduct;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues } : useProductArgs) => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    
    const increaseBy = (value: number) => {
        const newCount = Math.min(Math.max(0, counter + value), initialValues?.maxCount || Infinity);
        setCounter( newCount );
        onChange && onChange({ product, count: newCount });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }
    
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount || Infinity,
        reset
    }
}
