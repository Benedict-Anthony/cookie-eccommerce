import React from 'react'
export const Button = ({ text, id, handleClick }) => {

    return (
        <button className='block capitalize px-3 py-2 bg-orange text-xl font-semibold rounded drop-shadow-md text-secondary mt-5 hover:bg-white hover:border-2 hover:border-orange' onClick={() => handleClick(id)}>
            {text}
        </button>
    )
}



