import React from 'react'
import "./Invalid_page.css"
// use public folder asset URL
const logoPath = "/Assets/banner.png";

const Invalid_page = () => {
  return (
    <div className='invalid'>
      <img src={logoPath} alt="404_image" />
      <h2>Page Not Found!</h2>
    </div>
  )
}

export default Invalid_page
