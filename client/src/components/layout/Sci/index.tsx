import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const Sci: React.FC = () => (
  <div className="app_social">
    <a
      href="https://github.com/Guxxtavoww"
      target="_blank"
      rel="noopener noreferrer"
      className=" socialItem"
    >
      <BsGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/gustavo-augusto-3a513b1b5/"
      target="_blank"
      rel="noopener noreferrer"
      className=" socialItem"
    >
      <BsLinkedin />
    </a>
    <a
      href="https://www.instagram.com/web_dev_freelancer/"
      target="_blank"
      rel="noopener noreferrer"
      className=" socialItem"
    >
      <BsInstagram />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=100078833855498"
      target="_blank"
      rel="noopener noreferrer"
      className=" socialItem"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://api.whatsapp.com/send?phone=5511989459239&text=Ol%C3%A1%20!%20Gostaria%20de%20fazer%20uma%20proposta%20para%20um%20site%2C%20script%20etc..."
      target="_blank"
      rel="noopener noreferrer"
      className=" socialItem"
    >
      <FaWhatsapp />
    </a>
  </div>
);

export default Sci;
