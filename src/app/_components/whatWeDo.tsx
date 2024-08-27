import { useState } from 'react';
import useToggleClassOnResize from '../scripts/minHeight'

const data = [
    { title: 'Product-Market Fit', desc: 'We continuously refine our offerings to ensure they meet market needs and deliver real value.' },
    { title: 'Scalability Mindset', desc: 'We identify and optimize processes that can drive sustainable growth over time.' },
    { title: 'Churn Reduction', desc: 'We analyze churn rates and develop targeted strategies to improve customer retention.' },
    { title: 'Campaign Management', desc: "Comprehensive campaign management to elevate your brand's presence and drive impactful results." },
    { title: 'Data-Driven Decisions', desc: 'We use analytics to guide our strategies and measure our impact.' },
    { title: 'Rapid Experimentation', desc: 'We test ideas quickly, learn from the results, and iterate fast.' },
    { title: 'Customer Retention', desc: 'By understanding our customers, we enhance their experience and drive retention.' },
    { title: 'Innovative Solutions', desc: 'Creativity and outside-the-box thinking drive our pursuit of new growth opportunities.' },     { title: 'Product-Market Fit', desc: 'We continuously refine our offerings to ensure they meet market needs and deliver real value.' },
    { title: 'Scalability Mindset', desc: 'We identify and optimize processes that can drive sustainable growth over time.' },
    { title: 'Churn Reduction', desc: 'We analyze churn rates and develop targeted strategies to improve customer retention.' },
    { title: 'Campaign Management', desc: "Comprehensive campaign management to elevate your brand's presence and drive impactful results." },
];

const WhatWeDo = () => {
    useToggleClassOnResize('.whatWeDoContainer');

    const [mobileShowState, setMobileShowState] = useState(4);
    const [tabletShowState, setTabletShowState] = useState(6);
    const [desktopShowState, setDesktopShowState] = useState(8);

    const handleMobileSeeMore = () => {
        if (mobileShowState + 4 <= data.length) {
            setMobileShowState(data.length);
        }
    };

    const handleDesktopSeeMore = () => {
        if (desktopShowState + 4 <= data.length) {
            setDesktopShowState(data.length);
        }
    };

    const handleTabletSeeMore = () => {
        if (tabletShowState + 3 <= data.length) {
            setTabletShowState(data.length);
        }
    };

    return (
        <div className="whatWeDoContainer section">
            <h1 className="wwd-title">What We Do</h1>
            <div className="wwdContent-Container">
                <div className="wwd-desktopView wwd-Content">
                    {data.slice(0, desktopShowState).map((item, index) => (
                        <div className="wwd-item" key={index}>
                            <div className="wwd-icon"></div>
                            <h2 className="wwd-heading">{item.title}</h2>
                            <p className="wwd-info">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="wwd-mobileView wwd-Content">
                    {data.slice(0, mobileShowState).map((item, index) => (
                        <div className="wwd-item" key={index}>
                            <div className="wwd-icon"></div>
                            <h2 className="wwd-heading">{item.title}</h2>
                            <p className="wwd-info">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="wwd-tabletView wwd-Content">
                    {data.slice(0, tabletShowState).map((item, index) => (
                        <div className="wwd-item" key={index}>
                            <div className="wwd-icon"></div>
                            <h2 className="wwd-heading">{item.title}</h2>
                            <p className="wwd-info">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {mobileShowState < data.length && (
                <div className="seeMore-Button mobile-Button">
                    <button
                        type="button"
                        onClick={handleMobileSeeMore}
                        className="seeMore"
                    >
                        See More
                    </button>
                </div>
            )}
            {tabletShowState < data.length && (
                <div className="seeMore-Button tablet-Button">
                    <button
                        type="button"
                        onClick={handleTabletSeeMore}
                        className="seeMore"
                    >
                        See More
                    </button>
                </div>
            )}
            {desktopShowState < data.length && (
                <div className="seeMore-Button desktop-Button">
                    <button
                        type="button"
                        onClick={handleDesktopSeeMore}
                        className="seeMore"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default WhatWeDo;
