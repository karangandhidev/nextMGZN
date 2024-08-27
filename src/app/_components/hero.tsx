
import Image from 'next/image';
import banner from '../../assets/images/hero1.jpg';
import bannerLogo from '../../assets/images/white-trans.svg'
import useToggleClassOnResize from '../scripts/minHeight'

interface HeroProps {
    contactRef: React.RefObject<HTMLDivElement>; 
  }

const Hero = ({ contactRef }: HeroProps) => {
    useToggleClassOnResize();
  const handleScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className="section heroPage-Container">
            <div className="heroLogo-Container">
                <Image src={bannerLogo} alt="logo" className="nextmgzn-logo" />
            </div>
            <Image src={banner} alt="hero" className="heroBanner" />
            {/* <div className="heroText-Container">
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
            </div> */}
        </div>
    );
};

export default Hero;
