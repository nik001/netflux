import React from 'react';

import Header from '../../layout/Header/Header';
import ServiceSliderR from './serviceSliderR/serviceSliderR';
import SubcriptionService from './SubcriptionService/SubcriptionService';
import RemoteMaintenance from './RemoteMaintenance/RemoteMaintenance';

import SectionFooter from '../../layout/SectionFooter/SectionFooter';

const RemoteAdministration = () => {
    return (
        <div>
            <Header />
            <ServiceSliderR />
            <SubcriptionService/>
            <RemoteMaintenance/>
            <SectionFooter />
        </div>
    );
  }
  
  
  export default RemoteAdministration;
  