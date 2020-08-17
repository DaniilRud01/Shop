import React from 'react'
import Slider from 'react-slick'
import '../style/slider/media.css'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'

const SliderElem = ({ activeBurger }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
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
                maxHeight: '454px',
                width: '100%'
              }}
            >
              <ul className="top-menus">
                <li className="top-menus-item woman hover">
                  <Link to="/catalog/woman" className="linkTo">Женщинам</Link>
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
              <div className="hiddenSubMenu">
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <img
                    className="block-category"
                    src="https://i.pinimg.com/originals/97/5f/53/975f532cf55975a8c38f8bd147899957.jpg"
                    alt=""
                />
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
                <ul className="hiddenSubMenu-list">
                  <li>Заголовок</li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                  <li>
                    <a href="">Заголовок</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className="container">
        <div className="slider-item">
          <Slider {...settings}>
            <div>
              <Link to="#">
                <img
                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img
                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img
                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img
                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                  alt=""
                />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default SliderElem
