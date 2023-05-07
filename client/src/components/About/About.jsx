import React from 'react';
import perrito from './assets/perrito.gif'
import './About.css';

export default function About() {
  return (
    <div className='cont-about'>
        <div className='cont-info'>
          <h1 className='h-info'>Luis Galea</h1>
          <h2 className='h-info'>Full Stack Development Student</h2>
          <h2 style={{color: '#fff'}}>Seguime en Github, y toma te regalo un perrito.</h2>
          <img src={perrito} alt="" className='perrito'/>
          <a 
            href="https://github.com/galu7777?tab=repositories" 
            target='_blank'
            rel='noopener noreferrer' 
            className='lnk'>
              Link a mi Github
          </a>
          <h2 style={{color: '#fff'}}>Gracias!!! por ver mi Proyecto.</h2>
        </div>
    </div>
  )
}
