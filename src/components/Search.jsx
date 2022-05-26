import React from 'react';

export const Search = (props) => {
    

    return (

        <>
         <input 
           type="search"
           value={props.value}
           onChange={props.onChange}
         /> <br/> <br/>
        </>
    )
}