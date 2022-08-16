import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./Testimonial.scss";
import api from "../../api";
import { AppWrap, MotionWrap } from "../../wrapper";

const Testimonial = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ testimonials, setTestimonials ] = useState([]);

    const handleClick = index => setCurrentIndex(index);

    useEffect(() => {
        api.get("/testemunhos").then(res => setTestimonials(res.data)).catch(err => console.log(err));
    }, []);

    return (
        <React.Fragment>
            {
                testimonials.length && (
                    <React.Fragment>
                        <div className="app_testimonial-item app_flex">
                            <img src={testimonials[currentIndex].image} alt="Imagem Testemunho" />
                            <div className="app_testimonial-content">
                                <p className="p-text">{testimonials[currentIndex].msg}</p>
                                <div>
                                    <h4 className="bold-text">{testimonials[currentIndex].autor}</h4>
                                    {testimonials[currentIndex].company && <h5 className="p-text">{testimonials[currentIndex].company}</h5>}
                                </div>
                            </div>
                        </div>
                        <div className="app_testimonial-btns app_flex">
                            <div className="app_flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                                <HiChevronLeft />
                            </div>

                            <div className="app_flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                                <HiChevronRight />
                            </div>
                        </div>
                    </React.Fragment>
                ) 
            }
        </React.Fragment>
    );
}

export default AppWrap (
    MotionWrap(Testimonial, "app_testimonial"), 
    "testemunhos",
    "app__primarybg"
);