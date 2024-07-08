import React, { useEffect ,useState} from 'react';
import Navbar from "../Navbar";
import { GiChessKnight } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { LuFolderSearch2 } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaArrowRight, FaRegArrowAltCircleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { IoIosArrowDown } from 'react-icons/io';
import LogoSlider from './LogoSlider';
import Demo from "./Demo";
import Footer from './Footer';

function Page1() {
  useEffect(() => {

    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter(item => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-1">
        <div className="head">
          <h1>The future of content is Human + AI</h1>
          <p>
            Pepper is the AI co-pilot for enterprise marketers who want to drive
            growth through great content. Tap into our powerful technology and
            on-demand creative network to tell great stories at scale.
          </p>
          <div className="dash-button">
            <button>Book a Demo</button>
          </div>
        </div>
        <div className="dash-logo">
          <img src="dash-logo.webp" alt="logo" />
        </div>
      </div>
      <div className="page-2">
        <div className="head-1">
          <h1>THE SECRET TO SUCCESS FOR OVER 2,500 INDUSTRY LEADERS</h1>
        </div>
        <div className="seasons">
          <img src="easiestToUse.webp" alt="" />
          <img src="highPerformer.webp" alt="" />
          <img src="leaderWinter.webp" alt="" />
          <img src="leaderSmallbusiness.webp" alt="" />
          <img src="top100.webp" alt="" />
          <img src="momentumLeader.webp" alt="" />
        </div>
      </div>
      <LogoSlider />
      <div className="page-3">
        <div className="head-2">
          <h1>The AI-powered platform of your dreams</h1>
          <p>
            Pepper is purpose-built for enterprise marketing leaders who want
            their teams to create better content, faster - giving you the
            strategy, talent, and technology you need to succeed.
          </p>
        </div>
        <div className="dash-logo-1">
          <img src="ai_powered_image_013bde2148.webp" alt="" />
        </div>
      </div>
      <div className="page-4">
        <div className="icon">
          <GiChessKnight />
        </div>
        <div className="text">
          <p>Content Strategy</p>
        </div>
      </div>
      <div className="head-3">
        <h1>Work with our experts to create a robust content strategy</h1>
      </div>
      {/* <div className='background'>
      <div className="container" data-aos="fade-left">
        <div className="container-table">
          <ul>
            {[
              'Conducting market research',
              'Crafting a unique proposition',
              'Future-back strategy development',
              'Measuring success at each step',
            ].map((item, index) => (
              <React.Fragment key={index}>
                <li onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item}
                  <IoIosArrowDown style={{ transform: openDropdowns.includes(index) ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </li>
                {openDropdowns.includes(index) && (
                  <p>
                    We gather valuable insights directly from consumers by conducting thorough research. "{item}".
                  </p>
                )}
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="container-image">
          {openDropdowns.map((index) => (
            <img key={index} src={`content-strategy-img-1-${index + 1}.webp`} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div> */}
      {/* <SlidingCard/> */}
      <div className="page-5">
        <div className="icon-1">
          <SlEnergy />
        </div>
        <div className="text-1">
          <p>AI-Powered Technology</p>
        </div>
      </div>
      <div className="head-3">
        <h1>
          Power your end-to-end organic marketing process with our powerful
          stack
        </h1>
      </div>
      <div className="page-5">
        <div className="icon-2">
          <SlEnergy />
        </div>
        <div className="text-2">
          <p>AI-Powered Technology</p>
        </div>
      </div>
      <div className="head-4">
        <h1>Limitless creativity, powered by experts</h1>
        <p>
          Get matched with the best-suited creators, as per your industry and
          use case
        </p>
      </div>
      <div className="page-6">
        <div className="title">
          <h1>Create content that drives ROI</h1>
        </div>
        <div className="cardgroup">
          <div className="cardu">
            <div className="icon-flex">
              <div className="icon-text">
                <p>
                  <LuFolderSearch2 /> Seo
                </p>
              </div>
              <div className="card-icon">
              <FaRegArrowAltCircleRight />
              </div>
            </div>
            <h1>Win the new age of SEO</h1>
            <p>
              Drive high-intent traffic with predictive insights, the world's
              most powerfull SEO content co-pilot, the expert the talent to
              produce orignal content.
            </p>
            <img src="use-case-seo-image.webp" alt="" />
          </div>
          <div className="card-grid">
            <div className="card-1">
              <div className="icon-flex-1">
                <div className="icon-text-1">
                  <p>
                    <GiNetworkBars /> DEMAND GEN
                  </p>
                </div>
                <div className="card-icon-1">
                <FaRegArrowAltCircleRight />
                </div>
              </div>
              <h1>Dominate the dark funnel</h1>
              <p>
                Create Dynamic through leadership and demand gen content with
                top 3% industry experts-supercharged by AI tools.
              </p>
              <div className="card-image-1">
                <img src="download.webp" alt="" />
              </div>
            </div>
            <div className="card-2">
              <div className="icon-flex-2">
                <div className="icon-text-2">
                  <p>
                    VEDIO <BiSolidMoviePlay />
                  </p>
                </div>
                <div className="card-icon-2">
                <FaRegArrowAltCircleRight />
                </div>
              </div>
              <h1>Stop the scroll</h1>
              <p>
                create vedios that captivate your audience and drive
                leads-social vedios, product explainers,commericals, and more.
              </p>
              <div className="card-image-2">
                <img src="use-case-video-mob-image.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title-1">
        <h1>Get the Pepper Advantage</h1>
      </div>
      <div className="card-group">
        <div className="cards-1">
          <h1>Scale content</h1>
          <p>
            Create content at scale with on-demand expertise and generative AI
          </p>
          <img src="scale-content.svg" alt="scale-content" />
        </div>
        <div className="cards-2">
          <h1>Reduced CAC</h1>
          <p>
            Create content at scale with on-demand expertise and generative
            AIGrow your organic presence and reduce dependence on paid channels
            with optimised content
          </p>
          <img src="reduce-cac.svg" alt="dreduce-cac" />
        </div>
        <div className="cards-3">
          <h1>Increase productivity</h1>
          <p>
            Bring your content, data, and SEO teams on a single platform that
            powers your content marketing lifecycle
          </p>
          <img src="increase-productivity.svg" alt="increase-productivity" />
        </div>
        <div className="cards-4">
          <h1>Measure content RoI</h1>
          <p>
            Prove and improve your content RoI by using our AI-powered platform
            integrated with the best-in-class tools
          </p>
          <img src="measure-roi.svg" alt="measure-roi" />
        </div>
      </div>
      <div className="title-2">
        <h1>The world's top marketing teams use Pepper</h1>
      </div>
      <div className="page-7">
        <div className="box-main">
          <div className="box">
            <h4>
              “Pepper is helping us with really great content across the entire
              United States & create local content, for all of these types of
              destinations. So the scaling capabilities for authentic content at
              scale are truly wonderful.”
            </h4>
            <div className="box-image">
              <div>
                <h1>Admin</h1>
                <p>SVP Marketing, RVshare</p>
              </div>
              <div>
                <img src="circular-play-dark.svg" alt="circular-play" />
              </div>
            </div>
          </div>
        </div>
        <div class="box-svg">
          <img src="cred-logo-light.webp" alt="cred-logo" />
          <h1>
            How Pepper Scaled CRED's product listings that drove app conversion
          </h1>
          <span class="line-break"></span>
          <div className=" para">
            <div className="para-1">
              <h2>250%</h2>
              <p>growth in organic traffic</p>
              <span>
                Read Case Study <FaArrowRight />
              </span>
            </div>
            <div className="para-2">
              <h2>2000%</h2>
              <p>surge in app downloads</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-8">
        <div className="box-main-1">
          <img src="rv_share_white_logo.webp" alt="" />
          <h1>10k+</h1>
          <p>content piece delivered</p>
          <span>
            Read Case Study <FaArrowRight />
          </span>
        </div>
        <div className="box-main-2">
          <div className="box-main-image">
            <p>
              “Pepper brings the entire team together. My content team, my SEO
              team, my brand team, CRM team, growth team. All of them have
              access to the platform. They exactly know what content is being
              created.”
            </p>
            <h3>Admin</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
              atque.
            </p>
          </div>
          <div className="image-main">
            <img src="image-with-play.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="Page-head">
        <h1>Resources</h1>
      </div>
      <div className="page-9">
        <div className="image-flex">
          <div className="multi-1">
            <h1>Ebooks</h1>
            <p>
              Explore in-depth guides on content marketing, SEO, design, and
              more.
            </p>
            <h4>Know More</h4>
          </div>
        </div>
        <div className="multis-2">
          <div className="multi-2">
            <div className="flexes">
              <h1>Case Studies</h1>
              <div className="multi-image-1">
                <img src="case-study-resource.svg" alt="" />
              </div>
            </div>
            <p>Check out how Pepper Content drove its customers to success.</p>
            <h4>Know More </h4>
          </div>
        </div>
        <div className="multis-2">
          <div className="multi-3">
            <div className="flexes">
              <h1>Blogs</h1>
              <div className="multi-image-2">
                <img src="blogs_resource_d41414d301.svg" alt="" />
              </div>
            </div>
            <p>Get insights on the latest trends in the marketing industry.</p>
            <h4>Know More </h4>
          </div>
        </div>
      </div>
      <div className="vishal">
        <div className="multi-4">
          <div className="flexes-1">
            <h1>Help center</h1>

            <div className="multi-image-4">
              <img src="help-center-resource.svg" alt="" />
            </div>
          </div>
          <p>Learn about the Creator Platform: how-tos, FAQs, more.</p>
          <h4>Know More </h4>
        </div>
        <div className="multi-5">
          <div className="flexes-1">
            <h1>Creator Support</h1>

            <div className="multi-image-3">
              <img src="creator-resource.svg" alt="" />
            </div>
          </div>
          <p>From how-to's to FAQs, learn more about the Creator Platform.</p>
          <h4>Know More </h4>
        </div>

        <div className="multi-main">
          <div className="multi-6">
            <div className="flexes-1">
              <h1>Events</h1>
            </div>
            <p>
              Check out the upcoming curation of webinars, in-person events, and
              more.
            </p>
            <h4>Know More </h4>
          </div>
          <div className="cards-image">
            <img src="events-resource-desk.webp" alt="" />
          </div>
        </div>
      </div>
      <Demo />
      <Footer />
    </>
  );
}

export default Page1;
