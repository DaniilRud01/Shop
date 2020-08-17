import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'
import Footer from './footer'

const Accessories = ({ activeBurger }) => {
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
                <span>Аксессуары</span>
              </li>
            </ul>
          </div>
          <h1 className="c-h1">Аксессуары</h1>
          <div className="w-full">
            <div className="left">
              <div className="i-menu-catalog">
                <ul className="maincatalog-list-1">
                  <li>Категории</li>
                  <li className="name">Аксессуары</li>
                </ul>
                <ul className="maincatalog-list-2">
                  <li>
                    <Link to="#">Аксессуары для волос</Link>
                  </li>
                  <li>
                    <Link to="#">Банды</Link>
                  </li>
                  <li>
                    <Link to="#">Бижутерия</Link>
                  </li>
                  <li>
                    <Link to="#">Веера</Link>
                  </li>
                  <li>
                    <Link to="#">Галстуки и бабочки</Link>
                  </li>
                  <li>
                    <Link to="#">Головные уборы</Link>
                  </li>
                  <li>
                    <Link to="#">Декор для одежды</Link>
                  </li>
                  <li>
                    <Link to="#">Зонты</Link>
                  </li>
                  <li>
                    <Link to="#">Клипсы для брюк</Link>
                  </li>
                  <li>
                    <Link to="#">Кошелки и кредитницы</Link>
                  </li>
                  <li>
                    <Link to="#">Маски для сна</Link>
                  </li>
                  <li>
                    <Link to="#">Носовые платки</Link>
                  </li>
                  <li>
                    <Link to="#">Очки и футляры</Link>
                  </li>
                  <li>
                    <Link to="#">Перчатки и варежки</Link>
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
                    <h3 className="c-h1 title">Сумки и рюкзаки</h3>
                    <div className="item-product-slider">
                      <div className="woman-product-slider">
                        <Slider {...TwoSliderssettings}>
                          <Link className="product-cart" to="#">
                            <div className="item-img">
                              <img
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                                src="https://img1.wbstatic.net/small/new/12070000/12072109.jpg"
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
                        <h3 className="c-h1 title-shoose">Головные уборы</h3>
                        <div className="item-product-slider">
                          <div className="shoose-product-slider">
                            <Slider {...TwoSliderssettings}>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                                    src="https://img1.wbstatic.net/small/new/7580000/7585221.jpg"
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
                        <h3 className="c-h1 title-shoose">Перчатки и варежки</h3>
                        <div className="item-product-slider">
                          <div className="shoose-product-slider">
                            <Slider {...TwoSliderssettings}>
                              <Link className="product-cart" to="#">
                                <div className="item-img">
                                  <img
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
                                    src="https://img2.wbstatic.net/small/new/9840000/9843172.jpg"
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
export default Accessories
