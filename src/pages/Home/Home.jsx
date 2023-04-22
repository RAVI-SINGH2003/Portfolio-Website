import React from 'react';
import logo from "../../images/logo.jpg"
import './Home.css'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { resumeViewLink,resumeDownloadLink } from '../../assets/data';

const Home = () => {
  return (
    <div className="home">
      <div className="home-details">
        <h1>Hey there , I am Ravi Singh</h1>
        <p>I am a Full Stack Web Developer</p>
        <button>
          <a href={resumeViewLink} target="blank" style={{ color: "white" }}>
            View Resume
          </a>
        </button>
        <button>
          <a
            href={resumeDownloadLink}
            download="Ravi's Resume"
            style={{ color: "white" }}
          >
            Download
          </a>
        </button>
        <div className="bio-links">
          <a
            href="https://www.linkedin.com/in/ravi-singh-b849bb205/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/RAVI-SINGH2003" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/tweet_RaviSingh" target="blank">
            <AiFillTwitterCircle />
          </a>
          <a href="https://leetcode.com/ravirainbow2003/" target="blank">
            <SiLeetcode />
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src={logo} alt="profile-pic" />
      </div>
    </div>
  );
}

export default Home
