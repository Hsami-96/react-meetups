import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';


function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupsPage />} />

        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
