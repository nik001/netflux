import React from 'react';
import SectionFoo from './SectionFoo/SectionFoo';
import SectionForm from './SectionForm/SectionForm';
import SectionFree from './SectionFree/SectionFree';
import SectionOneSlider from './SectionOneSlider/SectionOneSlider';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionAdM from './sectionAdM/sectionAdM';
import SectionFooter from './SectionFooter/SectionFooter';


const MainContent = () => {
    return (
        <div>
            <SectionOneSlider />
            <SectionTwo />
            <SectionFree />
            <SectionFoo />
            <SectionForm />
            <SectionAdM />
            <SectionFooter />
        </div>
    );
  }
  
  
  export default MainContent;
  