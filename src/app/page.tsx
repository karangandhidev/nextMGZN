'use client';
import Hero from './_components/hero';
import WhatWeDo from './_components/whatWeDo';
import Goal from './_components/goal';
import Contact from './_components/contactUs';
import './styles/main.scss';
import Script from "next/script";

const Home = () => {
  return (
    <div className="container">
      {/* <div> */}
      <Hero />
      <WhatWeDo />
      <Goal />
      <Contact />
      <Script type="text/javascript" src="./scripts/scrollDelay.js" />
    </div>
  );
};

export default Home;
