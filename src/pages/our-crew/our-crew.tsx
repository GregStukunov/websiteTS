import React from "react";
import './styles.css';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

export const OurCrew = () => {
    const photArray = [
        {img: 'person1.jpg', name: 'Ирина Горо', work:'FE developer'},
        {img: 'person2.jpg', name: 'Марина Колесникова', work:'BE developer'},
        {img: 'person3.jpg', name: 'Антон Вихрёв', work:'Trainee'},
        {img: 'person4.jpeg', name: 'Виктор Селезнёв', work:'Business Analyst'},
        {img: 'person5.jpg', name: 'Галина Ростиславова', work:'Project Manager'},
        {img: 'person6.jpg', name: 'Иван Миняйло', work:'Owner'},
    ];

  return (<div className='page'>
          <div className='wrapper'>
              <HeaderComponent />
              <div className='badges'>
                  <h1 className='mHead'>Мы</h1>
                  <div className='line'>{
                      photArray.map((el) =>
                          +el.img.split('')[6] <= 3 ?
                          <div className='smallBadge'>
                              <div className='borderIMG'>
                                <img className='badgeIMG' src={`./imgs/${el.img}`} alt={el.img} />
                              </div>
                              <h3 className='name'>{el.name}</h3>
                              <p className='worksAs'>{el.work}</p>
                          </div> : <></>)
                  }</div>
                  <div className='line'>{
                      photArray.map((el) =>
                          +el.img.split('')[6] >= 4 ?
                              <div className='smallBadge'>
                                  <div className='borderIMG'>
                                      <img className='badgeIMG' src={`./imgs/${el.img}`} alt={el.img} />
                                  </div>
                                  <h3 className='name'>{el.name}</h3>
                                  <p className='worksAs'>{el.work}</p>
                              </div> : <></>)
                  }</div>
              </div>
              <FooterComponent />
          </div>
  </div>
  );
};
