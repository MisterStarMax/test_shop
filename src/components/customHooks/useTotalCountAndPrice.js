import { useState, useEffect } from 'react';

const useTotalCountAndPrice = (value) => {
    const initVal = { count: 0, price: 0 };
    const [{ count, price }, setVal] = useState(initVal)

    useEffect(() => {
        setVal(value.reduce((prev, next) => (
            { count: prev.count + next.count, price: prev.price + (next.price * next.count) }), { count: 0, price: 0 })
        );
    }, [value])

    const handler = (val) => (val === 0) ? null : val;

    return { count: handler(parseInt(count)), price: handler(price) }
}

export default useTotalCountAndPrice;