import React from 'react';
import In from './assets/logoIn.png';
import perrito from './assets/perrito.gif';
import Git from './assets/logoGit.png';
import './About.css';

export default function About() {
  return (
    <div className='cont-about'>
        <div className='cont-info'>
          <h1 className='h-info'>Luis Galea</h1>
          <h2 className='h-info'>Full Stack Development Student</h2>
          <h2 style={{color: '#fff'}}>Seguime en Github, Linkedin, y toma te regalo un perrito.</h2>
          <img src={perrito} alt="" className='perrito'/>
          <div style={{ marginRight: '9%' }}>
            <a 
              href="https://github.com/galu7777?tab=repositories" 
              target='_blank'
              rel='noopener noreferrer' 
              >
                <img src={Git} alt="logoGit" className='img'/>
            </a>
            <a 
              href="https://www.linkedin.com/in/luis-galea-207123255" 
              target='_blank'
              rel='noopener noreferrer' 
              >
                <img src={In} alt="logoIn" className='img-In'/>
            </a>
          </div>
          <h2 style={{color: '#fff'}}>Gracias!!! por ver mi Proyecto.</h2>
        </div>
    </div>
  )
}
