import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundOverlay from './components/BackgroundOverlay'

function App() {
  return (
    <>
    <BackgroundOverlay />
    <CharacterEditor />
    <Footer />
    </>
  );
}

export default App;
