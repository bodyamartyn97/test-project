import * as React from 'react';
import gitIcon from '../assets/github-mark-white.svg';

export default function Footer() {

    return (
        <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 mt-4 border-top'>
            <span className='mr-10'>
                © 2024 Martynenko Bohdan, Kiev
            </span>
            <a target='_blank' href="https://github.com/bodyamartyn97">
                <img src={gitIcon} alt="git" />
            </a>
        </footer>
    )
}