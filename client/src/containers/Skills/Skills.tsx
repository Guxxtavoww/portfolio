/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { motion } from 'framer-motion';

import { Loader } from 'components';
import { AppWrapper, MotionWrap } from 'wrappers';
import { skillsData, xpData } from 'mock/skillsData';

const Skills: React.FC = () => (
  <React.Fragment>
    <h2 className="head-text">Skills & Experiências</h2>
    <div className="app_skills-container">
      {skillsData.length && xpData.length ? (
        <React.Fragment>
          <motion.div className="app_skills-lista">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app_skills-item app_flex"
              >
                <div
                  className="app_flex"
                  style={{
                    backgroundColor: skill.bgColor ? skill.bgColor : '#edf2f8',
                  }}
                >
                  <img src={skill.image} alt="Skill Img" loading="lazy" />
                </div>
                <p className="p-text">{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="app_skills-xp">
            {xpData?.map((experience, index) => (
              <motion.div className="app_skills-xp-item" key={index}>
                <div className="app_skills-xp-ano">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app_skills-xp-works">
                  {experience.works?.map(work => (
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app_skills-xp-work"
                        data-tip
                        data-for={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.empresa}</p>
                        {/* @ts-ignore */}
                        {/* <ReactToolTip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactToolTip> */}
                      </motion.div>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <div className="loading">
          <Loader />
        </div>
      )}
    </div>
  </React.Fragment>
);

export default AppWrapper(
  MotionWrap(Skills, 'app_skills'),
  'skills',
  'app__whitebg'
);
