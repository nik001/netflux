import React from 'react';

import SectionForm from './SectionForm/SectionForm';
import SectionFree from './SectionFree/SectionFree';
import SectionOneSlider from './SectionOneSlider/SectionOneSlider';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionAdM from './sectionAdM/sectionAdM';
import SectionFooter from '../../layout/SectionFooter/SectionFooter';
import Header from '../../layout/Header/Header';

const MainContent = () => {
    return (
        <div>
            <Header />
            <SectionOneSlider />
            <SectionTwo />
            <SectionFree />
          
            <SectionForm />
            <SectionAdM />
            <SectionFooter />
        </div>
    );
  }
  
  
  export default MainContent;
  