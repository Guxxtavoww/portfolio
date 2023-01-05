import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import testemonialsData from 'mock/testemonialsData';
import { AppWrapper, MotionWrap } from 'wrappers';

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => setCurrentIndex(index);

  return (
    <React.Fragment>
      {testemonialsData.length && (
        <React.Fragment>
          <div className="app_testimonial-item app_flex">
            <img
              src={testemonialsData[currentIndex].image}
              alt="Imagem Testemunho"
              loading="lazy"
            />
            <div className="app_testimonial-content">
              <p className="p-text">{testemonialsData[currentIndex].msg}</p>
              <div>
                <h4 className="bold-text">
                  {testemonialsData[currentIndex].autor}
                </h4>
                {testemonialsData[currentIndex].company && (
                  <h5 className="p-text">
                    {testemonialsData[currentIndex].company}
                  </h5>
                )}
              </div>
            </div>
          </div>
          <div className="app_testimonial-btns app_flex">
            <div
              className="app_flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testemonialsData.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app_flex"
              onClick={() =>
                handleClick(
                  currentIndex === testemonialsData.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AppWrapper(
  MotionWrap(Testimonial, 'app_testimonial'),
  'testemunhos',
  'app__primarybg'
);
