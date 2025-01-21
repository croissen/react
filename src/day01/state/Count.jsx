import React, { useState } from 'react';

const Count = () => {
    const[number, setNumber] = useState(0)
    const onclickToDecrease = () => {
        setNumber(number - 10)
    }
    const onclickToIncrease = () => {
        setNumber(number + 10)
    }
    return (
        <div>
            <button onClick={onclickToDecrease}>-</button>
            {number}
            <button onClick={onclickToIncrease}>+</button>
        </div>

);
};

export default Count;