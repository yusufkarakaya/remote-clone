import React from 'react';
import Banner from '../components/banner/Announcement';
import Nav from '../components/Nav';
import Header from '../components/Header';
import ContainerBanner from '../components/ContainerBanner';
import Container from '../components/Container';
import HRManagement from '../components/HRManagement';
import Media from '../components/Media';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Banner />
      <Nav />
      <Header />
      <ContainerBanner />
      <Container />
      <HRManagement />
      <Media />
      <Footer />
    </div>
  );
}

export default Home;
