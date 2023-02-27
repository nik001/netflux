import React from 'react';

import Header from '../../layout/Header/Header';
import SysAdmSlider from './SysAdmSlider/SysAdmSlider';
import AytsorsSysAdm from './AytsorsSysAdm/AytsorsSysAdm';
import ProSysAdm from './ProSysAdm/ProSysAdm';

import PrihSysadm from './PrihSysadm/PrihSysadm';
import FeaturesSystemAdministrationServices from './FeaturesSystemAdministrationServices/FeaturesSystemAdministrationServices';
import ServiesSysAdmNetFLux from './ServiesSysAdmNetFLux/ServiesSysAdmNetFLux';
import TarifSysAdm from './TarifSysAdm/TarifSysAdm';


import SectionFooter from '../../layout/SectionFooter/SectionFooter';

const SystemAdministration = () => {
    return (
        <div>
            <Header />
            <SysAdmSlider />
            <AytsorsSysAdm/>
            <ProSysAdm/>

            <PrihSysadm/>
            <FeaturesSystemAdministrationServices/>
            <ServiesSysAdmNetFLux/>
            <TarifSysAdm/>
          

            <SectionFooter />
        </div>
    );
  }
  
  
  export default SystemAdministration;
  