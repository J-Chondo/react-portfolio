import React from 'react';
import heroImg from  '../assets/joel-img.jpg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg'
import twitterLight from '../assets/twitter-light.svg';
import twitterDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import { useTheme } from '../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme ();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <div id='hero' className='container'>
        <div className='colorModeContainer'>
        <img 
        className='heroImg'
        src={heroImg}
        alt="" 
        />
          <img
          className='colorMode'
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        </div>
        <div className='info'>
          <h1>Joel <br />Chondo</h1>
          <h2>Web Developer</h2>
          <span>
          <a href="https://x.com/Chondojoel?s=09" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/J-Chondo" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/dio-chondo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
          <p className='description'>
          With a passion for developing modern React web apps for commercial
          businesses.
          </p>
          <a href="https://github.com/J-Chondo">
          <button className="hover">Resume</button>
        </a>
        </div>
    </div>
  )
}

export default Hero;