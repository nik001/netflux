import React from 'react';
import './SectionOneSlider.css'
import foto from './foto.png';

const SectionOneSlider = () => {
    return (
        <div className='Main-slider'>
            <div className='Slider-S'>

                <div className='Slider-text'>
                   <h2 className='Slider-text-Title'>НАША НАДЕЖНАЯ КОМАНДА IT-ЭКСПЕРТОВ  
                    </h2> 
                   <div className='Slider-text-op'> 
                    <p>
                    УДОВЛЕТВОРЯЕТ ПОТРЕБНОСТИ ВАШЕЙ ОРГАНИЗАЦИИ
                    </p>
                    <p>
                    РАБОТАЕТ 24/7 – БЕЗ ВЫХОДНЫХ
                    </p>
                    <p>
                    ДЕЙСТВУЕТ В КОРОТКИЕ СРОКИ
                    </p>
                    <p>
                    ИСПОЛЬЗУЕТ ТОЛЬКО ПРОВЕРЕННЫЕ IT-РЕШЕНИЯ

                    </p>


                   </div>

                   <a href="#" class="button24"> Получить консультацию</a>
                   
                </div>
                <div className='Slider-s-images'>
                    <img src={foto} alt='img' />
                </div>

            </div>
        </div>
    );
  }
  
  
  export default SectionOneSlider;
  