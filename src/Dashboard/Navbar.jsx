import React, { useState } from 'react';
import Modal from 'react-modal';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { TbHeartRateMonitor } from 'react-icons/tb';
import { CiSettings } from 'react-icons/ci';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { RiMagicLine } from 'react-icons/ri';

Modal.setAppElement('#root'); 

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h3>Pepper Content</h3>
          <p onClick={handleClick}>Platform <IoIosArrowDown /></p>
          <p onClick={handleClick}>Solution <IoIosArrowDown /></p>
          <p onClick={handleClick}>Resources <IoIosArrowDown /></p>
          <p onClick={handleClick}>Talent Network <IoIosArrowDown /></p>
        </div>
        <div className='display'>
          <RxHamburgerMenu />
        </div>
        <div className='button-main'>
          <div className="heading-2">
            <p>Log In</p>
          </div>
          <div className='button'>
            <button>Book A Demo</button>
          </div>
          <div className='button-2'>
            <button>Start A Free Trial</button>
          </div>
        </div>
      </div>
      <Modal className="danish"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
       <h1 className='iamh1'><SlEnergy /> PLATFORM</h1>
      <div className="modal">
      <div className='page2-heading'>
        <div className="page2-grid">
      <div className='page2-cards'>
        <div className='page2-card'>
        <div className="h1-flex">
            <h3>Gen AI for Enterprises</h3>
            <div className='page2-svg'>
            <FaRegArrowAltCircleRight />
            </div>
            </div>
            <p>Enterprises-grades,secure,and full-stack Gen AI</p>
            <img src="platform-gen-ai-mob.webp" alt="" />
        </div>
        <div className="page2-card-1">
          <div className='h1-flex-2'>
            <h3>organic Marketing  </h3>
            <div className='page2-svg-1'>
            <FaRegArrowAltCircleRight />
            </div>
            </div>
            <p>Drive organic growth with a full-blown content SEO suite </p>
            <img src="platform-oms-mob.webp" alt="" />
        </div>
        <div className="page2-card-2">
          <div className='h1-flex-3'>
            <h3>Talent Marketplace  </h3>
            <div className='page2-svg-3'>
            <FaRegArrowAltCircleRight />
            </div>
            </div>
            <p>Get content created at scale with ouur expert-led talent network</p>
            <img src="platform-tm-mob.webp" alt="" />
        </div>
        </div> 
        <div className="page2-footer">
        <h1 className='iamh1'><CiSettings /> Top Features</h1>
        <hr></hr>
        <div className="foot">
          <p>Content Idea Lab</p>
          <p>Content Editor</p>
          <p>Content Audit</p>
          <p>Content Roi and Analytics</p>
          <p>Content Grader</p>
        </div>
        </div>
        </div>
        </div> 
      <div className='vedio-main'>
        <div className="vedio">
        <div className='page2-vedio'>
          <h1><GiArtificialIntelligence/> AI FOR ENTERPRISES</h1>
          <hr></hr>
          <video width="500" height="200" loop autoplay muted>
         <source src="video-gen.mp4" type="video/mp4" />
        </video>
          <p>Get plagiarism free, optimized content created
             using thed’s most powerful AI engine</p>
          </div>
          <div className='page2-vedio-1'>
          <h1><TbHeartRateMonitor /> ORGANIC MARKETING STACK</h1>
          <hr></hr>
          <video width="500" height="200" loop autoplay muted>
            <source src="video-oms.mp4" type="video/mp4" />
           </video>
          <p>Accelerate your
             revenue organically with our full-blown SEO marketing stack</p>
          </div>
          <div className='page2-vedio-2'>
          <h1><RiMagicLine /> TALENT MARKETPLACE</h1>
          <hr></hr>
          <video width="500" height="200" loop autoplay muted>
            <source src="video-tm.mp4" type="video/mp4" />
           </video>
          <p>Scale your content creation by working with creators from our expert-led talent network</p>
          </div>
          </div>
        </div> 
      </div>
      </Modal>
    </>
  );
}

export default Navbar;
