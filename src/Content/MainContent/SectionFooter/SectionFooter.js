import React from 'react';
import './SectionFooter.css'
import Logo from '../SectionFooter/netflux_logo.png';

const SectionFooter = () => {
    return (
        <div className='footer'>
            <div className='footer-s'>
                    <div> <img className='foter-logo' src={Logo} /></div>
                    <div>мы в соцсетях:</div>
                    <div>
                        <ul>
                            <li>Ссылки:</li>
                            <li>Политика конфединциальности</li>
                            <li>Обратная связь</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Компания</li>
                            <li>Наши работы</li>
                            <li>База знаний</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li>Контакты</li>
                            <li>+7(906)118-05-05</li>
                            <li>Почта</li>
                            <li>Адрес</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
  }
  
  
  export default SectionFooter;
  