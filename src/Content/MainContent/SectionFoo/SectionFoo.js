import React from 'react';
import './SectionFoo.css'
import foto from './foto.png';

const SectionFoo = () => {
    return (
        <div className='Main-team'>
            <div className='section-team-m'>

                <h2>Команда профессионалов</h2>
                <div>
                Компания netflux: ит аутсорсинг от абонентского обслуживания компьютеров 
                до сервиса оргтехники. Мы небольшая компания хороших специалистов и не самых
                плохих людей, успешно работаем и решаем задачи бизнеса, разных сфер 
                деятельности начиная с 2015 года. Делаем свою работу на совесть и с 
                пониманием относимся к задачам клиента. Лучший показатель качества нашей 
                работы — повторное обращение, рекомендация друзьям и коллегам, почти 90% 
                новых клиентов приходят к нам по рекомендации

                </div>

                <div className='team-cart'>
                    <div>
                        <img  src={foto} alt='photo'  />
                        <p>ФИО</p>
                        <p>Должность</p>
                        <p>Контакты</p>
                    </div>
                    <div>
                        <img  src={foto} alt='photo'  />
                        <p>ФИО</p>
                        <p>Должность</p>
                        <p>Контакты</p>
                    </div>
                    <div>
                        <img  src={foto} alt='photo'  />
                        <p>ФИО</p>
                        <p>Должность</p>
                        <p>Контакты</p>
                    </div>
                    <div> 
                        <img  src={foto} alt='photo'  />
                        <p>ФИО</p>
                        <p>Должность</p>
                        <p>Контакты</p></div>
                </div>

            </div>
        </div>
    );
  }
  
  
  export default SectionFoo;
  