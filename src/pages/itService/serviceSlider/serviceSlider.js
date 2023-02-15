import React from 'react';
import './serviceSlider.css'

const serviceSlider = () => {
    return (
        <div className='serviceSlider '>
            <div className='serviceSlider_h2'>
                <h2>IT-обслуживание организаций</h2> 
            </div>
                <div className='serviceSlider_descr'>

             


                    <ul>
                        <li>Быстрая и надежная работа компьютерной техники по выгодной цене</li>
                        <li>Обеспечим стабильную работу компьютеров в офисе</li>
                        <li>Оптимизируем работу компьютеров с приростом до 30% производительности</li>
                        <li>Минимальное время реагирования на заявки пользователей</li>
                        <li>Мониторинг 24/7 и плановое резервное копирование</li>
                        <li>Обслуживание компьютеров в рамках IT-аутсорсинга - это экономно!</li>
                    </ul>
          
              
                </div>
                <div className='buttom'>
                    <a href="http://net-flux.ru" class="oneit b24">
                    Получить консультацию / предложение
                    </a> 
                </div>
        </div>
    );
  }
  
  
  export default serviceSlider;
  