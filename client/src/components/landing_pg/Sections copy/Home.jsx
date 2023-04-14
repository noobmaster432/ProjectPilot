import React from 'react'
import './Home.css'
import Buttonstart from '../Button/Buttonstart'

export default function Home() {

const submitHandler =(event)=>{
  event.preventDefault();
  console.log('Submit')
}

  return (
    <>
    <div className='Section2'>
        <img className='Lineimg' src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="" width='400px'/>
        <div className="container">
        <form onSubmit={submitHandler}>
        <div className="intro">
            <h1>
                Let's build from here
            </h1>
            <span className='description'>
            Harnessed for productivity. Designed for collaboration.
            Celebrated for built-in security.
             Welcome to the platform developers love
            </span>
            <div className="input">
            <input type='email' size='40' placeholder='Enter Your E-mail Here'/>
            <Buttonstart label={'Get Started'}/>
            </div>
        </div> 
        </form>
        <img className='moon' src='https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/moon.png' alt='' width='300px' height='350px' ></img>       
    </div>
    </div>
    
    </>
  )
}
