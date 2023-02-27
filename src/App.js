import { Routes ,Route , Link } from 'react-router-dom';
import React from 'react';

import './App.css';
import  MainPage        from './pages/MainContent/MainContent';
import  Bitrix24        from './pages/Bitrix24/Bitrix24';
import  Development     from './pages/Development/Development';
import  ItService       from './pages/itService/itService';
import  RemoteAdministration       from './pages/RemoteAdministration/RemoteAdministration';
import  SystemAdministration       from './pages/SystemAdministration/SystemAdministration';
import  Promotion       from './pages/Promotion/Promotion';



function App() {
  return (
        <Routes>
          <Route path="/"             element={<MainPage    />} />
          <Route path="/bitrix24"     element={<Bitrix24    />} />
          <Route path="/development"  element={<Development />} />
          <Route path="/itService"    element={<ItService   />} />
          <Route path="/remote"       element={<RemoteAdministration   />} />
          <Route path="/systemAdministration"    element={<SystemAdministration   />} />
          <Route path="/promotion"    element={<Promotion   />} />
          
        </Routes>
  );
}


export default App;