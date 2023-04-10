import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='cont-about'>
        <div className='cont-info'>
          <h1 className='h-info'>Luis Galea</h1>
          <h2 className='h-info'>Full Stack Development Student</h2>
          <h2 className='h-info'>Seguime en Github</h2>
          <a 
            href="https://github.com/galu7777?tab=repositories" 
            target='_blank'
            rel='noopener noreferrer' 
            className='lnk'>Link a mi Github</a>
        </div>
    </div>
  )
}
