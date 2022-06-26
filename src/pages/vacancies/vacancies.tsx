import React from "react";
import './styles.css'
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";

export const Vacancies = (props: any) => {
    const data = props;
  return (<div className='vacancies'>
          <div className='wrapper'>
              <HeaderComponent />
              {
                  data === ''
                      ? <div>{data.data}</div>
                      :
                      <h1 className='empty'>
                        Empty...
                      </h1>
              }
              <FooterComponent />
          </div>
      </div>);
};
