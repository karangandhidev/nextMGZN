'use client'

import { useState } from 'react';

const data = [
    {
        title: 'Product-Market Fit',
        desc: 'We continuously refine our offerings to ensure they meet market needs and deliver real value.'
    },
    {
        title: 'Scalability Mindset',
        desc: 'We identify and optimize processes that can drive sustainable growth over time.'
    },
    {
        title: 'Churn Reduction',
        desc: 'We analyze churn rates and develop targeted strategies to improve customer retention.'
    },
    {
        title: 'Campaign Management',
        desc: "Comprehensive campaign management to elevate your brand's presence and drive impactful results."
    },
    {
        title: 'Data-Driven Decisions',
        desc: 'We use analytics to guide our strategies and measure our impact.'
    },
    {
        title: 'Rapid Experimentation',
        desc: 'We test ideas quickly, learn from the results, and iterate fast.'
    },
    {
        title: 'Customer Retention',
        desc: 'By understanding our customers, we enhance their experience and drive retention.'
    },
    {
        title: 'Innovative Solutions',
        desc: 'Creativity and outside-the-box thinking drive our pursuit of new growth opportunities.'
    },
]

const WhatWeDo = () => {
    const [showState, setShowState] = useState(8);
    const [mobileShowState, setMobileShowState] = useState(4);

    return (
        <div className="whatWeDoContainer section">
            <h1 className="title">What We Do</h1>
            <div className="contentWrapper">
                <div className="desktopView">
                    {data.slice(0, showState).map((item, index) => (
                        <div className="item" key={index}>
                            <div className="icon"></div>
                            <h2 className="title">{item.title}</h2>
                            <p className="desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mobileView">
                    {data.slice(0, mobileShowState).map((item, index) => (
                        <div className="item" key={index}>
                            <div className="icon"></div>
                            <h2 className="title">{item.title}</h2>
                            <p className="desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {mobileShowState === 4 && (
                <div className="showMoreButton">
                    <button
                        type="button"
                        onClick={() => setMobileShowState(mobileShowState + 4)}
                        className="showMore"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
}

export default WhatWeDo;
