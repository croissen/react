import React from 'react';

const Food = ({food}) => {

    const {name, price, origin} = food;
    return (
        <div>
              <li>
                <p>판매음식 : {name}</p>
                <p>가격 : {price}원</p>
                <p>원산지 : {origin}</p>
            </li>
        </div>
    );
};

export default Food;