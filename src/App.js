import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import DashboardLayout from './components/DashboardLayout'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <h1>Hello bitches!</h1>
      <DashboardLayout />
    </div>
  );
}

export default App;
