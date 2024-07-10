import React, { useRef, useState } from 'react';
import "../Css/templateGeneration.css";
import Template1 from '../Components/Template1.jsx';
import Template2 from '../Components/Template2.jsx';
import InputSection from '../Components/InputSection.jsx';
 
const TemplateGeneration = () => {
  const prompt = useRef(null);
  const [urlForShop, setUrlFromShop] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
 
  const [result, setResult] = useState({
    description: "",
    promo: "",
    subject: "",
    image_url: "",
  });
 
  const setResultToDefault = () => {
    setResult({
      description: "",
      promo: "",
      subject: "",
      image_url: "",
    });
  };
 
  const handleSendPrompt = () => {
    const Obj = {
      "query": prompt.current.value,
    };
    console.log(Obj);
    fetch("https://ideal-wildly-cat.ngrok-free.app/query", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Obj),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setResult(data);
    });
  };
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file.');
    }
  };
 
  const handleRemoveImage = () => {
    setUploadedImage(null);
  };
 
  return (
    <div className="fullScreen">
      <header className='header'>Template Generation</header>
      <div className="mainContainer">
        
        {/* user input */}
        <InputSection 
          setUrlFromShop={setUrlFromShop} 
          urlForShop={urlForShop} 
          setResultToDefault={setResultToDefault}
          handleSendPrompt={handleSendPrompt}
          prompt={prompt}
          handleFileChange={handleFileChange}
          handleRemoveImage={handleRemoveImage}
        />
 
        {/* output */}
        <div className="outputContainer">
          {
            (result.image_url || uploadedImage) && (
            <>
              <Template1 result={{ ...result, image_url: uploadedImage || result.image_url }} />
              <Template2 result={{ ...result, image_url: uploadedImage || result.image_url }} />
            </>
            )
          }
        </div>
      </div>
    </div>
  );
}
 
export default TemplateGeneration;