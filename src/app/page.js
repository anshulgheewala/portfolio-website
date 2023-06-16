import Image from 'next/image'
import React from 'react'
import Navbar from './components/nav'
import Imageblock from './components/imageblock'
import Skills from './components/skills'
import About from './components/about'
import Skills2 from './components/skils2'
import Projects from './components/proj'
import Experience from './components/experience'
import Contact from './components/contact'
import Link from 'next/link';

import Head from 'next/head'
 



export default function Home() {
  return (

    
   <form>

    <div>
    <Head>
     
      <meta name='description' content='Anshul Gheewala portfolio'></meta>
      <meta name='keyword' content='Portfolio website Anshul portfolio website'></meta>
      <meta name='author' content='Anshul Gheewala'></meta>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
    </Head>
    </div>

   
   
   

    

    <Navbar></Navbar>
    <Imageblock></Imageblock>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
    

    

   </form>
  )
}
