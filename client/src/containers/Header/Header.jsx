import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { AppWrap } from "../../wrapper";
import images from "../../constants/images";

const scaleVariantes = {
    whileInView: {
        scale: [ 0, 1 ],
        opacity: [ 0, 1 ],
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const imgMap = [ images.react, images.redux, images.sass ];

const Header = () => {
    return (
        <section className="app_header app_flex">
            <motion.div
                whileInView={{ x: [ -100, 0 ], opacity: [ 0, 1 ] }}
                transition={{ duration: 0.5 }}  
                className="app_header-info"
            >
                <div className="app_header-badge">
                    <div className="badge-cmp app_flex">
                        <span>👋</span>    
                        <div className="titleBx">
                            <p className="p-text">Olá! Meu nome é:</p>
                            <h1 className="head-text">Gustavo</h1>
                        </div>
                    </div>    
                    <div className="tag-cmp app_flex">
                        <p className="p-text">Desenvolvedor Web</p>
                        <p className="p-text">Full-Stack</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [ 0, 1 ] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app_header-img"
            >
                <img 
                    src={images.profile}
                    alt="Foto de Perfil" 
                    loading="lazy"
                />
                <motion.img
                    whileInView={{ scale: [ 0, 1 ] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="overlay"
                    src={images.circle}
                    loading="lazy"
                    alt="BG"
                />
            </motion.div>
            <motion.div
                variants={scaleVariantes}
                whileInView={scaleVariantes.whileInView}
                className="app_header-circles"
            >
                {
                    imgMap.map((img, index) => (
                        <div className="circle-cmp app_flex" key={index}>
                            <img 
                                src={img} 
                                alt="Círculos"
                                loading="lazy"
                            />
                        </div>
                    ))
                }
            </motion.div>
        </section>
    );
}

export default AppWrap(Header, "home");