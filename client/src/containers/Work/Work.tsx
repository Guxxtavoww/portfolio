import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { IWork } from 'types';
import projectsData, { tags } from 'mock/projectsData';
import { AppWrapper, MotionWrap } from 'wrappers';

interface IAnimation {
  y: number;
  opacity: number;
}

const Work: React.FC = () => {
  const [filterWork, setFilterWork] = useState<IWork[]>(projectsData);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const [animatedCard, setAnimatedCard] = useState<IAnimation>({
    y: 0,
    opacity: 1,
  });

  const handleWorkFilter = useCallback((item: string) => {
    setActiveFilter(item);
    setAnimatedCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimatedCard({ y: 0, opacity: 1 });

      if (item === 'Todos') {
        setFilterWork(projectsData);
        return;
      }

      setFilterWork(projectsData.filter(work => work.tags.includes(item)));
    }, 500);
  }, []);

  useEffect(() => {
    setAnimatedCard({ y: 0, opacity: 1 });
  }, []);

  return (
    <React.Fragment>
      <h2 className="head-text">
        Meus <span>Projetos</span>
      </h2>
      <React.Fragment>
        <div className="app_work-filter">
          {tags.map((tag, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(tag)}
              className={`app_work-filter-item app_flex p-text ${
                activeFilter === tag && 'item-active'
              }`}
            >
              {tag}
            </div>
          ))}
        </div>
        <motion.div
          animate={animatedCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app_work-portfolio"
        >
          {filterWork.map((trab, index) => (
            <div className="app_work-item app_flex" key={index}>
              <figure className="app_work-img app_flex">
                <img src={trab.image} alt={trab.desc} loading="lazy" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className="app_work-hover app_flex"
                >
                  <a href={trab.link} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app_flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {trab.codeLink && (
                    <a href={trab.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
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
                <p className="p-text" style={{ marginTop: '10px' }}>
                  {trab.desc}
                </p>
                <div className="app_work-tag app_flex">
                  <p className="p-text">{trab.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default AppWrapper(
  MotionWrap(Work, 'app_works'),
  'projetos',
  'app__primarybg'
);
