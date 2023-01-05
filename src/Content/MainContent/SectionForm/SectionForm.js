import React from 'react';
import './SectionForm.css'
import foto from './foto.png';

const SectionForm = () => {
    return (
        <div className='main-sectionForm'>
            <div className='section-form'>

                <div>
                        <h2>Команда NetFlux проанализирует вашу задачу и поможет вам в её решении</h2>

                        <a href="#" class="button-m-form"> Запросить консультацию</a>
                   
                </div>
                <div className='form-img'>
                    <img src={foto} />
                </div>

            </div>
        </div>
    );
  }
  
  
  export default SectionForm;
  