// Importez les dépendances nécessaires (React, les images, et le fichier CSS)
import React from "react";
import "../Styles/footer.css"; // Assurez-vous de remplacer "VotreFichierCSS.css" par le vrai nom de votre fichier CSS

// Importez les images (assurez-vous que les chemins sont corrects)
import iconImage from "../img/icon.svg"
import nexcentImage from "../img/nexcent.svg";
import socialIcon2Image from "../img/social-icons-2.svg";
import socialIcon3Image from "../img/social-icons-3.svg";
import socialIconImage from "../img/social-icons.svg";
import emailIconImage from "../img/send.svg";

// Composant Footer
const Footer = () => {
  return (
    <div className="footer-big">
      <div className="company-info">
        <div className="logo">
          <img className="icon" src={iconImage} alt="Icon" />
          <img className="nexcent" src={nexcentImage} alt="Nexcent" />
        </div>
        <div className="copyright">
          <p className="text-wrapper">Copyright © 2020 Nexcent ltd.</p>
          <div className="div">All rights reserved</div>
        </div>
        <div className="social-links">
          <img className="social-icons" src={socialIcon2Image} alt="Social Icon 2" />
          <img className="social-icons" src={socialIcon3Image} alt="Social Icon 3" />
          <img className="social-icons" src={socialIconImage} alt="Social Icon" />
          <img className="social-icons" src={emailIconImage} alt="Email Icon" />
        </div>
      </div>
      <div className="links">
        <div className="col">
          <div className="text-wrapper-2">Company</div>
          <div className="list-items">
            <div className="text-wrapper-3">About us</div>
            <div className="text-wrapper-4">Blog</div>
            <div className="text-wrapper-4">Contact us</div>
            <div className="text-wrapper-4">Pricing</div>
            <div className="text-wrapper-4">Testimonials</div>
          </div>
        </div>
        <div className="col">
          <div className="text-wrapper-2">Support</div>
          <div className="list-items">
            <div className="text-wrapper-3">Help center</div>
            <div className="text-wrapper-4">Terms of service</div>
            <div className="text-wrapper-4">Legal</div>
            <div className="text-wrapper-4">Privacy policy</div>
            <div className="text-wrapper-4">Status</div>
          </div>
        </div>
        <div className="col-2">
          <div className="text-wrapper-2">Stay up to date</div>
          <div className="email-input-field">
            <div className="overlap-group">
              <div className="input-field-BG"></div>
              <img className="essential-icons-send" src={emailIconImage} alt="Send Icon" />
              <div className="text-wrapper-5">Your email address</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportez le composant Footer pour pouvoir l'utiliser ailleurs
export default Footer;
