import React from 'react';
import './stylesheets/scss/main.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path='/profile' element={<Profile postsData = {props.appState.profilePage.postsData} addPost = {props.addPost}/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/dialogs' element={<Dialogs dialogsData = {props.appState.dialogsPage.dialogsData} messagesData = {props.appState.dialogsPage.messagesData} addMessage = {props.addMessage}/>} />
            <Route path='/friends' element={<Friends/>} />
         
            <Route path='/settings' element={<Settings/>} />
            
          </Routes>
          
          
        </main>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
