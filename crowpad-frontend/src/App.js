import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/HomePage';
import TokenFactoryPage from './pages/TokenFactoryPage';
import LaunchPadPage from './pages/LaunchPadPage';
import LockerPage from './pages/LockerPage';
import './App.scss';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar isActive={false}></Sidebar>
      <Header></Header>
      <LockerPage />
    </ChakraProvider>
  );
}

export default App;
