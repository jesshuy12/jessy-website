import React from 'react'
import { Link } from 'react-router-dom'

import './invs-header.styles.scss'
import { ReactComponent as Logo } from '../../assets/jessysig.svg'

const InvsHeader = () => (
    <div className="invs-header">
        <Link className="invs-logo-container" to="/">
            <Logo className="invs-logo"/>
        </Link>
        <div className="invs-options">
            <Link className="invs-option" to="/">ABOUT</Link>
            <Link className="invs-option" to="/">WORK</Link>
            <Link className="invs-option" to="/software">SOFTWARE</Link>
            <Link className="invs-option" to="/">PROJECTS</Link>
            <Link className="invs-option" to="/">PHOTOGRAPHY</Link>
            <Link className="invs-option" to="/">CONTACT</Link>
        </div>
        <div className="invs-bottom"></div>
    </div>
)

export default InvsHeader