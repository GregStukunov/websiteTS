import React from "react";
import './styles.css'
import {HeaderComponent} from "../../components/header/header.component";

export const MainPage = () => {
  return (
    <>
      <div className='whole-page'>
          <div className='wrapper'>
            <HeaderComponent />
              <div className='big-part'>
                  <div className='summary'>
                      <h1 className='heading-head'>Подберём вам лучший инвестиционный кейс<br/>за 1 час</h1>
                      <p>Наши специалисты составят план инвестиций и проконсультируют вас по любым вопросам.
                          Просто оставьте заявку и в ближайшее время с вами свяжется наш оператор.</p>
                      <div className='summaryInputs'>
                          <input type='text' placeholder='Укажите ваш номер телефона' className='phone-input' />
                          <input type='submit' value='Начать инвестировать' className='submit' />
                      </div>
                  </div>
                  <div className="main-bckg-img"></div>
              </div>
              <div className='stats'>
                  <div><p className='desc'><span className='num'>876</span><br />клиентов с 2016 года</p></div>
                  <div><p className='desc'><span className='num'>94%</span><br />положительных отзывов</p></div>
                  <div><p className='desc'><span className='num'>24/7</span><br />поддержка</p></div>
              </div>
          </div>
      </div>
    </>
  );
};
