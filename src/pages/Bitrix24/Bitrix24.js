import React from 'react';


import SectionFooter from '../../layout/SectionFooter/SectionFooter';
import  Menu_b24       from './b24/menu_b24/menu_b24';
import  One_block       from './b24/one_block/one_block';
import  Two_block       from './b24/two_block/two_block';
import  Cert_b24       from './b24/cert_b24/cert_b24';
import  Free_b24       from './b24/free_block/free_block';
import  Price_b24       from './b24/price_b24/price_b24';
import Header from '../../layout/Header/Header';

const Bitrix24 = () => {
    return (
        <div>
            <Header />
            <Menu_b24 />
            <One_block />
            <Two_block />
            <Free_b24 />
            <Price_b24 />
            <Cert_b24/>
         
            <SectionFooter />
        </div>
    );
  }
  
  
  export default Bitrix24;
  