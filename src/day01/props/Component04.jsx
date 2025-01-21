import React from 'react';

const Component04 = (name, printValue) => {

    return (
        <div>
           <button onClick={() => {printValue(name)}}></button>
        </div>
    );
};

export default Component04;