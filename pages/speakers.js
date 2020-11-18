import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';
import React from 'react';
import SpeakerContext from '../src/components/Speakers/SpeakerContext';
import Layout from '../src/components/Layout/Layout';

const Page = () => {
  return (
    <div>
      <Layout>
        <Speakers bgColor="bg-gray-500" />
      </Layout>
    </div>
  );
};

export default Page;
