import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <section id='footer' 
    className='containerFooter'
    > 
    <p>
        &copy; {currentYear} Chondojoel. <br /> All rights reserved.
    </p>

    </section>
  )
}

export default Footer;