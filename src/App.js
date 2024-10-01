import React from 'react';
import './stylesheets/scss/main.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <main className="content">
          {/* <Profile /> */}
          <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs' element={<Dialogs/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
          
          
        </main>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
