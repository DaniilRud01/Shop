import React from 'react'
import { Link } from 'react-router-dom'
import '../style/clothes/media.css'
import '../assets/scss/main.scss'
import Footer from './footer'

const Clothes = ({ activeBurger }) => {
  return (
    <div className="main-content j-parallax-main-layer ">
      {activeBurger ? (
        <div className="menu-left top-menu">
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
      ) : (
        <div />
      )}
      <div className="left-bg">
        <div className="trunkOld">
          <div className="i-breadcrumbs">
            <ul className="bread-crumbs">
              <li className="breadcrumbs-item">
                <Link to="/">
                  <span>Главная</span>
                </Link>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/catalog/woman">
                  <span>Женщинам</span>
                </Link>
              </li>
              <li className="breadcrumbs-item">
                <span>Одежда</span>
              </li>
            </ul>
          </div>
          <h1 className="c-h1 catalog-title">Женская одежда</h1>
          <div className="left">
            <div className="i-menu-catalog">
              <ul className="maincatalog-list-1">
                <li className="name">
                  <Link to="/catalog/woman/сlothes">Одежда</Link>
                </li>
              </ul>
              <ul className="maincatalog-list-2">
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
            <div className="filters i-filters">
              <div className="filterblock brand show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Бренд</span>
                </div>
                <div className="BrandSearch">
                  <input type="text" className="c-input-base-sm" placeholder="Я ищу..." />
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock price show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Цена</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="selectorsblock range">
                  <div className="range-text">
                    <div className="start-n">
                      <span className="start-text">от</span>
                      <div>
                        <input className="c-input-base-sm" type="text" placeholder="30" />
                      </div>
                    </div>
                    <div className="end-n">
                      <span className="end-text">До</span>
                      <div>
                        <input className="c-input-base-sm" type="text" placeholder="150" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock color show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Цвет</span>
                  <span className="reset">Сбросить</span>
                </div>
                <label htmlFor="radio-1">
                  <input type="radio" id="radio-1" className="radio" name="color" />
                  <span className="beige" />
                </label>
                <label htmlFor="radio-2">
                  <input type="radio" id="radio-2" className="radio" name="color" />
                  <span className="white" />
                </label>
                <label htmlFor="radio-3">
                  <input type="radio" id="radio-3" className="radio" name="color" />
                  <span className="lite-blue" />
                </label>
                <label htmlFor="radio-4">
                  <input type="radio" id="radio-4" className="radio" name="color" />
                  <span className="yellow" />
                </label>
                <label htmlFor="radio-5">
                  <input type="radio" id="radio-5" className="radio" name="color" />
                  <span className="brown" />
                </label>
                <label htmlFor="radio-6">
                  <input type="radio" id="radio-6" className="radio" name="color" />
                  <span className="red" />
                </label>
                <label htmlFor="radio-7">
                  <input type="radio" id="radio-7" className="radio" name="color" />
                  <span className="orange" />
                </label>
                <label htmlFor="radio-8">
                  <input type="radio" id="radio-8" className="radio" name="color" />
                  <span className="pearl" />
                </label>
                <label htmlFor="radio-9">
                  <input type="radio" id="radio-9" className="radio" name="color" />
                  <span className="rose" />
                </label>
                <label htmlFor="radio-10">
                  <input type="radio" id="radio-10" className="radio" name="color" />
                  <span className="gray" />
                </label>
                <label htmlFor="radio-11">
                  <input type="radio" id="radio-11" className="radio" name="color" />
                  <span className="blue" />
                </label>
                <label htmlFor="radio-12">
                  <input type="radio" id="radio-12" className="radio" name="color" />
                  <span className="violet" />
                </label>
                <label htmlFor="radio-13">
                  <input type="radio" id="radio-13" className="radio" name="color" />
                  <span className="black" />
                </label>
              </div>
              <div className="filterblock wbsize show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Размер</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock season show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Сезон</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock consists show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Состав</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f48 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Вид застежки</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f45 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Тип рукава</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f109 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Модель брюк</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f114 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Модель юбки</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f91 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Фактура материала</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f113 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Модель костюма</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f1307 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Вырез горловины</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterblock f46 show filter-active">
                <div className="filter-title">
                  <span className="filter-title-text">Покрой</span>
                  <span className="reset">Сбросить</span>
                </div>
                <div className="i-scrollbar-in-filter">
                  <div className="scroll-wrapper selectorsblock custom-scroll scrollbar-inner">
                    <div className="selectorsblock custom-scroll scrollbar-inner scroll-content scroll-scrolly_visible">
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (22)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (12)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (7)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (2)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                      <span className="j-list-item filters-item c-checkbox-withText-v1">
                        <input className="check-brand" type="checkbox" /> Lorem ipsum (3)
                      </span>
                    </div>
                    <div className="scroll-element scroll-x scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" />
                      </div>
                    </div>
                    <div className="scroll-element  scroll-y scroll-scrolly_visible">
                      <div className="scroll-element_outer">
                        <div className="scroll-element_size" />
                        <div className="scroll-element_track" />
                        <div className="scroll-bar" style={{ top: '0.70232px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog-content new-size">
            <div className="inner-sorter">
              <div className="sort i-sort">
                <span>Сортировка по:</span>
                <Link style={{ color: '#cb11ab' }} to="#" className="sort-item sort_select">
                  <span>Цене</span>
                </Link>
                <Link to="#" className="sort-item sort_select">
                  <span>Обновлению</span>
                </Link>
                <Link to="#" className="sort-item sort_select">
                  <span>Скидке</span>
                </Link>
              </div>
            </div>
            <div className="catalog_main_table j-products-container">
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="/catalog/woman/сlothes/сard-product">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ minHeight: '442px', width: '252px' }}
                className="dtList i-dtList j-card-item hover"
              >
                <Link to="#">
                  <div className="dtList-inner">
                    <div className="l_class">
                      <img
                        src="https://img2.wbstatic.net/c252x336/new/10140000/10147914-1.jpg"
                        alt=""
                        className="thumbnail"
                      />
                    </div>
                    <div className="dtlist-inner-brand">
                      <div className="j-cataloger-price">
                        <span className="price">
                          <ins className="lower-price">1234 сом</ins>
                          <span className="price-old-block">
                            <del>222 сом</del>
                            <span className="price-sale price-active">-59%</span>
                          </span>
                        </span>
                      </div>
                      <div className="dtlist-inner-brand-name">
                        <strong className="brand-name c-text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda
                          at, atque commodi, fugiat incidunt ipsa ipsum iste labore, laborum
                          obcaecati officiis porro rem tenetur voluptas?
                        </strong>
                        <span className="goods-name c-text-sm">Lorem ipsum dolor sit.</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="dtlist-dop">
                  <div className="dtlist-dop-inner">
                    <div className="quick-order">
                      <Link to="#" className="c-btn-main ">
                        В корзину
                      </Link>
                      <span className="spec-actions-catalog i-spec-action">Лето 2020</span>
                    </div>
                    <span className="sizes">
                      Размеры в наличии:
                      <br />
                      <Link to="#">42</Link>
                      <Link to="#">44</Link>
                      <Link to="#">46</Link>
                      <Link to="#">48</Link>
                      <Link to="#">50</Link>
                      <Link to="#">52</Link>
                      <Link to="#">54</Link>
                      <Link to="#">...</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pager-bottom">
              <div className="pager i-pager">
                <div className="pageToInsert">
                  <span className="pagination-item-active">1</span>
                  <Link to="#" className="pagination-item  around-active">
                    2
                  </Link>
                  <Link to="#" className="pagination-item  around-active">
                    3
                  </Link>
                  <Link to="#" className="pagination-item  around-active">
                    4
                  </Link>
                  <Link to="#" className="pagination-item  around-active">
                    5
                  </Link>
                  <Link to="#" className="pagination-item  around-active">
                    6
                  </Link>
                  <Link to="#" className="pagination-item  around-active">
                    7
                  </Link>
                  <span className="pagination-dotes">...</span>
                  <Link to="#" className="pagination-next">
                    Следующая страница
                  </Link>
                  <span className="arrow next" />
                </div>
              </div>
            </div>
            <div className="j-search-tags-container">
              <section className="i-tags-group">
                <h1 className="tags-group-title">С этими товарами ищут</h1>
                <ul className="tags-group-list j-tags-list">
                  <li className="tags-group-item j-tag">
                    <Link to="#">Обувь женская</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Новинки</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Спортивный костюм женский</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Ночная сорочка женская</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Платье</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Купальни</Link>
                  </li>
                  <li className="tags-group-item j-tag">
                    <Link to="#">Пижама женская</Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Clothes
