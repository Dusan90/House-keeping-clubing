import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Error from './pages/Error'
import SingleClub from './pages/SingleClub';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {DataProvider} from './components/data'


function App() {
  return (
    <>
    <Navbar/>
    <DataProvider>   
    <Switch>
     <Route exact path='/' component={Home} />  
     <Route exact path='/club/:club' component={SingleClub} />
     <Route exact path='/about' component={About} />
     <Route exact path='/contact' component={Contact} />
     <Route exact path='/gallery/:club' component={Gallery} />
     <Route exact component={Error}/>
    </Switch>
     </DataProvider>  
    <Footer/>
    </>
  );
}

export default App;
