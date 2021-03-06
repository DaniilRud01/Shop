import React from 'react'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'
import Footer from './footer'

const Refund = ({ activeBurger }) => {
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
                      <Link to="/faq/rejection-order">Возврат товара</Link>
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
                      <h1 className="faq-title c-h1">Возврат денег</h1>
                      <div className="faq-dropdown j-faq-dropdown">
                        <div className="faq-dropdown-item">
                          <h2 className="faq-dropdown-title j-faq-dropdown-title c-h3 selected">
                            Способ возврата денег
                          </h2>
                          <div className="faq-dropdown-content  j-faq-dropdown-content drop-show">
                            <div className="faq-tab-block  j-faq-tab-block">
                              <div className="faq-tab">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Consequatur magnam perspiciatis repudiandae voluptate voluptates?
                                  Blanditiis.
                                </p>
                                <h5>Условия:</h5>
                                <ol>
                                  <li>1.Lorem ipsum dolor sit amet.</li>
                                  <li>2.Lorem ipsum dolor sit amet.</li>
                                  <li>3.Lorem ipsum dolor sit amet.</li>
                                  <li>4.Lorem ipsum dolor sit amet.</li>
                                  <li>5.Lorem ipsum dolor sit amet.</li>
                                </ol>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                                  consequatur est eveniet exercitationem, explicabo harum obcaecati
                                  quas suscipit veritatis!
                                </p>
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
export default Refund
