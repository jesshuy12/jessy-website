import React from 'react'
import { Link } from 'react-router-dom'

import './invs-header.styles.scss'
import { ReactComponent as Logo } from '../../assets/jessysig.svg'

const InvsHeader = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/">ABOUT</Link>
            <Link className="option" to="/">WORK</Link>
            <Link className="option" to="/">SOFTWARE</Link>
            <Link className="option" to="/">PROJECTS</Link>
            <Link className="option" to="/">PHOTOGRAPHY</Link>
            <Link className="option" to="/">CONTACT</Link>
        </div>
    </div>
)

export default InvsHeader