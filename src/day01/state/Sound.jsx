// 강아지 버튼, 고양이 버튼 2개를 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야옹이 화면에 출력된다.

import React, { useState } from 'react';

const Sound = () => {
    const[name, setSound] = useState("")
    const onclickToCat = () => {
        setSound(name + "야옹")
    }
    const onclickToDog = () => {
        setSound(name + "월월")
    }
    return (
        <div>
            <button onClick={onclickToCat}>야옹이는</button>
            <button onClick={onclickToDog}>강아지는</button>
            <br/>
            {name}
        </div>

);
};

export default Sound;