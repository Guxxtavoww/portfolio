import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Work.scss";
import api from "../../api";
import { Loader } from "../../components";
import { AppWrap, MotionWrap }from "../../wrapper";

const Work = () => {
    const [ work, setWork ] = useState([]);
    const [ tags, setTags ] = useState([]);
    const [ filterWork, setFilterWork ] = useState([]);
    const [ activeFilter, setActiveFilter ] = useState("Todos");
    const [ animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {        
        api.get("/projetos").then(res => {
            setWork(res.data);
            setFilterWork(res.data);
        }).catch(err => console.log(err));

        api.get("/tags").then(res => {
            setTags(res.data);
        }).catch(err => console.log(err));
    }, []);

    const handleWorkFilter = item => {
        setActiveFilter(item);
        setAnimatedCard([{ y: 100, opacity: 0 }]);
        setTimeout(() => {
            setAnimatedCard([{ y: 0, opacity: 1 }]);
            if(item === "Todos") {
                setFilterWork(work);
                return;
            }

            setFilterWork(work.filter(work => work.tags.includes(item)));
        }, 500);
    };

    return (
        <React.Fragment>
            <h2 className="head-text">Meus <span>Projetos</span></h2>
            {
                tags.length && filterWork.length ? (
                    <React.Fragment>
                        <div className="app_work-filter">
                            {
                                tags.map((item, index) => (
                                    <div key={index} onClick={() => handleWorkFilter(item)} className={`app_work-filter-item app_flex p-text ${activeFilter === item && "item-active"}`}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>      
                        <motion.div
                            animate={animatedCard}
                            transition={{ duration: 0.5, delayChildren: 0.5 }}
                            className="app_work-portfolio"
                        >   
                            {filterWork.map((trab, index) => (
                                <div className="app_work-item app_flex" key={index}>
                                    <figure className="app_work-img app_flex">
                                        <img src={trab.image} alt={trab.name} loading="lazy" />
                                        <motion.div
                                            whileHover={{ opacity: [ 0, 1 ] }}
                                            transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                                            className="app_work-hover app_flex"
                                        >
                                            <a href={trab.link} target="_blank" rel="noreferrer">
                                                <motion.div
                                                    whileInView={{ scale: [ 0, 1 ] }}
                                                    whileHover={{ scale: [ 1, 0.9 ] }}
                                                    transition={{ duration: 0.25 }}
                                                    className="app_flex"
                                                >
                                                    <AiFillEye />
                                                </motion.div>
                                            </a>
                                            {trab.codeLink && (
                                                <a href={trab.codeLink} target="_blank" rel="noreferrer">
                                                    <motion.div
                                                        whileInView={{ scale: [ 0, 1 ] }}
                                                        whileHover={{ scale: [ 1, 0.9 ] }}
                                                        transition={{ duration: 0.25 }}
                                                        className="app_flex"
                                                    >
                                                        <AiFillGithub />
                                                    </motion.div>
                                                </a>
                                            )}
                                        </motion.div>
                                    </figure>
                                    <div className="app_work-content app_flex">
                                        <h4 className="bold-text">{trab.title}</h4>
                                        <p className="p-text" style={{ marginTop: "10px" }}>{trab.desc}</p>
                                        <div className="app_work-tag app_flex">
                                            <p className="p-text">{trab.tags[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>  
                    </React.Fragment>
                ) : (
                    <div className="loading">
                        <Loader />
                    </div>
                )
            }
        </React.Fragment>
    );
}

export default AppWrap (
    MotionWrap(Work, "app_works"), 
    "projetos", 
    "app__primarybg"
);