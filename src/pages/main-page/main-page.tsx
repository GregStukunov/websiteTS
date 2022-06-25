import React from "react";
import './styles.css'
import {HeaderComponent} from "../../components/header/header.component";

export const MainPage = () => {
  return (
    <>
      <div className='whole-page'>
          <div className='wrapper'>
            <HeaderComponent />
              <div>
              </div>
              <div className="main-bckg-img"></div>
          </div>
      </div>
    </>
  );
};
