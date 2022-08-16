import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import "./About.scss";
import api from "../../api";
import { Loader } from "../../components";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const getAbouts = async () => api.get("/sobre").then(res => setData(res.data)).catch(err => console.log(err));
        
        getAbouts();
    }, []);

    return (
        <React.Fragment>
            <h2 className="head-text">Eu Sei que <span>Bom Desenvolvimento</span> <br/> Quer dizer <span>Bons Negócios</span></h2>    
            <div className="app_profiles">
                {
                    data.length ? (
                        data.map((about, index) => (
                            <motion.div
                                key={about.title + index}
                                whileInView={{ opacity: [ 0.5, 1 ] }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className="app_profile-item"
                            >   
                                <img src={about.image} alt="Img Perfil" />
                                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                                <p className="p-text" style={{ marginTop: 10, textAlign: "justify" }}>{about.desc}</p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="loading">   
                            <Loader />
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
}

export default AppWrap (
    MotionWrap(About, "app_about"),
    "sobre",
    "app__whitebg"
);