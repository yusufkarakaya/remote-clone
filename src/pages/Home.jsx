import React from 'react';
import Banner from '../components/banner/Announcement';
import Nav from '../components/Nav';
import Header from '../components/Header';
import ContainerBanner from '../components/ContainerBanner';

function Home() {
  return (
    <div>
      <Banner />
      <Nav />
      <Header />
      <ContainerBanner />
    </div>
  );
}

export default Home;
