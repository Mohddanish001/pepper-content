import React from 'react'
import Navbar from '../Navbar'
import { SlEnergy } from "react-icons/sl";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function page2() {
  return (
    <>
    <Navbar />
    <div className='page2-heading'>
      <h1><SlEnergy /> PLATFORM</h1>
      <div className='page2-cards'>
        <div className='page2-card'>
            <h1>Gen AI for Enterprises</h1>
            <p>Enterprises-grades,secure,and full-stack Gen AI</p>
            <div className='page2-svg'>
            <FaRegArrowAltCircleRight />
            </div>
            <img src="gen_ai_hero_fd00f85b3a.webp" alt="" />
        </div>
        <div className="page2-card-1">
            <h1>organc Marketing stack </h1>
            <p>Drive organic growth with a full-blown content SEO suite </p>
            <div className='page2-svg'>
            <FaRegArrowAltCircleRight />
            </div>
            <img src="gen_ai_hero_fd00f85b3a.webp" alt="" />
        </div>
        </div>    
        </div>
    </>
  )
}

export default page2
