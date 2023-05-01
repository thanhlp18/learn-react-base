import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter'
import NotFound from './components/NotFound';
import productApi from 'api/productApi';
import Header from 'components/Header';
function App() {

  return <div className="app">
    <Header />


    <Switch>
      <Route path="/" component={CounterFeature} exact />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />

      {/* <Route component={NotFound} /> */}
    </Switch>


  </div>;
}

export default App;
