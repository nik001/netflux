import React from 'react';
import './price_b24.css'
import foto from './foto.png';

const price_b24 = () => {
    return (
        <div className='price_b24'>
            <h2>Стоимость внедрения Битрикс24</h2>
           <div className='price_24'>
                    <div>
                            <h3> <p>Пакет</p> «Старт» </h3>

                            <img  src={foto} alt='1'  />

                            20 000р.
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Стандарт» </h3> 
                            <img  src={foto} alt='1'  />
                            40 000р.
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Бизнес» </h3>
                            <img  src={foto} alt='1'  />
                            60 000р.
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Индивидуальный» </h3>
                            <img  src={foto} alt='1'  />
                            Индивидуально
                           
                    </div>
            </div>
            
        </div>
        
    );
  }
  
  
  export default price_b24;
  