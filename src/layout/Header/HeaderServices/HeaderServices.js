import React from 'react';
import './HeaderServices.css'

const HeaderServices = () => {
    return (
    <div className='He-services'>
        <ul className='he-S'>
                <li>
                    <a href='/' className='main-service'   >IT-обслуживание</a>
			            <ul className='hov_a'>
			                <li><a href='/itService'>Абонентское обслуживание компьютеров</a></li>
			                <li><a href='/'>Удаленный администратор</a></li>
			                <li><a href='/'>Системное администрирование</a></li>
			            </ul>
                </li>
                <li>
                    <a href='/development'   className='main-service' >Разработка</a>   
                    <ul className='hov_a'>
			                <li><a href='/'>Сайты и web-сервисы</a></li>
			                <li><a href='/'>Мобильные приложения</a></li>
			                <li><a href='/'>Дополнительные услуги</a></li>
			        </ul>
                </li>
                <li>
                    <a href='/promotion'    className='main-service'  >Продвижение</a>
                    <ul className='hov_a'>
			                <li><a href='/'>SEO</a></li>
			                <li><a href='/'>Аналитика</a></li>
			                <li><a href='/'>Маркетинге</a></li>
			        </ul>
                </li>
                <li>
                    <a href='/bitrix24'    className='main-service'   >Битрикс24</a>  
                </li>
        </ul>  
    </div>
    );
  }
  
  
  export default HeaderServices;
  