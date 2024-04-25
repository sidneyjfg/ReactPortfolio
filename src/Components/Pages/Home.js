import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js


function Home() {
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['BackEnd Developer', 'FrontEnd Developer'],
            typeSpeed: 50,
            loop: true
        });

        // Optionally, clean up the Typed instance when the component unmounts
        return () => typed.destroy();
    }, []);

    return (
        <div className='Home' id="Home">
            <div className='home-content'>
                <h3>Hello, It's me</h3>
                <h1>Sidney Junio</h1>
                <h3>And I'm a <span id='element'></span></h3>
                <p>I'm a web designer with one year of experience.
                    Experience in creating and applying website design, developing in BackEnd.
                </p>
                <div className='home-sci'>
                    <a href='https://www.instagram.com/sidneyjfg/'><i className='bx bxl-instagram'></i></a>
                    <a href='https://wa.link/sjpipp'><i className='bx bxl-whatsapp'></i></a>
                    <a href='https://github.com/sidneyjfg'><i className='bx bxl-github'></i></a>
                    <a href='https://www.linkedin.com/in/sidneyjunio/'><i className='bx bxl-linkedin'></i></a>
                </div>
                <a href='../Portfolio/doc/CurriculoSidney.pdf' target='_blank' className='btn-more'><i className='bx bx-download'></i>
                    Download Curriculum</a>
            </div>
        </div>
    )

}

export default Home