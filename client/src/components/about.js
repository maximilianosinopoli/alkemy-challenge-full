import React from 'react'

function About() {


console.log(document.location.href)

    return (
        <div className='about'>
           <div className='about-header'>
               <div className='title-container'>
                <h1 className='about-title'>I'm Max,</h1>
                <h1 className='about-title'>a Software Engineer</h1>
               </div>
               <img src="./about.png" alt="" className='about-img'></img>
           </div>
           <div className='about-description'>
               <p>
                This is the project that I developed to apply for <a rel="noreferrer" href="https://www.alkemy.org/" className='alkemy' target="_blank">Alkemy</a>.
                Alkemy is a training platform where juniors software developers accelerate and certify their skills during a six-week project. The training takes place in practice labs that simulate real-life work environments.
               </p>
           </div>
        </div>
    )
}

export default About