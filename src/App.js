import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import NotFound from './components/NotFound';
import productApi from 'api/productApi';
import RegisterFeature from 'features/Register';
function App() {

  return <div className="app">
    Header
    <Link to="/todos">Todo</Link>
    <Link to="/albums">Albums</Link>

    <Switch>
      <Route path="/" component={TodoFeature} exact />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <Route path="/register" component={RegisterFeature} />

      <Route component={NotFound} />
    </Switch>


    Footer
  </div>;
}

export default App;
