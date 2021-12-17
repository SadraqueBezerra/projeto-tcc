import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }


        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (
        <>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="container">
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link to="/">
                                <div className="logo">
                                    <h1><a className="logo me-auto"href="/">AI MEDICINE</a></h1>
                                </div>
                            </Link>
                        </nav>
                    </div>

                    <nav id="navbar" className="navbar">
                        {(toggleMenu || screenWidth > 500) && (
                            <ul className="list">
                                <li><a className="items" href="/">Home</a></li>
                                <li><a className="items" href="/artigo">Artigo</a></li>
                                <li><a className="items" href="/team">Equipe</a></li>
                                <li><a className="items" href="/conteudoadicional">Conteúdo Adicional</a></li>
                            </ul>
                        )}
                        <button onClick={toggleNav}
                            className='btn'><FiMenu /></button>
                    </nav>
                </div>
            </header>
        </>
    );
}
