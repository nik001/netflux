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

                      
                         <h3 className='price_'> 9 000р.</h3>   
                                <div className='price_buttom'>
                                        <a href="http://net-flux.ru" class="price_button">
                                        Получить консультацию
                                        </a> 
                                </div>
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Стандарт» </h3> 
                            <img  src={foto} alt='1'  />
                            <h3 className='price_'> 19 000р.</h3>   
                                <div className='price_buttom'>
                                        <a href="http://net-flux.ru" class="price_button">
                                        Получить консультацию
                                        </a> 
                                </div>
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Бизнес» </h3>
                            <img  src={foto} alt='1'  />
                            <h3 className='price_'> 59 000р.</h3>   
                                <div className='price_buttom'>
                                        <a href="http://net-flux.ru" class="price_button">
                                        Получить консультацию
                                        </a> 
                                </div>
                    </div>
                    <div>
                            <h3><p>Пакет</p> «Индивидуальный» </h3>
                            <img  src={foto} alt='1'  />
                            <h3 className='price_'> По согласованию с заказчиком</h3>   
                                <div className='price_buttom'>
                                        <a href="http://net-flux.ru" class="price_button">
                                        Получить консультацию
                                        </a> 
                                </div>
                           
                    </div>
            </div>
            
        </div>
        
    );
  }
  
  
  export default price_b24;
  