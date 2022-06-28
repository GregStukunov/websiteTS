import React from "react";
import './styles.css'
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";

export const Vacancies = (props: any) => {
    const data = props;
  return (<div className='vacancies'>
          <div className='wrapper'>
              <HeaderComponent />
              <h1 className='empty'>О нас</h1>
              <div className='allblc'>
              <div className='block'>
                  <div className='img'></div>
                  <div className='img1'></div>
              </div>
              <div className='block'>
                  <div className='img2'></div>
                  <div className='img3'></div>
              </div>
              </div>
              <FooterComponent />
          </div>
      </div>);
};
