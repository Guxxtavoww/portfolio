import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";

import "./Footer.scss";
import images from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";

const Footer = () => {
    const [ formData, setFormData ] = useState({
        nome: "",
        email: "",
        msg: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <React.Fragment>
            <h2 className="head-text">Converse Comigo</h2>
            <div className="app_footer-cards">
                <a href="mailto:gustavoaugustocarcontato@gmail.com" className="app_footer-card">
                    <img src={images.email} alt="Email" />
                    <p className="p-text">gustavoaugustocarcontato@gmail.com</p>
                </a>
                <a href="tel:+55 11 98945-9239" className="app_footer-card">
                    <img src={images.mobile} alt="Celular" />
                    <p className="p-text">+55 11 98945-9239</p>
                </a>
            </div>
            <form 
                className="app_footer-form app_flex" 
                method="POST" 
                action="https://formsubmit.co/gustavoaugustocarcontato@gmail.com"
            >
                <div className="app_flex">
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="Seu Nome"
                        className="p-text" 
                        onChange={handleChange}
                        value={formData.nome}
                    />
                </div>
                <div className="app_flex">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Seu E-mail" 
                        className="p-text" 
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div>
                    <textarea 
                        name="msg"
                        className="p-text"
                        placeholder="Sua Mensagem"
                        onChange={handleChange}
                        value={formData.msg}
                    />
                </div>
                <button type="submit" className="p-text">Enviar</button>
            </form>
            <div className="app_footer-downloadBx">
                <a 
                    href="/assets/Currículo_ Gustavo_Augusto.pdf" 
                    download={true} 
                    className="app_footer-downloadBtn" 
                    title="Baixe meu currículo"
                >
                    <BsDownload className="icon" /> Baixe meu CV
                </a>
            </div>
        </React.Fragment>
    );
}

export default AppWrap (
    MotionWrap(Footer, "app_footer"),
    "contato",
    "app__whitebg",
);