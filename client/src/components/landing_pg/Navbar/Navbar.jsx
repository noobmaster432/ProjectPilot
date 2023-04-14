import React from 'react'
import "./Navbar.css"
import Button from '../Button/Button'
import { HashLink as Link } from 'react-router-hash-link';
import useLoginModal from '../../../hooks/useLoginModal';
import useRegisterModal from '../../../hooks/useRegisterModal';

export default function Navbar() {

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const signInHandler=(event)=>{
    event.preventDefault();
    console.log('signIn')
    loginModal.onOpen();
  }

  const signUpHandler=(event)=>{
    event.preventDefault();
    console.log('signUp')
    registerModal.onOpen();
  }
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
            <ul className="toplist">
                <Link className='link' smooth to='/'><li className="toplistItem logoimg font-title text-3xl">Project Pilot</li></Link>
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