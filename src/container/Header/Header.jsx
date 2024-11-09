import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Waves, Embrace the Flow." />
      <h1 className="app__header-h1">The Key to Swimming Excellence: Glide, Grit, and Perfect Strokes</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Dive in with strength, embracing the rhythm of each stroke as you flow through the water. With resilience as your foundation, glide forward gracefully. And with courage, rely on the support of each breath and the calm of the water around you.</p>
      <button type="button" className="custom__button">Explore Courses</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;