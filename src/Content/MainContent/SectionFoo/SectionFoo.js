import React from 'react';
import './SectionFoo.css'
import foto from './foto.png';

const SectionFoo = () => {
    return (
        <div className='Main-team'>
            <div className='section-team-m'>

                <h2>КОМАНДА IT-ЭКСПЕРТОВ</h2>
                <div>
                Компания netflux – это команда профессионалов, осуществляющая IT-аутсорсинг: от сервера до оргтехники. 
С 2018 года мы решаем задачи бизнеса, на совесть делаем свою работу, опираясь на основные запросы клиента.
Около 90% наших клиентов обращаются к нам по рекомендации – это и есть показатель качества наших стараний

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
  