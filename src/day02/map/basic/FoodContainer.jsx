import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const foodList = [
        {
            name : "돈까스",
            price : 15000,
            origin : ["국내산, 호주산"]
        },
        {
            name : "떡볶이",
            price : 5000,
            origin : ["우리집, 옆집"]
        },
        {
            name : "치킨",
            price : 22000,
            origin : ["국내산, 중국산"]
        },
        {
            name : "초밥",
            price : 13000,
            origin : ["국내산, 미국산"]
        }
    ]

    
    return (
        <div>
             <ul>
                {foodList.map((food, i) => <Food key ={i} food={food} />)}
            </ul>
        </div>
    );
};

export default FoodContainer;