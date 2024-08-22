// components/Hero.tsx
import Image from 'next/image';
import image from '@/public/hero.svg';
import logo3 from '@/public/nextMGZN_logo.svg';

interface HeroProps {
    handleScroll?: () => void;
}

const Hero = ({ handleScroll }: HeroProps) => {
    return (
        <div className="heroContainer">
            
        <div className="heroLogo">
                <Image src={logo3} alt="logo" className="heroLogoImage" />
            </div>
            <div className="heroImageContainer">
                    <img alt="hero" className="heroImage" />
                    {/* <div className="heroOverlay"></div> */}
                </div>
                <div className="heroTextContainer">
                    <p className="heroHeading">
                        Sustainable Growth through Smart,
                    </p>
                    <p className="heroHeading">
                        Data Driven Strategies
                    </p>
                    <button className="heroButton" onClick={handleScroll}>
                        Contact
                    </button>
                </div>

        </div>
    );
}

export default Hero;
