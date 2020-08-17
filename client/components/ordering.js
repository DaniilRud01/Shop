import React from 'react'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'
import Footer from './footer'

const Ordering = ({ activeBurger }) => {
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
                    <div className="faq-contain-item  j-faq-contain-item selected" />
                    <h1 className="faq-title c-h1">Оформление заказа</h1>
                    <div className="faq-dropdown j-faq-dropdown">
                      <div className="faq-dropdown-item">
                        <h2 className="faq-dropdown-title j-faq-dropdown-title c-h3 selected">
                          Как оформить заказ
                        </h2>
                        <div className="faq-dropdown-content  j-faq-dropdown-content drop-show">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            alias blanditiis, consequatur corporis deserunt dicta distinctio
                            dolorem, doloremque doloribus et fugiat hic illo iste mollitia odit
                            omnis praesentium qui reiciendis reprehenderit sed tempore ut, velit
                            veniam voluptas voluptatum. Obcaecati, veritatis.
                          </p>
                          <img
                            src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                            alt=""
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, vero?
                          </p>
                          <ol>
                            <li>1.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>2.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>3.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>4.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>5.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>6.Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                          </ol>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                            veritatis?
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                            iure laudantium! Beatae dolorem porro totam?
                          </p>
                          <div className="faq-next j-faq-next">
                            <div className="faq-next-content j-faq-next-content">
                              <p>Lorem ipsum dolor sit amet.</p>
                              <ol>
                                <li>
                                  <p>1.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                  <img
                                    src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <p>
                                    2.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Soluta!
                                  </p>
                                  <ul>
                                    <li>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                      </p>
                                      <img
                                        src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                        alt=""
                                      />
                                    </li>
                                    <li>
                                      <p>
                                        3.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Eaque?
                                      </p>
                                      <img
                                        src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <p>
                                    4.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo.
                                  </p>
                                  <img
                                    src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <p>
                                    5.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo.
                                  </p>
                                  <img
                                    src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                    alt=""
                                  />
                                </li>
                                <li>
                                  <p>
                                    6.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo.
                                  </p>
                                  <img
                                    src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                    alt=""
                                  />
                                </li>
                              </ol>
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
export default Ordering
