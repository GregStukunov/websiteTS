import React from "react";

export const HeaderComponent = () => {
    return (
        <>
            <div className='header'>
                <img src={require('./logo.png').default} alt='logo' />
            </div>
        </>
    );
};