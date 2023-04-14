import React from 'react'
import "./Navbar.css"
import Button from '../Button/Button'
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const signInHandler=(event)=>{
    event.preventDefault();
    console.log('signIn')
  }

  const signUpHandler=(event)=>{
    event.preventDefault();
    console.log('signUp')
  }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            <ul className="toplist">
                <li className="toplistItem logoimg">Project Pilot</li>
                <Link className='link' smooth to='/'><li className="toplistItem btnfos btnfos-2">Home</li></Link>
                <Link className='link' smooth to='/#about'><li className="toplistItem btnfos btnfos-2">About</li></Link>
                <Link className='link' smooth to='/#features'><li className="toplistItem btnfos btnfos-2">Features</li></Link>
              </ul>
            </div>
            <div className="topRight">
            <Button label={'Sign in'} functionHandler={signInHandler} />
            <Button label={'Sign up'} functionHandler={signUpHandler}/>
            </div>
        </div>
            
    </div>
  )
}