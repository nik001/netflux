import React from 'react';
import './SectionOneSlider.css'
import foto from './foto.png';

const SectionOneSlider = () => {
    return (
        <div className='Main-slider'>
            <div className='Slider-S'>

                <div className='Slider-text'>
                   <h2 className='Slider-text-Title'>Команда IT-экспертов для поддержки 
                        и развития вашей организации  
                    </h2> 
                   <div className='Slider-text-op'> 
                    <p>
                    Выясним, что вам нужно и важно! Закроем потребности на 100%
                    </p>
                    <p>
                    365 дней в году - профессионально, оперативно, без отпусков и больничных 
                    </p>
                    Оправдываем ожидания. Делаем, что обещали и делаем это с первого раза!

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
  