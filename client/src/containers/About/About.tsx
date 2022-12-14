import React from 'react';
import { motion } from 'framer-motion';

import aboutsData from 'mock/aboutsData';
import { Loader } from '../../components';
import { AppWrapper, MotionWrap } from 'wrappers';

const About: React.FC = () => (
  <>
    <h2 className="head-text">
      Eu Sei que <span>Bom Desenvolvimento</span> <br /> Quer dizer{' '}
      <span>Bons Negócios</span>
    </h2>
    <div className="app_profiles">
      {aboutsData.length ? (
        aboutsData.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: [0.5, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app_profile-item"
          >
            <img src={about.image} alt="Img Perfil" loading="lazy" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className="p-text"
              style={{ marginTop: 10, textAlign: 'justify' }}
            >
              {about.desc}
            </p>
          </motion.div>
        ))
      ) : (
        <div className="loading">
          <Loader />
        </div>
      )}
    </div>
  </>
);

export default AppWrapper(
  MotionWrap(About, 'app_about'),
  'sobre',
  'app__whitebg'
);
