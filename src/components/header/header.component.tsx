import React from "react";
import './styles.css'
import {Link} from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <>
            <div className='header'>
                <div className='flex-header title'>
                    <Link to='/'><div className='bgrndIMG'></div></Link>
                    <Link to='/'><p className='header-text'>Финансово-инвестиционное<br/>агентство</p></Link>
                </div>
                <div className='flex-header links'>
                    <Link to='/about-us'>
                        <p className='header-text'>О компании</p>
                    </Link>
                    <Link to='/our-crew'>
                        <p className='header-text'>Наша команда</p>
                    </Link>
                    <Link to='/vacancies'>
                        <p className='header-text'>Вакансии</p>
                    </Link>
                    <Link to='/contacts'>
                        <p className='header-text'>Контакты</p>
                    </Link>
                </div>
                <div className='flex-header call'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect width="36" height="36" rx="18" fill="#5D6AFB"/>
                    <path d="M22.4334 19.6334C21.9635 19.1696 21.377 19.1696 20.9102 19.6334C20.5541 19.9865 20.1979 20.3396 19.8478 20.6987C19.752 20.7975 19.6712 20.8184 19.5545 20.7526C19.3241 20.6269 19.0787 20.5252 18.8573 20.3875C17.8248 19.7381 16.96 18.9032 16.1939 17.9636C15.8138 17.4968 15.4757 16.997 15.2393 16.4344C15.1914 16.3207 15.2004 16.2459 15.2931 16.1532C15.6493 15.809 15.9964 15.4559 16.3465 15.1028C16.8343 14.612 16.8343 14.0375 16.3435 13.5437C16.0652 13.2624 15.7869 12.9871 15.5086 12.7058C15.2213 12.4185 14.937 12.1283 14.6467 11.844C14.1769 11.3861 13.5904 11.3861 13.1235 11.847C12.7644 12.2001 12.4203 12.5622 12.0552 12.9093C11.717 13.2295 11.5465 13.6215 11.5105 14.0794C11.4537 14.8245 11.6362 15.5277 11.8936 16.213C12.4203 17.6314 13.2223 18.8913 14.1949 20.0464C15.5086 21.6084 17.0767 22.8443 18.9111 23.7361C19.7371 24.1371 20.593 24.4453 21.5236 24.4962C22.1641 24.5321 22.7207 24.3705 23.1666 23.8708C23.4718 23.5296 23.8159 23.2184 24.1391 22.8922C24.6179 22.4074 24.6209 21.8209 24.1451 21.3421C23.5765 20.7705 23.005 20.202 22.4334 19.6334Z" fill="white"/>
                </svg>
                    <p className='contacts-text'>
                        <span className='phone-number'>8 999 536 29 52</span>
                        <br />Круглосуточно
                    </p>
                </div>
            </div>
        </>
    );
};