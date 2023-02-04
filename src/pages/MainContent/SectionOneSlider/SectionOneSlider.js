import React from 'react';
import './SectionOneSlider.css'
import foto from './foto.png';
import VectorLeft from './VectorLeft.png';
import VectorRight  from './VectorRight.png';
import VectoEclipsLoad  from './Ellipse-slider.png';

const SectionOneSlider = () => {
    return (
        <div className='Main-slider'>
            <div className='Slider-S'>
                <div className='vec-left'> 
                    <img className='vec-img' src={VectorLeft} alt='img' />
                </div>

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

                   <a href="http://net-flux.ru" class="button24"> Получить консультацию</a>
                   
                </div>
                <div className='Slider-s-images'>
                    <img clas src={foto} alt='img' />
                </div>
                <div className='vec-right'> 
                    <img className='vec-img' src={VectorRight} alt='img' />
                </div>

            </div>

            <div className='slider-shag'>
                <div className='shag-center'>
                    <img className='vec-img-load' src={VectoEclipsLoad} alt='img' />
                    <img className='vec-img-load' src={VectoEclipsLoad} alt='img' />
                    <img className='vec-img-load' src={VectoEclipsLoad} alt='img' />
                    <img className='vec-img-load' src={VectoEclipsLoad} alt='img' />
                </div>
            
            </div>
        </div>
    );
  }
  
  
  export default SectionOneSlider;
  