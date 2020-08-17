import React from 'react'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'
import Footer from './footer'

const SearchProduct = ({ activeBurger }) => {
  return (
    <div id="body-layout" className="main-content j-parallax-main-layer">
      <div className="slider-section">
        {activeBurger ? (
          <div className="menu-left top-menu">
            <div className="scroll-wrapper">
              <div
                className="scroll-content"
                style={{
                  height: 'auto',
                  marginRight: '0px',
                  marginBottom: '0px',
                  maxHeight: '454px'
                }}
              >
                <ul className="top-menus">
                  <li className="top-menus-item woman hover">
                    <Link to="/catalog/woman">Женщинам</Link>
                  </li>
                  <li className="top-menus-item man hover">
                    <Link to="/catalog/man">Мужчинам</Link>
                  </li>
                  <li className="top-menus-item kids hover">
                    <Link to="/catalog/children">Детям</Link>
                  </li>
                  <li className="top-menus-item shoos hover">
                    <Link to="/catalog/footwear">Обувь</Link>
                  </li>
                  <li className="top-menus-item accessories hover">
                    <Link to="/catalog/accessories">Аксессуары</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="left-bg">
          <div className="trunkOld">
            <div className="service-page">
              <div className="service-page-menu">
                <div className="i-sidemenu">
                  <ul className="sidemenu j-menu">
                    <li>
                      <Link to="/faq/ordering">Как сделать заказ</Link>
                    </li>
                    <li>
                      <Link to="/faq/order-payment">Способ оплаты</Link>
                    </li>
                    <li>
                      <Link to="/faq/delivery-of-goods">Доставка</Link>
                    </li>
                    <li>
                      <Link to="/faq/return-products">Возврат товара</Link>
                    </li>
                    <li>
                      <Link to="/faq">Вопросы и ответы</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service-page-content">
                <div className="page-wrap faq-page">
                  <div className="faq-menu j-faq-menu">
                    <ul className="faq-menu-list">
                      <li className="j-faq-menu-item selected">
                        <span data-menu="popular-questions">
                          <Link to="/faq">Вопросы и ответы</Link>
                        </span>
                      </li>
                      <li className="j-faq-menu-item popular-questions">
                        <span data-menu="popular-questions">
                          <Link to="/faq/services">Частые вопросы</Link>
                        </span>
                      </li>
                    </ul>
                    <h4 className="faq-menu-title">Работа с сайтом</h4>
                    <ul className="faq-menu-list">
                      <li className="j-faq-menu-item">
                        <span className="search-selection">
                          <Link to="/faq/search-product">Поиск и выбор товара</Link>
                        </span>
                      </li>
                      <li className="j-faq-menu-item">
                        <span className="order-registration">
                          <Link to="/faq/ordering">Оформление заказа</Link>
                        </span>
                      </li>
                    </ul>
                    <h4 className="faq-menu-title">Работа с заказом</h4>
                    <ul className="faq-menu-list">
                      <li className="j-faq-menu-item">
                        <span className="order-payment">
                          <Link to="/faq/order-payment">Оплата заказа</Link>
                        </span>
                      </li>
                      <li className="j-faq-menu-item">
                        <span className="order-cancellation">
                          <Link to="/faq/rejection-order">Отказ от заказа</Link>
                        </span>
                      </li>
                      <li className="j-faq-menu-item">
                        <span className="delivery-order">
                          <Link to="/faq/delivery-of-goods">Доставка товара</Link>
                        </span>
                      </li>
                    </ul>
                    <h4 className="faq-menu-title">Возврат</h4>
                    <ul className="faq-menu-list">
                      <li className="j-faq-menu-item">
                        <span className="return-goods">
                          <Link to="/faq/return-products">Возврат товара</Link>
                        </span>
                      </li>
                      <li className="j-faq-menu-item">
                        <span className="refund">
                          <Link to="/faq/refund">Возврат денег</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="faq-contain j-faq-contain">
                    <div className="faq-contain-item  j-faq-contain-item selected">
                      <h1 className="faq-title c-h1">Поиск и выбор товара</h1>
                      <div className="faq-dropdown j-faq-dropdown">
                        <div className="faq-dropdown-item">
                          <h2 className="faq-dropdown-title j-faq-dropdown-title c-h3 selected">
                            Поиск товара
                          </h2>
                          <div className="faq-dropdown-content j-faq-dropdown-content drop-show">
                            <div className="faq-tab-block j-faq-tab-block">
                              <div className="faq-tab">
                                <p>
                                  Выберите подходящий способ:
                                  <span className="faq-tab-item j-faq-tab-item selected">
                                    Поисковая строка
                                  </span>
                                </p>
                              </div>
                              <div className="faq-tab-content">
                                <div className="faq-tab-content-item j-faq-tab-content-item selected">
                                  <p>Введите поисковой запрос, например: джинсы женские</p>
                                  <img
                                    src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/1.png"
                                    alt=""
                                  />
                                  <p>Выводятся все женские джинсы:</p>
                                  <img
                                    src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/2.png"
                                    alt=""
                                  />
                                  <div className="faq-next j-faq-next">
                                    <div className="faq-next-content j-faq-next-content">
                                      <p>
                                        Далее можно воспользоваться сортировкой и фильтрами, если
                                        это необходимо:
                                      </p>
                                      <img
                                        src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/3.png"
                                        alt=""
                                      />
                                      <p>
                                        Запрос может содержать артикул товара, цвет товара,
                                        материал, название книги, автора книги или набран с
                                        ошибочной раскладкой клавиатуры:
                                      </p>
                                      <img
                                        src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/4.png"
                                        alt=""
                                      />
                                      <p>
                                        Наш умный поиск адаптирует запрос и найдет то, что Вы
                                        искали:
                                      </p>
                                      <img
                                        src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/5.png"
                                        alt=""
                                      />
                                      <p>
                                        Если интересует конкретный бренд, то просто вбейте его
                                        название в поисковую строку. Название иностранного бренда
                                        можно вводить на русском языке:
                                      </p>
                                      <img
                                        src="https://images.wbstatic.net/interface/faq/kg/work-site/search-selection/v1/6.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default SearchProduct
