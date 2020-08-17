import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'
import Footer from './footer'

const Man = ({ activeBurger }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  const TwoSliderssettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true
  }
  return (
    <div>
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
      <div className="container">
        <div className="item">
          <div className="breadcrumbs">
            <ul className="bread-crumbs">
              <li className="breadcrumbs-item">
                <Link to="/">
                  <span>Главная</span>
                </Link>
              </li>
              <li className="breadcrumbs-item">
                <span>Мужчинам</span>
              </li>
            </ul>
          </div>
          <h1 className="c-h1">Мужчинам</h1>
          <div className="w-full">
            <div className="left">
              <div className="i-menu-catalog">
                <ul className="maincatalog-list-1">
                  <li>Категории</li>
                  <li className="name">Мужчинам</li>
                </ul>
                <ul className="maincatalog-list-2">
                  <li>
                    <a href="#">Одежда</a>
                  </li>
                  <li>
                    <a href="#">Большие размеры</a>
                  </li>
                  <li>
                    <a href="#">Будущие мамы</a>
                  </li>
                  <li>
                    <a href="#">Для высоких</a>
                  </li>
                  <li>
                    <a href="#">Для невысоких</a>
                  </li>
                  <li>
                    <a href="#">Обувь</a>
                  </li>
                  <li>
                    <a href="#">Белье</a>
                  </li>
                  <li>
                    <a href="#">Одежда для дома</a>
                  </li>
                  <li>
                    <a href="#">Офис</a>
                  </li>
                  <li>
                    <a href="#">Пляжная мода</a>
                  </li>
                  <li>
                    <a href="#">Свадьба</a>
                  </li>
                  <li>
                    <a href="#">Спецодежда</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="i-main-banners-slider-v1">
                <div className="slider-section">
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
              </div>
              <div className="i-main-banners-slider-v1 row">
                <div className="banners-small">
                  <div className="banners-item">
                    <div className="banners-zones-container">
                      <div className="banners-zones">
                        <Link to="#">
                          <img
                            style={{ display: 'inline' }}
                            src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="banners-item">
                    <div className="banners-zones-container">
                      <div className="banners-zones">
                        <Link to="#">
                          <img
                            style={{ display: 'inline' }}
                            src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="banners-item">
                    <div className="banners-zones-container">
                      <div className="banners-zones">
                        <Link to="#">
                          <img
                            style={{ display: 'inline' }}
                            src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row j-ajax-carousel-wrapper">
                  <div className=" i-slider-gallery j-slider-gallery">
                    <h3 className="c-h1 title">Одежда</h3>
                    <div className="item-product-slider">
                      <div className="woman-product-slider">
                        <Slider {...TwoSliderssettings}>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/340000/345529.jpg"
                                alt=""
                              />
                            </div>
                            <div className="item-info">
                              <div className="price-block">
                                <div className="price-now">1234 сом</div>
                                <div className="price-last">1234 сом</div>
                              </div>
                              <div className="good">
                                <span className="good-brand">lorem / </span>
                                <span className="good-name">Lorem ipsum</span>
                              </div>
                            </div>
                          </Link>
                        </Slider>
                      </div>
                      <div className="banners-small">
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" i-slider-gallery j-slider-gallery">
                        <h3 className="c-h1 title-shoose">Обувь</h3>
                        <div className="item-product-slider">
                          <div className="shoose-product-slider">
                            <Slider {...TwoSliderssettings}>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/11330000/11335671.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                            </Slider>
                          </div>
                        </div>
                      </div>
                      <div className="banners-small">
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="banners-item">
                          <div className="banners-zones-container">
                            <div className="banners-zones">
                              <Link to="#">
                                <img
                                  style={{ display: 'inline' }}
                                  src="https://cdn.lifehacker.ru/wp-content/uploads/2018/06/SIte_1528192753.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" i-slider-gallery j-slider-gallery">
                        <h3 className="c-h1 title-shoose">Белье</h3>
                        <div className="item-product-slider">
                          <div className="shoose-product-slider">
                            <Slider {...TwoSliderssettings}>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/10930000/10932708.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="item-info">
                                  <div className="price-block">
                                    <div className="price-now">1234 сом</div>
                                    <div className="price-last">1234 сом</div>
                                  </div>
                                  <div className="good">
                                    <span className="good-brand">lorem / </span>
                                    <span className="good-name">Lorem ipsum</span>
                                  </div>
                                </div>
                              </Link>
                            </Slider>
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
export default Man
