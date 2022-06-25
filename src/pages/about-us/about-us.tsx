import React from "react";
import './styles.css'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

export const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='wrapper'>
          <HeaderComponent />
          <div className='main-content'>
            <h1 className='headingAbout'>Кто мы?</h1>
              <p className='textAbout'>Мы, набирающая обороты компания, которая<br />
                  делает своих клиентов богаче, грамотно<br />
                  инвестируя их средства.</p>
              <div className='bckImg'></div>
              <div className='points'>
                  <div className='point'>
                    <p className='text'>
                        <span className='smallHeading'>Основаны в 2016 году</span><br />
                        И за это время собрался слаженный<br />
                        коллектив специалистов
                    </p>
                 </div>
                  <div className='point'>
                      <p className='text'>
                          <span className='smallHeading'>Более 876 клиентов</span><br />
                          Нам доверили свои средства уже<br />
                          почти 1000 человек
                      </p>
                  </div>
                  <div className='point'>
                      <p className='text'>
                          <span className='smallHeading'>Круглосуточная поддержка</span><br />
                          Что бы не случилось,<br />
                          мы всегда на связи
                      </p>
                  </div>
              </div>
          </div>
          <FooterComponent />
      </div>
    </div>
  );
};
