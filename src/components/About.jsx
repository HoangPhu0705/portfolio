import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import {logo_color, menu, close, avatar} from '../assets'
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { UserCard } from 'react-ui-cards';

const InfoCard = () => {
  return (

    <Tilt
      className = "xs:w-[250px] w-full"
    >
    <motion.div
        variants={fadeIn("left", "spring")}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250,
          }}
          className="relative bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[350px] flex justify-evenly 
            items-center flex-col"
          > 
            <img src= {logo_color} alt="title" 
              className="w-24 h-24 object-contain rounded-2xl"
            />


            <div className="">
              <h3 className="text-secondary text-[16px] font-bold text-center mt-2">
                  Phan Hoang Phu
              </h3>
              <p className="text-secondary text-[14px] text-center mt-2">Software Engineer</p>
            </div>

           

            <a
              className="absolute bg-white/80 h-full w-full flex items-center justify-center opacity-0 rounded-2xl hover:opacity-100"
              href="https://vietcv.io/phan-hoang-phu-cv"  
              
            >
              
              <button className="flex flex-col justify-center items-center w-full h-full ">
                <img src= "https://img.icons8.com/carbon-copy/100/download.png" alt="title" 
                  className="w-16 h-16 object-contain rounded-full bg-white"
                />
                <p className="text-primary font-black">My CV</p>
              </button>

              
            </a>

          </div>
      </motion.div>



    </Tilt>


  )
}



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[280px] flex justify-evenly 
            items-center flex-col"
          > 
            <img src={icon} alt="title" 
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>

          </div>
      </motion.div>

    </Tilt>
  )
  
}

const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between ">
        <div className="flex flex-col">
          <motion.div
            variants={textVariant()}
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>


          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As a college student, I am actively developing my skills in softwares development. 
            I have gained some experience in working with frameworks like React, Flutter, NodeJS, ASP.NET and SpringBoot.
            I am enthusiastic about learning and have a strong desire to collaborate closely with clients 
            to create efficient, scalable, and user-friendly solutions that address real-world problems. 
            I am eager to work together with you to transform your ideas into reality and contribute to meaningful projects.
          </motion.p>
        </div>


        <InfoCard />
          
          

        
            
      




      </div>


      

      <div className="mt-20 flex flex-wrap justify-between gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}


      </div>


    </>




  )
}

export default SectionWrapper(About, "about");