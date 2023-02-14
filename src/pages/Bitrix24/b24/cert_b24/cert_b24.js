import React from 'react';
import './cert_b24.css'
import Cert from './cert.png';

const cert_b24 = () => {
    return (
        <div className='cert_b24'>
            <div className='certificat'>
               
                    <img src={Cert} />
                
            </div>
            <div className='cert_descr'>
                <p>
                Net-flux - официальный бизнес партнер компании 1С-Битрикс 
                и специализируеться на консалтинге, внедрении CRM и автоматизации 
                бизнес-процессов для малого и среднего бизнеса
                </p>
               
            </div>         
        </div>
        
    );
  }
  
  
  export default cert_b24;
  