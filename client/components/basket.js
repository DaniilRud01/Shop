import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import '../style/basket/media.css'
import '../assets/scss/main.scss'
import AddedItem from './addedItem'

const Basket = ({ activeBurger }) => {
  return (
    <div id="body-layout" className="main-content j-parallax-main-layer unregistered-basket">
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
          <AddedItem />
          <div className="lk j-b-lk-basket cart-page unregistered kg">
            <div className="lk-content">
              <div className="order-details">
                <div className="i-empty-basket">
                  <h3>В вашей корзине пока ничего нет</h3>
                  <div className="text">
                    Корзина ждет, что ее наполнят. Желаем приятных покупок!
                  </div>
                </div>
                <div className="visitedGoods-in-basket">
                  <div className="i-visited-goods j-recent-goods-container">
                    <div className="visited-goods-header">
                      <h3 className="title">Вы недавно смотрели</h3>
                      <Link to="#" className="see-all">
                        Смотреть все
                      </Link>
                    </div>
                    <div className="list j-products-container">
                      <div className="item j-product-item">
                        <Link className="j-open-full-product-card">
                          <div className="item-img">
                            <img
                              src="//img2.wbstatic.net/small/new/8660000/8660678.jpg"
                              alt=""
                              className=""
                            />
                          </div>
                        </Link>
                        <div className="item-info">
                          <div className="price-block j-price-block">
                            <div className="price-now">1 456 сом</div>
                            <div className="price-last">1 234 сом</div>
                            <div className="good">
                              <span className="good-brand">HUGGIES</span>
                              <span className="good-name">
                                Подгузники Elite Soft 3 (5-9 кг) 80 шт.
                              </span>
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
  )
}
export default Basket
