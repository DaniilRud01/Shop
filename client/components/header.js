import React from 'react'
import '../assets/scss/main.scss'
import '../style/header/media.css'
import { Link } from 'react-router-dom'

const Header = ({ setActiveBurger, activeBurger }) => {
  return (
    <div className="header">
      {!activeBurger ? (
        <div>
          <div className="header-wrapper">
            <ul className="header-top">
              <li className="item-delivery">
                <Link to="/delivery">Доставка</Link>
              </li>
              <li className="faq item j-header-tooltip-control">
                <Link to="/faq" className="faq-btn">
                  Частые вопросы
                </Link>
                <div className="faq-list j-header-tooltip-content">
                  <ul>
                    <li>
                      <Link to="/faq/search-product">Поиск и выбор товара</Link>
                    </li>
                    <li>
                      <Link to="/faq/refund">Возврат денег</Link>
                    </li>
                    <li>
                      <Link to="/faq/delivery-of-goods">Доставка заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/order-payment">Оплата заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/rejection-order">Отказ от заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/ordering">Оформление заказа</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-content">
            <Link className="header-logo" to="/">
              <img src="https://images.wbstatic.net/marketing/logo0308.png" alt="" />
            </Link>
            <button type="button" className="c-btn-burger" onClick={() => setActiveBurger(true)}>
              <span />
            </button>
            <div className="header-search">
              <input type="text" className="s-text" placeholder="Я ищу..." />
              <span className="find c-loupe-18" />
            </div>
            <div className="header-user-menu">
              <div className="head-address user-menu-item">
                <a href="#" className="my-basket">
                  Адреса
                  <span className="user-menu-icon" />
                </a>
              </div>
              <div className="cart-informer">
                <Link to="/basket" className="basket">
                  Корзина <span>(0)</span>
                  <span className="user-basket-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="header-wrapper">
            <ul className="header-top">
              <li className="item-delivery">
                <Link to="/delivery">Доставка</Link>
              </li>
              <li className="faq item j-header-tooltip-control">
                <Link to="/faq" className="faq-btn">
                  Частые вопросы
                </Link>
                <div className="faq-list j-header-tooltip-content">
                  <ul>
                    <li>
                      <Link to="/faq/search-product">Поиск и выбор товара</Link>
                    </li>
                    <li>
                      <Link to="/faq/refund">Возврат денег</Link>
                    </li>
                    <li>
                      <Link to="/faq/delivery-of-goods">Доставка заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/order-payment">Оплата заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/rejection-order">Отказ от заказа</Link>
                    </li>
                    <li>
                      <Link to="/faq/ordering">Оформление заказа</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-content">
            <a href="" className="header-logo">
              <img src="https://images.wbstatic.net/marketing/logo0308.png" alt="" />
            </a>
            <button
              type="button"
              className="c-btn-burger active-burger"
              onClick={() => setActiveBurger(false)}
            >
              <span />
            </button>
            <div className="header-search">
              <input type="text" className="s-text" placeholder="Я ищу..." />
              <span className="find c-loupe-18" />
            </div>
            <div className="header-user-menu">
              <div className="head-address user-menu-item">
                <a href="#" className="my-basket">
                  Адреса
                  <span className="user-menu-icon" />
                </a>
              </div>
              <div className="cart-informer">
                <Link to="/basket" className="basket">
                  Корзина <span>(0)</span>
                  <span className="user-basket-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
