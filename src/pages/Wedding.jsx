import React from 'react';
import Nav from '../components/wedding/Nav';
import Hero from '../components/wedding/Hero';
import Countdown from '../components/wedding/Countdown';
import Story from '../components/wedding/Story';
import Details from '../components/wedding/Details';
import DressCode from '../components/wedding/DressCode';
import Travel from '../components/wedding/Travel';
import Gallery from '../components/wedding/Gallery';
import Gifts from '../components/wedding/Gifts';
import SocialMedia from '../components/wedding/SocialMedia';
import RSVPForm from '../components/wedding/RSVPForm';
import ContactFAQ from '../components/wedding/ContactFAQ';
import Footer from '../components/wedding/Footer';
import MusicPlayer from '../components/wedding/MusicPlayer';

export default function Wedding() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <Hero />
      <Countdown />
      <section id="story"><Story /></section>
      <section id="details"><Details /></section>
      <DressCode />
      <section id="travel"><Travel /></section>
      <Gallery />
      <Gifts />
      <SocialMedia />
      <section id="rsvp"><RSVPForm /></section>
      <ContactFAQ />
      <Footer />
      <MusicPlayer />
    </div>
  );
}