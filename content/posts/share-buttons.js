import React from 'react'
import {Twitter, Linkedin, Telegram} from 'react-social-sharing'

const sizeBtn = {
    width: 0.5,
};
export const TwitterButton = ({link}) => {
    return (
        <>
            <Twitter large link={link} style={{fontSize: '1rem'}}/>
        </>
    )
};

export const LinkedinButton = ({link}) => {
    return (
        <>
            <Linkedin large link={link} style={{fontSize: '1rem'}}/>
        </>
    )
};