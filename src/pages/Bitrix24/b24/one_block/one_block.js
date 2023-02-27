import React from 'react';
import './one_block.css'

const one_block = () => {
    return (
        <div className='one_block '>
             <div className='one_block_h2'>
               <h2>Битрикс24 помогает бизнесу работать</h2> 
            </div>
             <div className='One_block_descr'>
                <h5>
                    Помогаем держать под контролем заявки, продажи, 
                   взаимодействие с клиентами.
                   </h5>
                <p className='b24bonus'>
                  С 1 по 28 февраля действуют согревающие скидки!
                </p>
                <p>         
                  Оставьте заявку, получите расчет проекта
               и консультацию по маркетингу в подарок!
             </p>
             </div>
        

             <div className='buttom'>
                 <a href="http://net-flux.ru" class="one b24">
                 Получить консультацию
                 </a> 
             </div>
        </div>
        
    );
  }
  
  
  export default one_block;
  