import React from "react";

import './styles.css'

import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

export const MainPage = () => {
  return (<div className='whole-page'>
          <div className='wrapper'>
            <HeaderComponent />
              <div className='big-part'>
                  <div className="main-bckg-img"></div>
                  <div className='summary'>
                      <h1 className='heading-head'>Есть задачи для нас?</h1>
                      <p>Заполните форму и мы с вами свяжемся</p>
                      <div className='summaryInputs'>
                          <input type='text' placeholder='Номер телефона' className='phone-input' />
                          <input type='text' placeholder='Почта' className='phone-input' />
                          <input type='submit' value='Заказать расчёт цены' className='submit' />
                      </div>
                  </div>
              </div>
              <FooterComponent />
          </div>
      </div>);
};
