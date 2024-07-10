import React,{useState} from 'react'
import "../Css/banner2.css"

const Template2 = ({result}) => {

    const [url, setUrl] = useState(null);

    return (
        <div className="banner2-email-container">
            <div className="banner2-hero">
                <img className="banner2-hero-image" src={result.image_url} alt="Generated" />
                <div className="banner2-hero-overlay">
                    <div className="banner2-hero-content">
                        <h1>{result.subject}</h1>
                    </div>
                </div>
            </div>
            <div className="banner2-main">
                <h2>{result.promo}</h2>
                <p>{result.description}</p>
                <a href={result.url} className="banner2-button">Shop Now</a>
            </div>
            <div className="banner2-footer">
                <a href="#">Unsubscribe</a>
            </div>
        </div>
    )
}

export default Template2
