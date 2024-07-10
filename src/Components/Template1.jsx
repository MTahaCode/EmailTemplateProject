import React, { useState } from 'react'
import "../Css/banner1.css"

const Template1 = ({ result }) => {

    const [url, setUrl] = useState(null);

  return (
    <div className="email-container">
        <div className="banner_header">
            <h1>{result.subject}</h1>
        </div>
        <div className="banner_main">
            <img className="banner2-hero-image" src={result.image_url} alt="Generated" />
            <h2>{result.promo}</h2>
            <p>{result.description}</p>
            <a href={result.url} className="button">Shop Now</a>
        </div>
        <div className="footer">
            <a href="#">Unsubscribe</a>
        </div>
    </div>
  )
}

export default Template1
