import React from 'react';
// import Component01 from './Component01';
// import Component02 from './Component02';
import Component03 from './Component03';
import Component04 from './Component04';

const Container = () => {
    // 버튼을 눌렀을 때 
    //버튼만들기
    // 컨테이너에서 함수와 이름을 받아서 콘솔에 출력하기
    //컨테이너에 함수와 이름 만들기
    //콘솔창만들기 
    // 1) 함수는 어떤 값을 받으면 콘솔에 출력해주는 함수
    
    // 2) 이름은 본인 이름의 변수
    const name = "곽승민";
    const printValue = (value)=> {
        console.log(value)
    }


    return (
        <div>
            <Component04 name={name} printValue={printValue}/>

            {/* <Component01 name={name} /> */}
            {/* <Component02><span style={{ backgroundColor : "blue" }}>안녕하세요!! 😂 </span></Component02> */}
            {/* <Component03>
                <div style={{display : "flex", justifyContent : "center"}}>
                    <div style={{solid : "1px", backgroundColor : "orange", width : "100px", height : "100px", marginRight : "10px"} }></div>
                    <div style={{solid : "1px", backgroundColor : "orange", width : "100px", height : "100px", marginRight : "10px"} }></div>
                    <div style={{solid : "1px", backgroundColor : "orange", width : "100px", height : "100px"} }></div>
                </div>
            </Component03> */}
            

        </div>
    );
};

export default Container;