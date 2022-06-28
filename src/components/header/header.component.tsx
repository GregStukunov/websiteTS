import React from "react";
import './styles.css'
import {Link} from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <div className='full-header'>
            <div className='flex-header title'>
                <p className='contacts-text'>
                    г. Ростов-на-Дону,<br />
                    ул. Погодина, 5а
                </p>
                <Link to='/'><div className='bgrndIMG'></div></Link>
                <div className='flex-header call'>
                    <p className='contacts-text'>
                        <span className='phone-number'>8 (951) 458-42-22</span>
                        <br />Ежедневно с 9:00 до 20:00
                    </p>
                </div>
            </div>
            <div className='header'>
                <div className='flex-header links'>
                    <Link to='/'>
                        <p className='header-text'>Главная</p>
                    </Link>
                    <Link to='/vacancies'>
                        <p className='header-text'>О компании</p>
                    </Link>
                    <Link to='/our-crew'>
                        <p className='header-text'>Коллектив</p>
                    </Link>
                    <Link to='/contacts'>
                        <p className='header-text'>Контакты</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};