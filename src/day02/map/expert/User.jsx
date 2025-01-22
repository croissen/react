import React from 'react';

const User = ({user}) => {

    const {name, phone, username} = user;
    return (
        <div>
             <li>
                <p>이름{name}</p>
                <p>전화번호{phone}</p>
                <p>{username}</p>
            </li>
        </div>
    );
};

export default User;