import React from "react";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import './styles.css';

export const Contacts = () => {
  return (<div className='contacts'>
      <div className='wrapper'>
        <HeaderComponent />
          <h1 className='heading-contact'>Контакты</h1>
          <div className='real-contacts'>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.176118184454!2d39.70767361581168!3d47.25225932038118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b8488b51967f%3A0x1df295bdfce3fe3c!2z0YPQuy4g0J_QvtCz0L7QtNC40L3QsCwgNdCQLCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDM4!5e0!3m2!1sru!2sru!4v1656437533768!5m2!1sru!2sru"
                  width="600" height="450" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <h2 className='contactoo'>tenes@mail.ru<br />tg: @tenes<br />vk.com/tenes<br />wa: 8 (951) 458-42-22</h2>
        <FooterComponent />
      </div>
  </div>);
};
