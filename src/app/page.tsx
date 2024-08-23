'use client';
import Hero from './_components/hero';
import WhatWeDo from './_components/whatWeDo';
import Section3 from './_components/Section3';
import Section4 from './_components/Section4';
import Section5 from './_components/Section5';
import './styles/main.scss';
import Script from "next/script";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <WhatWeDo />
      <Section3 />
      <Section4 />
      <Section5 />
      <Script type="text/javascript" src="./scripts/scrollDelay.js" />
    </div>
  );
};

export default Home;
