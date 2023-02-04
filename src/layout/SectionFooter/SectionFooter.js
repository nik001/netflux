import React from 'react';
import './SectionFooter.css'
import Logo from '../SectionFooter/netflux_logo.png';

const SectionFooter = () => {
    return (
        <div className='footer'>
            <div className='footer-s'>
                    <div> 
                    <ul>
                            <li><a href="http://net-flux.ru"> <img className='foter-logo' alt='logo-footer' src={Logo} /></a></li>
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
                            <li><a href="http://net-flux.ru">Политика конфединциальности</a></li>
                            <li><a href="http://net-flux.ru">Обратная связь</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Компания</li>
                            <li><a href="http://net-flux.ru">Наши работы</a></li>
                            <li><a href="http://net-flux.ru">База знаний</a></li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li>Контакты:</li>
                            <li><a href="http://net-flux.ru">Телефон: +7(906)118-05-05</a></li>
                            <li><a href="http://net-flux.ru">Эл. почта: info@net-flux.ru</a></li>
                            <li><a href="http://net-flux.ru">Адрес: РФ, Республика Татарстан, г. Набережные Челны, ул. Ш.Усманова, д.122</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
  }
  
  
  export default SectionFooter;
  