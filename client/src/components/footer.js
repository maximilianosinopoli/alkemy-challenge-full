import React from 'react'

function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='footer'>
            <p>Developed with &#10084;&#65039; by <a href="https://www.linkedin.com/in/maxisinopoli-react/" target="_blank" rel="noreferrer"><span className='developer'>Maximiliano Sinopoli</span></a> - {year}</p>
        </div>
    )
}

export default Footer