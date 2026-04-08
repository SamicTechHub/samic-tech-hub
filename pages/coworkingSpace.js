import Head from 'next/head';
import HeaderF from '../components/HeaderF';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WhatWeDo from '../components/WhatWeDo';
import OurSpaces from '../components/OurSpaces';
import Patronage from '../components/Patronage';
import Connect from '../components/Connect';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samic Tech Hub – Tech Skills Training, Co-Working Space, Software Studio in Ibadan, Moniya </title>
        <meta name="description" content="Samic Tech Hub offers tech skills training, web development programs in Ibadan, Moniya. A modern co-working space for freelancers, startups, remote workers, learners in Ibadan, Moniya. Our services also include software product studio where you can bring your business ideas to reality in Ibadan, Moniya." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeaderF />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhatWeDo />
        <OurSpaces />
        <Patronage />
        {/* <PricingSection /> */}
        <Connect />
        <Footer />
      </main>
    </>
  );
}