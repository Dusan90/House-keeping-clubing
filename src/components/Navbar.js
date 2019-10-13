import React, { Component } from 'react'
// import '../App.css'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/' className='link-style'>
                            <h1>HOUSE<span>keeping | Clubing</span></h1>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? 'nav-links show-nav header'  : 'nav-links'}>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar
