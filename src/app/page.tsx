"use client"

import About from '@/Components/About/About'
import Experience from '@/Components/Experience/Experience'
import Header from '@/Components/Header/Header'
import Navbar from '@/Components/Navbar/Navbar'
import ScrollButton from '@/Components/Scroll_Button/ScrollButton'
import Specialties from '@/Components/Specialties/Specialties'
import ContactMe from '@/Components/contactMe/contactMe'
import Head from 'next/head'
import '@/styles/mixins.scss'
import '@/styles/variables.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const gifImage = new Image();
    gifImage.src = '/loading.gif';

    gifImage.onload = () => {
      setShowMainContent(true);
    };
  }, []);

  return (
    <div>
      {showMainContent ? (
        <div>
          <Header />
          <main>
            <ScrollButton />
            <Specialties />
            <Experience />
          </main>
        </div>
      ) : (
        <img
        src="/loading.gif"
        className="introduction"
        alt="Loading GIF"
      />
      )}
    </div>
  );
}
