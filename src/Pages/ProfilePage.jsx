import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import "../Css/profile.css";
import stayaLogo from "../Media/stayaLogo.png";
import dummy from "../Media/dummy.png";
import { useNavigate } from 'react-router-dom';
import Editor from './Editor';
import TemplateGeneration from './TemplateGeneration';
import SavedTemplates from '../Components/SavedTemplates';
import useGlobalContext from '../Hooks/useGlobalContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet, Route, Routes, Navigate, Link } from 'react-router-dom';

const ProfilePage = ({
    templateForEditor,
    setTemplateForEditor
}) => {
    const { globalState } = useGlobalContext();

    const navigate = useNavigate();

    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={`profile_page-container ${menuVisible ? 'menu-visible' : ''}`}>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Abel&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet" />
            </Helmet>
            <div className={`profile_page-sidebar ${menuVisible ? 'visible' : ''}`}>
                <button className="profile_page-menu-toggle" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="profile_page-logo">
                    <img src={stayaLogo} alt="Sendif Logo" />
                </div>
                <button className="profile_page-new-design" onClick={() => navigate("/profile/template-generation")}>
                    <i className="fa-solid fa-pen-to-square"></i>New Design
                </button>
                <ul className="profile_page-menu">
                    <li>
                        <Link to="saved" className='design-btn' style={{ backgroundColor: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
                            <i className="fa-solid fa-folder"></i>My Designs
                        </Link>
                    </li>
                    <li><a href="#"><i className="fa-solid fa-wand-magic-sparkles"></i>Templates</a></li>
                    <li><a href="#"><i className="fa-brands fa-slack"></i>Brand Kit</a></li>
                </ul>
            </div>
            <Routes>
                <Route 
                    path="" 
                    element={<Navigate 
                        to="template-generation" 
                        replace
                    />} 
                />
                <Route 
                    path="template-generation" 
                    element={<TemplateGeneration 
                        menuVisible={menuVisible} 
                        setMenuVisible={setMenuVisible}
                        templateForEditor={templateForEditor} 
                        setTemplateForEditor={setTemplateForEditor}
                    />} 
                />
                <Route 
                    path="template-editor" 
                    element={<Editor 
                        loginCredentials={globalState.loginCredentials} 
                        templateForEditor={templateForEditor} 
                        setTemplateForEditor={setTemplateForEditor}
                    />}
                />
                <Route 
                    path="saved" 
                    element={<SavedTemplates 
                        loginCredentials={globalState.loginCredentials}  
                        setTemplateForEditor={setTemplateForEditor}
                        menuVisible={menuVisible}
                        setMenuVisible={setMenuVisible}
                    />} 
                />
            </Routes>
            <Outlet/>
        </div>
    );
};

export default ProfilePage;
