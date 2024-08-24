
import Image from 'next/image';
// import { useState } from 'react';
import banner from '../../assets/images/hero1.jpg';
import bannerLogo from '../../assets/images/white-trans.svg'

interface HeroProps {
  handleScroll?: () => void;
}

const Hero = ({ handleScroll }: HeroProps) => {
    return (
        <div className="section heroPage-Container">
            <div className="heroLogo-Container">
                <Image src={bannerLogo} alt="logo" className="nextmgzn-logo" />
            </div>
            <Image src={banner} alt="hero" className="heroBanner" />
            <div className="heroText-Container">
                <p className="heroHeading">
                    Sustainable Growth,
                </p>
                <p className="heroHeading">
                    through Smart,
                </p>
                <p className="heroHeading">
                    Data Driven Strategies
                </p>
                <div className="heroButton-Container">
                    <button className="heroButton" onClick={handleScroll}>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
