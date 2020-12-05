import React from 'react';
import './footer.styles.scss';
import { FooterContainer, FooterRow, FooterCopyright, FooterWrapper, FooterColumn } from './footer.styles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRow>
                    <FooterColumn>
                        <ul className="footer__column-list">
                            <li className="footer__column-title">Помощь</li>
                            <li className="footer__column-item">Как оформить заказ</li>
                            <li className="footer__column-item">Как выбрать размер</li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn>
                        <ul className="footer__column-list">
                            <li className="footer__column-title">Мы в соцсетях</li>
                            <li className="footer__column-item">Вконтакте</li>
                            <li className="footer__column-item">Инстаграмм</li>
                        </ul>
                    </FooterColumn>
                </FooterRow>
            </FooterWrapper>
            <FooterCopyright>
                2020-2021 © Blackboss — модный интернет-магазин одежды, обуви и аксессуаров. Все права защищены. Доставка по всей России.
                <p>Creater: Mamontov Technology</p>
            </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer