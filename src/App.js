import React from 'react';
import './stylesheets/scss/main.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';

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
          </Routes>
          
          
        </main>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
