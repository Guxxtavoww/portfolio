import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";
import React, { useState, useEffect } from "react";

import "./Skills.scss";
import api from "../../api";
import { Loader } from "../../components"; 
import { AppWrap, MotionWrap } from "../../wrapper";

const Skills = () => {
    const [ skills, setSkills ] = useState([]);
    const [ experiencies, setExperiences ] = useState([]);

    useEffect(() => {
        api.get("/experiencias").then(res => setExperiences(res.data)).catch(err => console.log(err));

        api.get("/skills").then(res => setSkills(res.data)).catch(err => console.log(err));
    }, []);

    return (
        <React.Fragment>
            <h2 className="head-text">Skills & Experiências</h2>
            <div className="app_skills-container">
                {
                    skills.length && experiencies.length ? (
                        <React.Fragment>
                                <motion.div className="app_skills-lista">
                                    {
                                        skills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                whileInView={{ opacity: [ 0, 1 ] }}
                                                transition={{ duration: 0.5 }}
                                                className="app_skills-item app_flex"
                                            >
                                                <div className="app_flex" style={{ backgroundColor: skill.bgColor ? skill.bgColor : "#edf2f8" }}>
                                                    <img src={skill.image} alt="Skill Img" loading="lazy" />
                                                </div>
                                                <p className="p-text">{skill.title}</p>
                                            </motion.div>
                                        ))
                                    }
                                </motion.div>
                                <div className="app_skills-xp">
                                    {
                                        experiencies?.map((experience, index) => (
                                            <motion.div className="app_skills-xp-item" key={index}>
                                                <div className="app_skills-xp-ano">
                                                    <p className="bold-text">{experience.year}</p>
                                                </div>
                                                <motion.div className="app_skills-xp-works">
                                                    {
                                                        experience.works?.map(work => (
                                                            <React.Fragment key={work.name}>
                                                                <motion.div
                                                                    whileInView={{ opacity: [ 0, 1 ] }}
                                                                    transition={{ duration: 0.5 }}
                                                                    className="app_skills-xp-work"
                                                                    data-tip
                                                                    data-for={work.name}
                                                                >
                                                                    <h4 className="bold-text">{work.name}</h4>
                                                                    <p className="p-text">{work.empresa}</p>
                                                                    <ReactToolTip
                                                                        id={work.name}
                                                                        effect="solid"
                                                                        arrowColor="#fff"
                                                                        className="skills-tooltip"
                                                                    >
                                                                        {work.desc}
                                                                    </ReactToolTip>
                                                                </motion.div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </motion.div>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                        </React.Fragment>
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
    MotionWrap(Skills, "app_skills"), 
    "skills",
    "app__whitebg"
);