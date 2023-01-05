import React from 'react';
import './SectionFree.css'
import foto from './foto.png';

const SectionFree = () => {
    return (
        <div className='Main-m-free'>
            <div className='section-m-free'>

                <div>
                    <h2>Результат, который вы получите заключив договор с нами</h2>
                    <div>
                        <p>
                        ПК, серверы, локальная сеть, программное обеспечение и оргтехника в вашей организации, работают быстро и без сбоев
                        </p>
                        <p>
                        Риски взломов, потери ключевых данных сведены к минимуму 
                        </p>
                        <p>
                       Сотрудникам оказана оперативная техническая и консультативная IT-поддержка 
                       </p>
                        <p>
                       Возможные проблемы предупреждаются заранее. Онлайн мониторинг IT-систем
                       </p>
                        <p>
                       Ведется непрерывная работа по автоматизации и улучшению IT-процесов
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
  