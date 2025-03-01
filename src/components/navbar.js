"use client";  // Añade esta línea al principio del archivo

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar } from '@nextui-org/react'

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div >
            <nav className="bg-transparent ">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                                onClick={toggleMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                <img className="w-20 rounded-full" src="https://res.cloudinary.com/da2aauwq2/image/upload/v1721538665/51_mthuxm.png"  alt="renzo fantuzzi" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block py-5 ">
                                <div className="flex space-x-4">
                                    <a href="/" className="rounded-md px-3 py-2  font-bold text-gray-300 hover:bg-danger hover:text-white" onClick={closeMenu}>Inicio</a>
                                    <a href="/about" className="rounded-md px-3 py-2  font-bold text-gray-300 hover:bg-danger hover:text-white" onClick={closeMenu}>Sobre mí</a>
                                    <a href="/proyects" className="rounded-md px-3 py-2  font-bold text-gray-300 hover:bg-danger hover:text-white" onClick={closeMenu}>Proyectos</a>
                                    <a href="/contacto" className="block rounded-md bg-danger hover:bg-secondary px-3 py-2 text-base font-bold text-white" aria-current="page" onClick={closeMenu}>Hablemos?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMenu}>Inicio</a>
                        <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMenu}>Sobre mí</a>
                        <a href="/proyects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMenu}>Proyectos</a>
                        <a href="/contacto" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={closeMenu}>Hablemos?</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar1;





