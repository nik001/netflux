import React from 'react';
import './HeaderContacts.css'
import Logo from './netflux_logo.png';
import lk from './img/free-icon-linux-penguin-sketched-logo-outline-37129.png';


import Telegram from './img/free-icon-telegram-739260.png';
import WhatsApp from './img/free-icon-whatsapp-1384023.png';
import Telephon from './img/icons8-phone-32.png';


const HeaderContacts = () => {
    return (
        <div className='He-Contacts'>
                <div className='He-logo'>
               <img src={Logo} />
                </div> 
             
                <div className='He-contact'>

                    <div className='He-contact-W'>
                        <div className='He-con-whatsapp' >
                           
                        </div>
                       
                    </div>          
                     <div className='He-contact-W'>
                        <div className='He-con-whatsapp' >
                          <a href=''> 
                             <img className='He-con-icon' src={WhatsApp} />
                          </a>   
                        </div>
                       
                    </div>

                    <div className='He-contact-tg'>
                        <div className='He-con-telegramm' >
                            <a href=''> 
                                <img className='He-con-icon' src={Telegram} />
                            </a>
                        </div>
                      
                    </div>
                  
                  
                  
                   <div className='He-contact-T'>
                        <div className='He-con-telephon' >
                             <img className='He-con-icon' src={Telephon} />
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
                      <div> <img  className='He-con-icon  re' src={lk}/> </div>
                    </div>
                  </a>
                </div> 
        </div>
    );
  }
  
  
  export default HeaderContacts;
  