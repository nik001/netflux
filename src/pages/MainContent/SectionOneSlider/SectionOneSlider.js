import React from 'react';
import './SectionOneSlider.css'
import Logo from './logoWh.png';
import VectorLeft from './VectorLeft.png';
import VectorRight  from './VectorRight.png';
import VectoEclipsLoad  from './Ellipse-slider.png';

const SectionOneSlider = () => {
    return (
        <div className='Main-slider'>
            <div className='Slider-S'>
             

                <div className='Slider-text'>

                <a href='/'> 
                    <img src={Logo} alt='logo net-flux'  className=' logo_slider'/> 
                  </a>

                   <h2 className='Slider-text-Title'>Наша надежная команда <p> IT-экспертов  </p>
                    </h2> 
                   <div className='Slider-text-op'> 
                        <p>
                       - Осуществляем комплексное обслуживание (компьютеры, серверы, сети, ПО, оргтехника, телефония, видеонаблюдение, 1С, CRM системы)
                        </p>
                        <p>
                       - Работаем 24/7 – без выходных
                        </p>
                        <p>
                       - Выезжаем к вам в день обращения,консультируем удаленно 
                        </p>
                        <p>
                       - Используем только проверенные it-решения

                    </p>


                   </div>

                   <a href="http://net-flux.ru" class=" one1 button24"> Получить консультацию</a>
                   
                </div>
                
                

            </div>

            <div className='slider-shag'>
           
            
            </div>
        </div>
    );
  }
  
  
  export default SectionOneSlider;
  