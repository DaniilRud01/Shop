import React, { useState } from 'react'
import '../assets/scss/main.scss'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Footer from './footer'

const CardProduct = ({ activeBurger }) => {
  const [addToBasket, setAddToBasket] = useState(false)
  const imgChange = (newUrl) => {
    document.getElementById('big-image').src = newUrl
  }
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 7,
    slidesToScroll: 1
  }
  const TwoSliderssettings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1
  }
  return (
    <div className="main-content j-parallax-main-layer ">
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
          <div className="container i-same-part-kt">
            <div className="product-content-v1">
              <div className="for-breadcramps-v1">
                <div className="i-block-bread-crumbs2-v1">
                  <div>
                    <Link to="/catalog/woman/сlothes" className="back j-return-to-goods-list">
                      Назад
                    </Link>
                    <ul className="bread-crumbs">
                      <li className="breadcrumbs-item  main">
                        <Link to="/" className="breadcrumbs_url">
                          <span>Главная</span>
                        </Link>
                      </li>
                      <li className="breadcrumbs-item secondary">
                        <Link to="/catalog/woman" className="breadcrumbs_url">
                          <span className="title">Женщинам</span>
                        </Link>
                      </li>
                      <li className="breadcrumbs-item secondary">
                        <Link to="/catalog/woman/сlothes" className="breadcrumbs_url">
                          <span className="title">Одежда</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-row">
                <div className="first-horizontal">
                  <div className="brand-and-name j-product-title">
                    <span className="brand">Lorem ipsum dolor sit amet /</span>
                    <span className="name"> Lorem / Ipsum</span>
                  </div>
                  <div className="second-horizontal">
                    <div className="article">
                      Артикул:
                      <span className="j-article">22343</span>
                    </div>
                    <p className="order-quantity j-orders-count-wrapper">
                      Купили
                      <span className="j-orders-count"> более 33 333 раз</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-row relative">
                <div className="card-left">
                  <div className="j-images-carousel j-adaptive-carousel images-carousel absolute t-0 l-0">
                    <ul className="carousel">
                      <li>
                        {/* eslint-disable-next-line no-console,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                          className="smallImg"
                          onClick={() =>
                            imgChange('https://img2.wbstatic.net/big/new/10140000/10147914-1.jpg')
                          }
                          src="https://img2.wbstatic.net/big/new/10140000/10147914-1.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                          className="smallImg"
                          onClick={() =>
                            imgChange('https://img2.wbstatic.net/big/new/10140000/10147914-2.jpg')
                          }
                          id="small-image-2"
                          src="https://img2.wbstatic.net/tm/new/10140000/10147914-2.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                          className="smallImg"
                          onClick={() =>
                            imgChange('https://img2.wbstatic.net/big/new/10140000/10147914-3.jpg')
                          }
                          id="small-image-3"
                          src="https://img2.wbstatic.net/tm/new/10140000/10147914-3.jpg"
                          alt=""
                        />
                      </li>
                      <li>
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                          className="smallImg"
                          onClick={() =>
                            imgChange('https://img2.wbstatic.net/big/new/10140000/10147914-4.jpg')
                          }
                          id="small-image-4"
                          src="https://img2.wbstatic.net/tm/new/10140000/10147914-4.jpg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div id="photo" className="absolute" style={{ left: '95px' }}>
                    <Link className="i-MagicZoom-new-v1 j-zoom-container j-innerzoom-instance">
                      <img
                        id="big-image"
                        src="//img2.wbstatic.net/big/new/10140000/10147914-4.jpg"
                        alt=""
                        className="preview-photo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="card-right">
                  <div className="j-price order-block">
                    <div className="cost">
                      <div className="inner-price j-final-saving tooltipstered">
                        <div className="final-price-block">
                          <span className="final-cost">918 сом</span>
                        </div>
                        <span className="old-price">
                          <del className="c-text-base">1 234 сом</del>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="color j-color-name-container">
                    Цвет:
                    <span className="color"> белый</span>
                  </div>
                  <div className="options">
                    <Slider {...TwoSliderssettings}>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img2.wbstatic.net/tm/new/10140000/10147914-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/7460000/7468159-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/8400000/8405899-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147911-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img2.wbstatic.net/tm/new/13460000/13462180-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147913-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147919-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img2.wbstatic.net/tm/new/10140000/10147914-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/7460000/7468159-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/8400000/8405899-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147911-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img2.wbstatic.net/tm/new/13460000/13462180-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147913-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link className="product-cart" to="#">
                        <div className="item-img">
                          <img
                            src="https://img1.wbstatic.net/tm/new/10140000/10147919-1.jpg"
                            alt=""
                          />
                        </div>
                      </Link>
                    </Slider>
                  </div>
                  <div className="i-sizes-block-v1">
                    <div className="j-table-of-sizes table-of-sizes">
                      <span className="j-sizes-table-show sizes-table-show">Таблица размеров</span>
                      <div className="j-size-list size-list j-smart-overflow-instance">
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" name="size" />
                          <span className="set-size"> 42 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" name="size" />
                          <span className="set-size"> 44 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 46 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 48 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 50 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 52 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 54 </span>
                        </label>
                        <label htmlFor="radio-1">
                          <input type="radio" id="radio-1" className="radio" />
                          <span className="set-size"> 56 </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="order">
                    {!addToBasket ? (
                      <div className="cart-btn-wrap">
                        <button
                          onClick={() => setAddToBasket(true)}
                          type="button"
                          className="c-btn-main-lg-v1 j-add-to-card"
                        >
                          Добавить в корзину
                        </button>
                      </div>
                    ) : (
                      <div className="cart-btn-wrap">
                        <Link to="/basket" className="c-btn-base-lg-v1 j-go-to-basket hide">
                          Перейти в корзину
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="card-add-info-text-block  delivery-cond-block j-delivery-block">
                    <div className="delivery-cond j-delivery-cond">
                      <p>
                        <span className="dfn">Доставка: </span>
                        <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                      </p>
                    </div>
                  </div>
                  <div className="for-brand-logo">
                    <p className="brand-logo">
                      <Link to="#">
                        <img src="//images.wbstatic.net/brands/small/new/16780.jpg?1" alt="" />
                      </Link>
                    </p>
                  </div>
                  <div className="about-advantages">
                    <ul>
                      <li className="about-advantages-item about-advantages-item-delivery c-text-base">
                        Доставка
                      </li>
                      <li className="about-advantages-item about-advantages-item-fitting c-text-base">
                        Lorem
                      </li>
                      <li className="about-advantages-item about-advantages-item-refresh c-text-base">
                        Lorem ipsum dolor sit.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-row">
                <div className="card-left2">
                  <div className="card-add-info relative">
                    <div className="i-composition-v1 j-collapsable-composition i-collapsable-v1">
                      <h1 className="title">Состав</h1>
                      <span className="j-composition collapsable-content j-toogle-height-instance">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor
                        id laborum magni numquam reiciendis?
                      </span>
                    </div>
                    <div className="description j-collapsable-description i-collapsable-v1">
                      <div className="description-header">
                        <h1 className="title">Описание</h1>
                      </div>
                      <div className="j-description description-text collapsable-content j-toogle-height-instance">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                          alias, at, consectetur distinctio dolore error facere fugit, harum illum
                          itaque molestias natus nihil provident temporibus vero vitae voluptates.
                          Aliquam assumenda at aut consequatur consequuntur in officiis, quia veniam
                          veritatis vitae.
                        </p>
                      </div>
                    </div>
                    <div className="params j-collapsable-card-add-info i-collapsable-v1">
                      <div className="j-add-info-section collapsable-content j-toogle-height-instancev h-auto">
                        <div className="params">
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                          <div className="pp">
                            <span>
                              <b>Вид застежки</b>
                            </span>
                            <span>Без застежки</span>
                          </div>
                        </div>
                        <div className="for-error">
                          <div className="card-error-report">
                            <p className="card-error-report-info">
                              Информация о технических характеристиках, комплекте поставки, стране
                              изготовления и внешнем виде товара носит справочный характер и
                              основывается на последних доступных сведениях от производителя
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="i-tags-group limited">
                <h1 className="tags-group-title">С этим товаром искали</h1>
                <ul className="tags-group-list j-tags-list">
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">женские платья летние</Link>
                  </li>
                </ul>
              </section>
              <div className="similar-goods-wrapper">
                <div className="i-slider-gallery j-slider-gallery">
                  <h3 className="c-h1 title">Похожие товары</h3>
                  <Slider {...settings}>
                    <Link className="product-cart" to="#">
                      <div className="item-img">
                        <img
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
                          src="https://img1.wbstatic.net/small/new/11640000/11645885.jpg"
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
      <Footer />
    </div>
  )
}
export default CardProduct
