// import React from 'react';
// // age를 상수로 임의로 설정하고,
// // 19세 이상 성인이라면 "입장 가능"
// // 성인이 아니라면 "입장 불가"
// // 성인과 관계 없이 age가 짝수라면 "당첨"을 출력한다.


// const Jsx05 = () => {
// const name = undefined || "곽승민";
// const age = undefined || 25;
//     return (
//         <div>
//             {age >= 19 ? (<div><h1>입장가능</h1></div>) : (<div><h1>입장불가</h1></div> )}
//             {age % 2 === 0 ? (<div><h1>당첨</h1></div>) : (<div><h1>꽝</h1></div>)} 
//         </div>
//     );
// };

// export default Jsx05;


// 변수에 담아서 사용해보자


import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
  const age = 25;
  const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAudult = age > 19;
  const isEven = isAudult % 2 === 0;

  const passComponent =  <PassComponent/>
//   (<div>{pass}</div>)
  const notPassComponent = <NotPassComponent/>
//   (<div>{notPass}</div>)
  const luckyComponent = <LuckyComponent/>
//   (<div>{lucky}</div>)
  const unLuckyComponent = <UnLuckyComponent/>
//   (<div>{unLucky}</div>)

  const enter = isAudult ? passComponent : notPassComponent
  const win = isEven ? luckyComponent : unLuckyComponent

  return (
    <div>
      당신의 나이는 {age}이므로
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;