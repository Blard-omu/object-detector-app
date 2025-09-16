"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import ContactUs from "@/components/sections/contact";
import { useEffect } from "react";
import Gallery from "@/components/sections/gallery";


export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <section id="home">
      <main className="min-h-screen flex flex-col">
        <Hero />
        <About />
        {/* <OurCourses/> */}
        <Gallery/>
        <ContactUs/>
        <Footer />
      </main>
    </section>
  );
}
