import React, { useEffect, useState } from 'react';


const c = console.log
// https://jsonplaceholder.typicode.com/albums
const SideEffectMount = () => {

    const[albums, setAlbums] = useState([])
    useEffect(() => {
        const getDatas = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/albums")
            const datas = await response.json()
            console.log(datas)
            return datas;
        }

        getDatas().then((albums) => {setAlbums(albums)})
        setAlbums(albums)
        console.log("리랜더링")
    }, [])
    const albumList = albums.map(({title}, i )=> <li key= {i}>{title}</li>)
        return (
        <div>
            
        </div>
    );
};

export default SideEffectMount;