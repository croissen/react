import React from 'react';

const Sports = ({sports,i}) => {
    const {name, member} = sports;
    return (
        <div>
            <li>
            <p>종목 : {name}</p>
            <p>멤버 : {member}명</p>
            </li>
        </div>
    );
};

export default Sports;