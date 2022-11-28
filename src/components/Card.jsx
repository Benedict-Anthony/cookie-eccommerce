import React from 'react'

const Card = ({ children }) => {
    return (
        <article className='px-3 py-2 border-orange border-2 rounded-md drop-shadow-md w-full md:w-[15rem] mx-auto'>
            {children}
        </article>
    )
}

export default Card