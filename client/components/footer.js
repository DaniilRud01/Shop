import React from 'react'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper-v1">
        <div className="line">
          <div className="item-footer buyers">
            <span>Покупателям</span>
            <ul>
              <li>
                <Link to="/faq/ordering">Как сделать заказ</Link>
              </li>
              <li>
                <Link to="/faq/order-payment">Способы оплаты</Link>
              </li>
              <li>
                <Link to="/faq/delivery-of-goods">Доставка</Link>
              </li>
              <li>
                <Link to="/faq">Вопросы и товеты</Link>
              </li>
            </ul>
          </div>
          <div className="item-footer company">
            <span>Компания</span>
            <ul>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Реквизиты</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="item-footer soc-net">
            <span>Мы в соцсетях</span>
            <ul>
              <li>
                <a href="#">Вконтакте</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Одноклассники</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="line2">
          <div className="group">
            <div>
              <span>
                <Link to="/catalog/children">Детям</Link>
              </span>
              <span>
                <Link to="/catalog/woman">Женщинам</Link>
              </span>
              <span>
                <Link to="/catalog/man">Мужчинам</Link>
              </span>
              <span>
                <Link to="/catalog/footwear">Обувь</Link>
              </span>
              <span>
                <Link to="/catalog/accessories">Аксессуары</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
