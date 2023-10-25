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

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Rodrigo DEV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>

      {/* <Navbar /> */}
      <Header />
      <main>
        <ScrollButton />
        <Specialties />
        <Experience />
      </main>
      {/* <ContactMe /> */}
    </>
  )
}
