'use client';
import { useRef } from 'react';
import Hero from './_components/hero';
import WhatWeDo from './_components/whatWeDo';
import Goal from './_components/goal';
import Contact from './_components/contactUs';
import MailchimpForm from './_components/mailchipform';
import './styles/main.scss';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="container">
      <MailchimpForm />
      <Hero contactRef={contactRef} />
      <WhatWeDo />
      <Goal />
      <Contact ref={contactRef} />
      <ToastContainer />
    </div>
  );
};

export default Home;
