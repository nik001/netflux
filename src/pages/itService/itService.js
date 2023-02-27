import React from 'react';

import Header from '../../layout/Header/Header';
import ServiceSlider from './serviceSlider/serviceSlider';
import SubcriptionService from './SubcriptionService/SubcriptionService';
import SchemeOfWork from './SchemeOfWork/SchemeOfWork';
import CalculatorComputerServices from './CalculatorComputerServices/CalculatorComputerServices';
import AdvantagesOfSubscriptionService from './AdvantagesOfSubscriptionService/AdvantagesOfSubscriptionService';
import FinanseBenefits from './FinanseBenefits/FinanseBenefits';
import PriseListServicePC from './PriseListServicePC/PriseListServicePC';
import SectionFooter from '../../layout/SectionFooter/SectionFooter';

const itService = () => {
    return (
        <div>
            <Header />
            <ServiceSlider />
            <SubcriptionService />
            <SchemeOfWork />
            <CalculatorComputerServices />
            <AdvantagesOfSubscriptionService />
            <FinanseBenefits />
            <CalculatorComputerServices />
           <PriseListServicePC/>
            <SectionFooter />
        </div>
    );
  }
  
  
  export default itService;
  