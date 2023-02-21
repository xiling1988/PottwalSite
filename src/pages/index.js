import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Tiers from '../components/Tiers'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Tiers />
      <Testimonials /> 
      <Contact />
      <Footer />
    </>
  )
}
