import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter'
import NotFound from './components/NotFound';
import productApi from 'api/productApi';
import RegisterFeature from 'features/Register';
function App() {

  return <div className="app">
    <Link to="/todos"><p>Todo</p></Link>
    <Link to="/albums"><p>Albums</p></Link>

    <Switch>
      <Route path="/" component={CounterFeature} exact />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <Route path="/register" component={RegisterFeature} />

      {/* <Route component={NotFound} /> */}
    </Switch>


  </div>;
}

export default App;
