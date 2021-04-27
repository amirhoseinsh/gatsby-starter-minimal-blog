import React from 'react';


const style = {
    boxShadow: 'none',
    width: "500px",
    height: "500px"
};

export const ImageHolder = ({src}) => {
    return (
        <>
            <p>Hi</p>
            <img src={src} style={style}/>
        </>
    )
};