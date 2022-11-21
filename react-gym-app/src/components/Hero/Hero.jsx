import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition = {type:'spring', duration:3};
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="best-ad">
          <motion.div initial={{left:mobile?"160px":"238px"}} 
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
          ></motion.div>
           <span>The Best Fitness club in the Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
            <div>
                <span>
                <NumberCounter end={70} start={10} delay='2' preFix='+'/>
                </span>
                <span>Trainers</span>
            </div>
            <div>
                <span>
                <NumberCounter end={1500} start={1000} delay='2' preFix="+"/>
                </span>
                <span>Members Joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50} start={10} delay='2' preFix='+'/>
                </span>
                <span>Fitness Programs</span>
            </div>
        </div>
        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:'-1rem'}} 
          whileInView={{right:'4rem'}}
          transition={transition}
        
        className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} className="hero-image" alt=" "/>
        <motion.img 
        initial={{right:'11rem'}} 
          whileInView={{right:'20rem'}}
          transition={transition}
        src={hero_image_back} className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt=" "/>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
