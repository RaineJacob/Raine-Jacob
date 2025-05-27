import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Raine Jacob</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the journey of transforming a raw idea into a functional website or product that can genuinely impact lives.<br/>
  For me, it’s not just about writing code — it’s about building experiences I can be proud of.<br/><br/>

  I’m fluent in <b>C++</b>, have working knowledge of <b>Python</b>, and I’m currently building some exciting projects using the <b>MERN stack</b>.<br/>
  On my radar next: diving into <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b> to level up my dev game.<br/><br/>

  Also, yes — I absolutely love <b>coffee</b>  <CiCoffeeCup />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
