'use client';
import Hero from './_components/hero';
import WhatWeDo from './_components/whatWeDo';
import Goal from './_components/goal';
import Contact from './_components/contactUs';
import './styles/main.scss';

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <WhatWeDo />
      <Goal />
      <Contact />
    </div>
  );
};

export default Home;
