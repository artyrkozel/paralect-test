import React from 'react';
import './scss/style.scss'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route } from 'react-router-dom';
import Initial from "./pages/Intial/Initial";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
   <div className="app">
        <Header />
            <Route exact path='/' render={() => <Initial/>}/>
            <Route path='/user/:username/page=:page' render={() => <Main/>}/>
            <Route path='/not-found' render={() => <NotFound/>}/>
   </div>
  );
}

export default App;
