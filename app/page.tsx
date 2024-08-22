'use client';

import Hero from "./_components/hero";
import WhatWeDo from "./_components/whatWeDo";
import Goal from "./_components/goal";
import Contact from "./_components/contactUs";
import './styles/main.scss';
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="snap-start">
        <Hero handleScroll={handleScrollToContact} />
      </section>
       <section className="snap-start">
        <WhatWeDo />
      </section>
      {/*<section className="snap-start">
        <Goal />
      </section> */}
      
      {/* Excluding Contact section from snapping */}
      {/* <section className="snap-start">
        <Contact />
      </section> */}
    </main>
  );
}
