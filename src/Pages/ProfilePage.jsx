import React from 'react'
import "../Css/profile.css"
import stayaLogo from "../Media/stayaLogo.jpeg"
import sample from "../Media/sample.png"
import dummy from "../Media/dummy.jfif"

const ProfilePage = () => {

    const selectColor = (element) => {
        // document.querySelectorAll('.color').forEach(function(color) {
        //     color.classList.remove('selected-color');
        // });
        // element.classList.add('selected-color');
    }
    return (
        <div className="profile_page-container">
            <div className="profile_page-sidebar">
                <div className="profile_page-logo">
                    <img src={stayaLogo} alt="Sendif Logo" />
                </div>
                <button className="profile_page-new-design">New Design</button>
                <ul className="profile_page-menu">
                    <li><a href="#">My Designs</a></li>
                    <li><a href="#">Templates</a></li>
                    <li><a href="#">Brand Kit</a></li>
                </ul>
            </div>
            <div className="profile_page-main-content">
                <h1>Brand Kit</h1>
                <form id="brand-kit-form">
                    <div className="profile_page-form-section">
                        <label for="logo">Logo</label>
                        <img src={dummy} alt="" id="logo-preview" />
                        <input type="file" id="logo" name="logo" accept="image/*" />
                    </div>
                    <div className="profile_page-form-section">
                        <label for="brand-story">Can you please let us know how and why you came up with your brand?</label>
                        <textarea id="brand-story" name="brand-story"></textarea>
                    </div>
                    <div className="profile_page-form-section">
                        <label for="bestselling-products">What are your bestselling products and the features you would like to highlight?</label>
                        <textarea id="bestselling-products" name="bestselling-products"></textarea>
                    </div>
                    <div className="profile_page-form-section">
                        <label for="marketing-goals">What are your email marketing goals, if any, other than to drive sales?</label>
                        <textarea id="marketing-goals" name="marketing-goals"></textarea>
                    </div>
                    <div className="profile_page-colors">
                        <h2>Colors</h2>
                        <div className="profile_page-color-palette">
                            <div className="profile_page-color" style={{backgroundColor: "#E9E2E2"}} onclick={selectColor(this)}></div>
                            <div className="profile_page-color" style={{backgroundColor: "#4F0505"}} onclick={selectColor(this)}></div>
                            <div className="profile_page-color" style={{backgroundColor: "#187918"}} onclick={selectColor(this)}></div>
                        </div>
                    </div>
                    <button type="submit" className="profile_page-save-changes">Save Changes</button>
                    <div id="form-feedback" className="profile_page-hidden">Form submitted successfully!</div>
                </form>
            </div>
            <div className="profile_page-additional-content">
                <h2>Tips & Guidelines</h2>
                <div className="profile_page-tips">
                    <ul>
                        <li>Ensure your logo is clear and represents your brand identity.</li>
                        <li>Choose colors that align with your brand message.</li>
                        <li>Highlight the key features of your products.</li>
                    </ul>
                </div>
                <h2>Testimonials</h2>
                <div className="profile_page-testimonials">
                    <p>"This tool has made our branding process so much easier!" - Jane Doe</p>
                    <p>"The live preview feature is a game-changer." - John Smith</p>
                </div>
                <div className="profile_page-gallery">
                    <img src={sample} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
