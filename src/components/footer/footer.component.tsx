import React from "react";

import './styles.css'

export const FooterComponent = () => {
    return(<>
        <div className='footer'>
            <div className='footer-texter'>
                <a className='foot-text' href='https://www.skolkovo.ru/static/personaldata_rus.html'>Согласие на обработку данных</a>
                <a className='foot-text' href='https://www.pkb4.ru/'>Служба поддержки</a>
                <a className='foot-text' href='https://xn--80ajghhoc2aj1c8b.xn--p1ai/upload/conf_ru.pdf'>Политика конфиденциальности</a>
            </div>
            <p className='foot-text'>© ts.ru, 2022 | Trading Solutions</p>
        </div>
    </>);
};