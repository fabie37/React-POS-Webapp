import React from 'react';
import './App.css';
import Sidebar from './components/sidenav/Sidebar';
import GoogleMaps from './components/main-view/GoogleMaps';
import { OrderView } from './components/main-view/OrderView';
import { GlobalProvider } from './context/GlobalState';

const navItems = [
  { name: "home", class: "fa-home", active: true },
  { name: "pos", class: "fa-pencil-alt", active: false },
  { name: "phone", class: "fa-phone", active: false },
  { name: "printer", class: "fa-print", active: false },
  { name: "inventory", class: "fa-box", active: false },
  { name: "coupon", class: "fa-ticket-alt", active: false },
  { name: "settings", class: "fa-cog", active: false },
]

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Sidebar navItems={navItems} />
        <GoogleMaps />
        <OrderView/>
      </div>
    </GlobalProvider>
  );
}

export default App;
