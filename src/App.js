import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import SearchPage from './components/SearchPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Footer from './components/Footer';
function App() {
  const [search, setSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Router>
        <Header setSearch={setSearch} setSearchQuery={setSearchQuery} />

        <Switch>

          <Route path="/" exact>
            {search ? <SearchPage searchQuery={searchQuery}  /> : <Home />}

          </Route>

          {
            search ? (
              
              <SearchPage searchQuery={searchQuery} setSearch={setSearch}/>

            ) : <Route path="/movie/:id"

              render={(props) => <Details {...props} />}
            />
          }




        </Switch>

        <Footer />

      </Router>
    </>
  );
}

export default App;
