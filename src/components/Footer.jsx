import React from 'react';

export const Footer = () => {
    return (
        <footer className='p-2 fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-1 my-2 border-top'>
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
