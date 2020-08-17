import React from 'react'
import { Link } from 'react-router-dom'

const AddedItem = () => {
  return (
    <div className="relative j-parallax-main-layer unregistered-basket">
      <div className="left-bg">
        <div className="trunkOld">
          <div className="lk cart-page unregistered" style={{minWidth: "1050px"}}>
            <div className="lk-content">
              <div className="order-details">
                <div className="lk-basket">
                  <div className="lk-basket-left">
                    <h3 className="bold">Корзина</h3>
                    <div className="basket-list j-b-basket-list">
                      <div className="basket-list-items">
                        <div className="item j-b-basket-item first last">
                          <div className="item-in-basket">
                            <Link to="#">
                              <img
                                src="//img2.wbstatic.net/small/new/10140000/10147914.jpg"
                                alt=""
                              />
                            </Link>
                            <div className="item-in-basket-info">
                              <Link to="#">
                                <span className="item-title-brand">
                                  Lorem ipsum dolor sit amet.
                                </span>
                                <span className="item-title-good">
                                  {' '}
                                  / Lorem ipsum dolor sit amet
                                </span>
                              </Link>
                              <div className="item-desc">
                                <div className="options">
                                  <table className="options-table">
                                    <tbody>
                                      <tr>
                                        <td className="option text-base-gray">Артикул:</td>
                                        <td className="value text-base">10147914</td>
                                      </tr>
                                      <tr>
                                        <td className="option text-base-gray">Цвет</td>
                                        <td className="value text-base">Белый</td>
                                      </tr>
                                      <tr>
                                        <td className="option text-base-gray">Размер</td>
                                        <td className="value text-base">46</td>
                                      </tr>
                                      <tr>
                                        <td className="option text-base-gray">Кол-во</td>
                                        <td className="value text-base">
                                          <span className="input-number">
                                            <button type="button" className="minus" />
                                            <input
                                              value="1"
                                              type="text"
                                              className="in_tb numeric ignore"
                                            />
                                            <button type="button" className="plus" />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="discounts-block">
                                  <div className="discounts">
                                    <div className="discounts-wrap">
                                      <table className="discounts-table">
                                        <tbody>
                                          <tr>
                                            <td className="td option text-base-gray">
                                              Скидка на товар
                                            </td>
                                            <td className="value text-base discount-percent">
                                              42%
                                            </td>
                                            <td className="value text-base discount-currency">
                                              1 918
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="option text-base-gray">
                                              <span className="text-base-magenta j-b-personal-coupon-tip">
                                                Lorem
                                              </span>
                                            </td>
                                            <td className="value text-base discount-percent">
                                              42%
                                            </td>
                                            <td className="value text-base discount-currency">
                                              1 918
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <div className="total-price h3">
                                        <span>778 сом</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item-in-basket-btn">
                              <div className="btn-withDotted-cross j-basket-item-del">
                                <span>Удалить</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lk-basket-right">
                    <div className="do-order">
                      <div className="do-order-total">
                        <div className="do-order-total-line h3">
                          <span>Итого </span>
                          <span className="flRight do-order-total-price"> 778 сом</span>
                        </div>
                        <div className="do-order-total-line total-count">
                          <span className="flRight"> 1 товар</span>
                        </div>
                        <Link to="/faq/ordering" className="btn-orange btn-do-order j-btn-step">
                          Перейти к оформлению
                        </Link>
                      </div>
                      <div className="do-order-bottom">
                        <span className="elem fitting">
                          Lorem <br /> Ipsum
                        </span>
                        <span className="elem refund">
                          {' '}
                          Lorem <br /> Ipsum
                        </span>
                        <span className="elem identity">
                          Lorem <br /> Ipsum
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
  )
}
export default AddedItem
