import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://linkedin.com/in/mikias-worku-8138b8183" target="_blank" rel="noreferrer"> 
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/mikias_worku" target="_blank" rel="noreferrer"> 
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/mikias.workuW" target="_blank" rel="noreferrer"> 
        <FaFacebookF />
      </a>   
    </div>
    
  </div>
);

export default SocialMedia;
