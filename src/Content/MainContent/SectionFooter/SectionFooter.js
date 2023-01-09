import React from 'react';
import './SectionFooter.css'
import Logo from '../SectionFooter/netflux_logo.png';

const SectionFooter = () => {
    return (
        <div className='footer'>
            <div className='footer-s'>
                    <div> 
                    <ul>
                            <li><a href=''> <img className='foter-logo' src={Logo} /></a></li>
                        </ul>
                       
                    </div>
                    
                    <div>
                        <ul>
                            <li>Мы в соцсетях:</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Ссылки:</li>
                            <li><a href=''>Политика конфединциальности</a></li>
                            <li><a href=''>Обратная связь</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Компания</li>
                            <li><a href=''>Наши работы</a></li>
                            <li><a href=''>База знаний</a></li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li>Контакты:</li>
                            <li><a href=''>Телефон: +7(906)118-05-05</a></li>
                            <li><a href=''>Эл. почта: info@net-flux.ru</a></li>
                            <li><a href=''>Адрес: РФ, Республика Татарстан, г. Набережные Челны, ул. Ш.Усманова, д.122</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
  }
  
  
  export default SectionFooter;
  