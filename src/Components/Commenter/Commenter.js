import React, { useState, useEffect } from 'react';

const Commenter = () => {
    const [commenters, setCommenters] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => setCommenters(data.results))
            .catch(err => console.log(err))
    }, [])

    const imgStyle ={
        borderRadius: '50%', 
        marginBottom: '35px', 
        height: '50px', 
        width: '50px'
    }

    return (
        <>
            {
                commenters.map((commenter) => <img style={imgStyle} src={commenter.picture.large} alt="" />)
            }
        </>
    );
};

export default Commenter;