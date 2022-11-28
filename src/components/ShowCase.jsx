import React from 'react'
import { Link } from 'react-router-dom'
import landingBg from "../assets/landingbg.png"


const ShowCase = () => {
    return (
        <section className="container mx-auto w-full px-3 flex justfiy-center items-center min-h-screen md:h-[60vh]">
            <img src={landingBg} alt="" className="absolute  w-full top--9 mx-auto bottom- right-0 left-0 opacity-40 showcaseimg" />
            <div className="z-10 flex justify-center items-center flex-col max-w-2xl mx-auto leading-10 text-center h-full">
                <h2 className='text-2xl md:text-5xl font-bold mb-5 text-secondary'>All about your favourite <span >Cookies</span></h2>
                <p className=' text-xl font-semibold text-secondary md:leading-10 md:mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis beatae totam quo, magni dicta quos consequatur corrupti. Quisquam nobis ab exercitationem rem esse error, perferendis consectetur fugiat eum impedit!z</p>
                <Link to={"products"} className='block px-3 py-2 bg-orange text-xl font-semibold rounded drop-shadow-md text-secondary mt-5 hover:bg-white hover:border-2 hover:border-orange'>Shop Now</Link>
            </div>
        </section>
    )
}

export default ShowCase
