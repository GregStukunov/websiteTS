import React from "react";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import './styles.css';

export const Contacts = () => {
  return (<div className='contacts'>
      <div className='wrapper'>
        <HeaderComponent />
          <h1 className='heading-contact'>Звоните, пишите<br />и приходите к<br />нам в гости</h1>
          <div className='real-contacts'>
              <h2 className='contactoo'>ts@mail.ru<br />tg: @ts<br />vk.com/ts<br />wa: 8 999 536 29 52</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.841556999031!2d39.71137130862787!3d47.21968242583462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b90d7fa5b543%3A0xe6760de55870a4b1!2z0JHQuNC30L3QtdGBLdCm0LXQvdGC0YAgItCa0YPQv9C10YfQtdGB0LrQuNC5INCU0LLQvtGAIg!5e0!3m2!1sru!2sru!4v1656239646715!5m2!1sru!2sru"
                  width="600" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        <FooterComponent />
      </div>
  </div>);
};
