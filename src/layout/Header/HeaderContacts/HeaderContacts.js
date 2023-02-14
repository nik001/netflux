import React from 'react';
import './HeaderContacts.css'
import Logo from './logoWh.png';
import lk from './img/iconuser.png';


import Telegram from './img/free-icon-telegram-739260.png';
import WhatsApp from './img/free-icon-whatsapp-1384023.png';
import Telephon from './img/icons8-phone-32.png';


const HeaderContacts = () => {
    return (
        <div className='He-Contacts'>
                <div className='He-logo'>
                  <a href='/'> 
                    <img src={Logo} alt='logo net-flux'  className='re1'/> 
                  </a>
              
                </div> 
             
                <div className='He-contact'>

                    <div className='He-contact-W'>
                        <div className='He-con-whatsapp re' >
                           
                        </div>
                       
                    </div>          
                     <div className='He-contact-W'>
                        <div className='He-con-whatsapp' >
                          <a href=''> 
                             <img className='He-con-icon re' src={WhatsApp} />
                          </a>   
                        </div>
                       
                    </div>

                    <div className='He-contact-tg'>
                        <div className='He-con-telegramm' >
                            <a href=''> 
                                <img className='He-con-icon re' src={Telegram} />
                            </a>
                        </div>
                      
                    </div>
                  
                  
                  
                   <div className='He-contact-T'>
                        <div className='He-con-telephon' >
                             <img className='He-con-icon re' src={Telephon} />
                        </div>
                        <div> 
                             +7 (906) 118 05 05
                        </div>
                    </div>

                



                 
               
                </div> 


                <div class="He-menu">
                    <div><a href=''>Компания</a></div>
                    <div><a href=''>Наши работы</a></div>
                    <div><a href=''>База знаний</a></div>
                </div> 

                <div className='He-lk'> 
                  <a href='' >
                    <div className='lk'>
                      <div>Войти</div>
                      <div> <img  alt='text' className='He-con-icon  re' src={lk}/> </div>
                    </div>
                  </a>
                </div> 
        </div>
    );
  }
  
  
  export default HeaderContacts;
  