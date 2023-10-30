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
    // Simule um atraso de 5 segundos para mostrar o GIF de introdução
    setTimeout(() => {
      setShowMainContent(true);
    }, 400);
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
        <img src='/loading.gif' className='introduction'></img>
      )}
    </div>
  );
}
