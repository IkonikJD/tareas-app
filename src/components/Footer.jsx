import React from 'react';

export const Footer = () => {
    return (
<<<<<<< HEAD
        <footer className='p-5 fixed-bottom d-flex flex-wrap justify-content-between align-items-center pb-0 pt-4 my-4 border-top'>
=======
        <footer className='p-2 fixed-bottom d-flex flex-wrap justify-content-between align-items-center pb-0 pt-4 my-4 border-top'>
>>>>>>> 885b2e7517830465356703b3045246a9af56bc20
            <div className='col-md-4 d-flex align-items-center'>
                <span class='mb-3 mb-md-0 text-sm'><span>José David Prieto Suárez </span>
                    <i class="bi bi-c-circle"> </i>
                    {new Date().getFullYear()}
                </span>
            </div>
            <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                <li className='ms-4'>
                    <a href='https://www.linkedin.com/in/jdavidprietosuarez/' target='_blank' rel='noreferrer'>
                        <i class='bi bi-linkedin text-white'></i>
                    </a>
                </li>
                <li className='ms-4'>
                    <a href='https://github.com/IkonikJD' target='_blank' rel='noreferrer'>
                        <i class='bi bi-github text-white'></i>
                    </a>
                </li>
                <li className='ms-4'>
                    <a href='https://ikonikjd.github.io/Mi-Primer-Portfolio/' target='_blank' rel='noreferrer'>
                        <i class='bi bi-globe text-white'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
