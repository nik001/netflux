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
			                <li><a href='/remote'>Удаленный администратор</a></li>
			                <li><a href='/systemAdministration'>Системное администрирование</a></li>
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
                    <a href='https://net-flux-b24.bitrix24.site/preview/2d2d4a7a7f2f171509282870f864eacc/?ts=1677523091'    className='main-service'   >Битрикс24</a> 
                
                </li>
                {/*<li>
                    <a href='/promotion'    className='main-service'  >Обслуживание 1С</a>
                    <ul className='hov_a'>
			                 <li><a href='/'>Обслуживание 1С</a></li>
			                <li><a href='/'>Доработка конфигураций 1С</a></li>
			                <li><a href='/'>Печатные формы, отчеты и обработки</a></li>
                            <li><a href='/'>Расширение конфигурации 1С</a></li>
                            
			        </ul>
                </li>
                <li>
                    <a href='/promotion'    className='main-service'  >Обслуживание Видеонаблюдения,СКС</a>
                    <ul className='hov_a'>
			                <li><a href='/'>Монтаж систем видеонаблюдения</a></li>
			                <li><a href='/'>Обслуживание видеонаблюдения</a></li>
			                <li><a href='/'>Прокладка локальной сети, стоимость</a></li>
                            <li><a href='/'>Построение wifi сетей</a></li>
                          
			        </ul>
                </li>*/}
        </ul>  
    </div>
    );
  }
  
  
  export default HeaderServices;
  