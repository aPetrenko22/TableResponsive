import React from 'react';
import Header from '../../components/Header';
import './style.scss';
import HomePageMain from './Components/HomePage';

const Index = () => (
  <>
    <Header />
    <HomePageMain />
  </>
);

export default React.memo(Index);
