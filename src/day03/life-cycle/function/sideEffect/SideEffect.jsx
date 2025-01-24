import React, { useEffect, useState } from 'react';

const SideEffect = () => {
    const [color ,setColor] = useState("")
    const [number,setNumber] = useState(0)



    const getRandomColor = ()=> {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
    const onClickToCol = () => {
        setColor(getRandomColor())
    }
    
    const onClickToNum = () => {
        setNumber(number +1)
    }
    useEffect(()=>{
        console.log("리랜더링😂")
    },[color])

    return (
        <div>
            <h1>누룽지 통닭</h1>
            <button onClick={onClickToCol}>색상변경</button>
            <button onClick={onClickToNum}>+1증가</button>

        </div>
    );
};

export default SideEffect;