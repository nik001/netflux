import React from 'react';
import './SectionFree.css'
import foto from './foto.png';

const SectionFree = () => {
    return (
        <div className='Main-m-free'>
            <div className='section-m-free'>

                <div>
                    <h2>РАБОТАЯ С НАШИМИ IT-ЭКСПЕРТАМИ, ВЫ ПОЛУЧАЕТЕ:</h2>
                    <div>
                        <p>
                        Бесперебойную и быструю работу оргтехники, компьютеров, сервера 24/7 
                        </p>
                        <p>
                        Минимум риска взлома и потери данных
                        </p>
                        <p>
                        Оперативную консультативную IT-поддержку для каждого сотрудника 
                       </p>
                        <p>
                        Онлайн-мониторинг IT-систем, предупреждение проблем
                       </p>
                   
                    </div>
                    <a href="#" class="button-m-free"> Получить индивидуальный расчёт</a>
                   
                   
                </div>
                <div className='section-m-free-img'>
                    <img src={foto}  alt="text"/>
                </div>

            </div>
        </div>
    );
  }
  
  
  export default SectionFree;
  