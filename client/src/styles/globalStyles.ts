import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: 0;
  border: none;
  list-style: none;
  scroll-behavior: smooth;
  font-family: 'DM Sans', sans-serif;
}

body {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 0.5vw;
}

body::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  padding: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.secondary_color};
  border-radius: 40px;
}

::selection {
  background-color: ${props => props.theme.secondary_color};
  color: #fff;
}

img {
  display: block;
  object-fit: cover;
}

    .app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.primary_color};
}

.error {
  color: ${props => props.theme.brown_color};
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 1rem;
}

// gerais

.app__whitebg {
  background-color: ${props => props.theme.white_color};
}

.app__primarybg {
  background-color: ${props => props.theme.primary_color};
}

.app_container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

.app_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app_wrapper {
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding: 4rem 2rem;

  @media screen and (max-width: 450px) {
    padding: 4rem 1rem 2rem;
  }
}

.copyright {
  width: 100%;
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  p {
    text-transform: uppercase;
    color: ${props => props.theme.black_color};
  }
}

.head-text {
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: ${props => props.theme.black_color};
  text-transform: capitalize;

  span {
    color: ${props => props.theme.secondary_color};
  }

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
}

.p-text {
  font-size: 0.8rem;
  text-align: left;
  color: ${props => props.theme.gray_color};
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
}

.bold-text {
  font-size: 1rem;
  font-weight: 800;
  color: ${props => props.theme.black_color};
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
}

.app_social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  .socialItem {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.white_color};
    margin: 0.25rem 0;
    border: 1px solid ${props => props.theme.lightGray_color};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
      color: ${props => props.theme.gray_color};
    }

    &:hover {
      background-color: ${props => props.theme.secondary_color};
      border-color: ${props => props.theme.secondary_color};

      svg {
        color: ${props => props.theme.white_color};
      }
    }

    @media screen and (min-width: 2000px) {
      width: 70px;
      height: 70px;
      margin: 0.5rem 0;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.app__nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  .app__nav-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;
    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${props => props.theme.secondary_color};
    }

    @media screen and (min-width: 2000px) {
      width: 20px;
      height: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .app__nav,
  .app_social {
    display: none;
  }

  .copyright {
    padding: 2rem;
  }
}

.app_about {
    display: flex;
    justify-content: center;
        align-items: center;
    width: 100%;
    flex: 1;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    .app_profiles {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        cursor: pointer;
        width: 100%;
        max-width: 1200px;
        .app_profile-item {
            flex: 1;
            min-width: 150px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin: 2rem;
            img {
                max-width: 200px;
                object-fit: cover;
                border-radius: 15px;
            }
            @media screen and (min-width: 2000px) {
                max-width: 370px;
                margin: 2rem 4rem;        
            }
            @media screen and (max-width: 600px) {
                max-width: 100%;  
                justify-content: center;
                align-items: center;
            }
        }
    }
    @media screen and (max-width: 600px) {
        padding: 1rem;     
    }
}
.app_footer {
    flex: 1;
    width: 100%;
    flex-direction: column;
    gap: 25px;
}

.app_footer-downloadBx {
    position: relative;
    .app_footer-downloadBtn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: ${props => props.theme.secondary_color};
        background-color: ${props => props.theme.white_color};
        border: 2px solid ${props => props.theme.secondary_color};
        font-weight: 500;
        transition: .35s;
        &:hover {
            scale: .95;
            color: ${props => props.theme.white_color};
            background-color: ${props => props.theme.secondary_color};
        }
    }
}

.app_footer-cards {
    width: 95%;
    max-width: 1152px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;

    .app_footer-card {
        min-width: 290px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: #fef4f5;
        transition: all 0.3s ease-in-out;
        img {
            width: 40px;
            height: 40px;
            margin: 0 0.7rem;
        }
        p {
            font-weight: 500;
        }
        a {
            text-decoration: none;
            font-weight: 500;
        }
        &:hover {
            box-shadow: 0 0 25px #fef4f5;
        }
        &:last-child {
            background-color: #f2f7fb;
            &:hover {
                box-shadow: 0 0 25px #f2f7fb;
            }
        }
        @media screen and (max-width: 450px) {
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
}

.app_footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;
    
    div {
        width: 100%;
        margin: 0.75rem 0;
        border-radius: 10px;
        cursor: pointer;
        background-color: ${props => props.theme.primary_color};
        input,
        textarea {
            width: 100%;
            padding: 0.95rem;
            border: none;
            border-radius: 7px;
            background-color: ${props => props.theme.primary_color};

            color: ${props => props.theme.secondary_color};
            outline: none;
        }
        textarea {
            height: 170px;
            resize: none;
        }
      
        &:hover {
            box-shadow: 0 0 25px ${props => props.theme.primary_color};
        }
    }
    button {
        padding: 1rem 2rem;
        border-radius: 10px;
        border: none;
        background-color: ${props => props.theme.secondary_color};
        font-weight: 500;
        color: ${props => props.theme.white_color};
        outline: none;
        margin: 2rem 0 0 0;
        transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        cursor: pointer;
        width: 100%;
        max-width: 105px;
        display: grid;
        place-items: center;

        .loading {
            max-width: 100%;
        }

        &:disabled {
            opacity: .5;
            cursor: not-allowed;
        }

        &:hover {
            background-color: #2430af;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 1rem 0;
    }
}
#home {
    position: relative;
    background: url("../../assets/bgIMG.png");
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    
    .app_wrapper {
        padding: 0;
        .copyright {
            display: none;
        }   
    }
} 

.app_header {
    flex: 1;
    width: 100%;
    max-height: 100vh;
    flex-direction: row;
    padding: 6rem 2rem 0rem;
    @media screen and (min-width: 2000px) {
        padding-top: 8rem;
    }
    
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        max-height: fit-content;
    }
    
    @media screen and (max-width: 450px) {
        padding: 6rem 1rem 2rem;
    }
}

.app_header-info {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin: 0 2rem;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin-right: 0rem;
    }
}

.app_header-badge {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    
    .badge-cmp,
    .tag-cmp {
        padding: 1rem 2rem;
        background: ${props => props.theme.white_color};
        border-radius: 15px;
        flex-direction: row;
        width: auto;
        box-shadow: 0px 0px 20px rgba(0, 0, 0,.1);
    }
    .badge-cmp {
        gap: 20px;
        max-width: 265px;
    }
    .tag-cmp {
        flex-direction: column;
        margin-top: 3rem;
        max-width: 265px;
        p {
            width: 100%;
            text-transform: uppercase;
            text-align: right;
        }
    }
    span {
        font-size: 2.5rem;
        @media screen and (min-width: 2000px) {
            font-size: 5rem;
        }
    }
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
}

.app_header-circles {
    flex: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    margin-left: 1rem;
    div {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: ${props => props.theme.white_color};
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    
        img {
            max-width: 60%;
            height: 60%;
            user-select: none;
        }
    }
    div:nth-child(1) {
        width: 100px;
        height: 100px;
    }
    div:nth-child(2) {
        margin: 1.75rem;
        width: 150px;
        height: 150px;
    }
    div:nth-child(3) {
        width: 70px;
        height: 70px;
    }
    @media screen and (min-width: 2000px) {
        div:nth-child(2) {
            width: 400px;
            height: 400px;
        }
        div:nth-child(3) {
            width: 170px;
            height: 170px;
        }
        div:nth-child(1) {
            width: 200px;
            height: 200px;
        }
    }
    @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 0;

        div {
            margin: 1rem;
        }
    }
}

.app_header-img {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    img {
        width: 100%;
        object-fit: contain;
        z-index: 1;
    }
    .overlay {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        height: 90%;
    }
    
    @media screen and (max-width: 1200px) {
        margin: 2rem 0;
    }
}
.app_skills {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app_skills-container {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
}

.app_skills-lista {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5rem;
    @media screen and (max-width: 900px) {
        margin-right: 0;
        justify-content: center;
        align-items: center;
    }
}

.app_skills-item {
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;
    width: 110px;
    gap: .5rem;
    div {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #fef4f5;
        img {
            width: 50%;
            height: 50%;
            object-fit: cover;
            user-select: none;
        }
        &:hover {
            box-shadow: 0 0 25px #fef4f5;
        }
        @media screen and (min-width: 2000px) {
            width: 150px;
            height: 150px;
        }
      
        @media screen and (max-width: 450px) {
            width: 70px;
            height: 70px;
        }
    }
    p {
        font-weight: 500;
        text-align: center;
    }
    @media screen and (min-width: 2000px) {
        margin: 1rem 2rem;
        p {
          margin-top: 1rem;
        }
    }
    @media screen and (max-width: 450px) {
        width: 100%;
        height: max-content;
    }
}

.app_skills-xp {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        margin-top: 2rem;
    }
}

.app_skills-xp-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
}

.app_skills-xp-works {
    flex: 1;
    .app_skills-xp-work {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 1rem;
        cursor: pointer;
        h4 {
            font-weight: 500;
        }
        p {
            font-weight: 400;
            color: ${props => props.theme.gray_color};
            margin-top: 5px;
        }
    }
}

.app_skills-xp-ano {
    margin-right: 3rem;

    p {
        font-weight: 800;
        color: ${props => props.theme.secondary_color};
    }
  
    @media screen and (max-width: 450px) {
        margin-right: 1rem;
    }
}

.skills-tooltip {
    max-width: 300px !important;
    background-color: ${props => props.theme.white_color} !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: ${props => props.theme.gray_color} !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;
  
    @media screen and (min-width: 2000px) {
        font-size: 1.75rem !important;
        max-width: 500px !important;
        line-height: 2 !important;
    }
}
.app_testimonial {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app_testimonial-item {
    width: 60%;
    min-height: 320px;
    background-color: ${props => props.theme.white_color};
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    img {
        max-width: 150px;
        border-radius: 50%;
        object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
        min-height: 450px;
        img {
            width: 150px;
            height: 150px;
        }
    }
    @media screen and (max-width: 850px) {
        width: 100%;
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
}

.app_testimonial-content {
    flex: 1;
    height: 100%;
    padding: 0 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    p {
        font-size: 1.25rem;
        line-height: 2rem;
        color: ${props => props.theme.black_color};
    
        @media screen and (min-width: 2000px) {
            font-size: 2rem;
            line-height: 3.5rem;
        }
    }

    h4 {
        font-weight: 600;
        color: ${props => props.theme.secondary_color};
        margin-top: 2rem;
    }
    
    h5 {
        font-weight: 400;
        color: ${props => props.theme.gray_color};
        margin-top: 5px;
    }
    @media screen and (max-width: 600px) {
        margin-top: 2rem;
        padding: 0;
    }
}

.app_testimonial-btns {
    flex-direction: row;
    margin-top: 1rem;
    
    div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: ${props => props.theme.white_color};
        margin: 1rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
            color: ${props => props.theme.secondary_color};
        }
        &:hover {
            background-color: ${props => props.theme.secondary_color};
      
            svg {
                color: ${props => props.theme.white_color};
            }
        }
        @media screen and (min-width: 2000px) {
            width: 100px;
            height: 100px;
      
            svg {
                width: 45px;
                height: 45px;
            }
        }
    }
}

.app_testimonial-brands {
    width: 80%;
    flex-wrap: wrap;
    margin-top: 2rem;

    div {
        width: 150px;
        margin: 1.5rem;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            filter: grayscale(1);
        }

        &:hover {
            img {
                filter: grayscale(0);
            }
        }

        @media screen and (min-width: 2000px) {
            width: 210px;
            margin: 2rem;
        }

        @media screen and (max-width: 450px) {
            width: 120px;
            margin: 1rem;
        }
    } 

    @media screen and (max-width: 800px) {
        width: 100%;
    }
}

.app_works {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app_work-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;
    .app_work-filter-item {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #fff;
        color: #000;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 0.5rem;

        &:hover {
            background-color: ${props => props.theme.secondary_color};
            color: #fff;
        }
        @media screen and (min-width: 2000px) {
            padding: 1rem 2rem;
            border-radius: 0.85rem;
        }
    }
    .item-active {
        background-color: ${props => props.theme.secondary_color};
        color: #fff;
    }
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
}

.app_work-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .app_work-item {
        max-width: 380px;
        width: 100%;
        min-height: 385px;
        flex-direction: column;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #fff;
        color: #000;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
        }
        @media screen and (min-width: 2000px) {
            width: 470px;
            padding: 1.25rem;
            border-radius: 0.75rem;
        }
      
        @media screen and (max-width: 300px) {
            width: 100%;
            margin: 1rem;
        }
    }
}

.app_work-img {
    position: relative;
    width: 100%;
    height: 230px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        @media screen and (min-width: 2000px) {
            height: 350px;
        }
    }
}

.app_work-hover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        margin: 1rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        svg {
            width: 50%;
            height: 50%;
            color: ${props => props.theme.white_color};
        }
    }
}

.app_work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;
    h4 {
        margin-top: 1rem;
        line-height: 1.5;
        @media screen and (min-width: 2000px) {
            margin-top: 3rem;
        }
    }
    .app_work-tag {
        position: absolute;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: #fff;
        top: -25px;
        border-bottom: 1px solid rgba(0, 0, 0,.2);
    }
}   
`;

export default GlobalStyles;
