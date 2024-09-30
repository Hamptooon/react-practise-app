import React from 'react';
import './stylesheets/scss/main.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <main className="content">
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div>
  );
}

export default App;
