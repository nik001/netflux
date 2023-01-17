import React from 'react';
import './sectionAdM.css'
import foto from './foto.png';

const sectionAdM = () => {
    return (
        <div className=''>
            <div className='addition-material-S'>
            
               <div className='text-addition'>
               Команда netflux берет на себя обеспечение бесперебойной работы офиса, в то время, пока сам заказчик 
сосредоточен на своей основной деятельности. Удаленное системное администрирование возьмем на себя МЫ. 
За нами – IT-обслуживание Вашей компании, за Вами – УСПЕХ и ПРИБЫЛЬ.


               </div>

               <div className='addition-material'>
                    <div>
                        <img src={foto} alt='text' />
                        <p>Каталог услуг</p>
                    </div>
                    <div>
                        <img src={foto} alt='text' />
                        <p>Презентационная страница </p>
                    </div>
                    <div>
                        <img src={foto}  alt='text'/>
                        <p>Часто задаваемые вопросы IT-аутсорсинга</p>
                    </div>
               </div>

            </div>
        </div>
    );
  }
  
  
  export default sectionAdM;
  