import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Header from './header'
import Main from './mainProduct'
import Footer from './footer'
import Delivery from './delivery'
import Woman from './woman'
import FAQ from './faq'
import Services from './services'
import SearchProduct from './faq-search-product'
import Ordering from './ordering'
import OrderPayment from './оrder-payment'
import RejectionOrder from './rejectionOrder'
import DeliveryOfGoods from './deliveryOfGoods'
import ReturnProducts from './returnProducts'
import Refund from './refund'
import Man from './man'
import Children from './children'
import Footwear from './footwear'
import Accessories from './accessories'
import Clothes from './clothes'
import CardProduct from './CardProduct'
import Basket from './basket'

const Home = () => {
  const [activeBurger, setActiveBurger] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const [activeSocial, setActiveSocial] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 800) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)
  return (
    <div>
      <Header setActiveBurger={setActiveBurger} activeBurger={activeBurger} />
      <Route exact path="/" component={() => <Main activeBurger={activeBurger} />} />
      <Route exact path="/basket" component={() => <Basket activeBurger={activeBurger} />} />
      <Route exact path="/delivery" component={() => <Delivery activeBurger={activeBurger} />} />
      <Route exact path="/faq" component={() => <FAQ activeBurger={activeBurger} />} />
      <Route
        exact
        path="/faq/ordering"
        component={() => <Ordering activeBurger={activeBurger} />}
      />
      <Route exact path="/faq/refund" component={() => <Refund activeBurger={activeBurger} />} />
      <Route
        exact
        path="/faq/order-payment"
        component={() => <OrderPayment activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/faq/rejection-order"
        component={() => <RejectionOrder activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/faq/delivery-of-goods"
        component={() => <DeliveryOfGoods activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/faq/return-products"
        component={() => <ReturnProducts activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/faq/services"
        component={() => <Services activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/faq/search-product"
        component={() => <SearchProduct activeBurger={activeBurger} />}
      />
      <Route exact path="/catalog/woman" component={() => <Woman activeBurger={activeBurger} />} />
      <Route
        exact
        path="/catalog/woman/сlothes"
        component={() => <Clothes activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/catalog/woman/сlothes/сard-product"
        component={() => <CardProduct activeBurger={activeBurger} />}
      />
      <Route exact path="/catalog/man" component={() => <Man activeBurger={activeBurger} />} />
      <Route
        exact
        path="/catalog/children"
        component={() => <Children activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/catalog/footwear"
        component={() => <Footwear activeBurger={activeBurger} />}
      />
      <Route
        exact
        path="/catalog/accessories"
        component={() => <Accessories activeBurger={activeBurger} />}
      />
      <Route exact path="/" component={() => <Footer />} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="quicknav"
        id="#button"
        style={{
          display: 'block',
          position: 'fixed',
          bottom: '5px'
        }}
        onClick={scrollTop}
      />
      {activeSocial ? (
        <div className="scrolled-social smm-fixed" style={{ position: 'fixed', display: 'block' }}>
          <div className="show-icons">
            <div className="icons rotate-cross">
              <div className="icons-available">
                <div className="wrap-messenger">
                  <div className="links wb hide">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                    <a href="#" />
                  </div>
                  <div className="links viber" style={{ display: 'block' }}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="#" />
                  </div>
                  <div className="links vkcom">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="#" />
                  </div>
                  <div className="links tg">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" />
                  </div>
                  {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                  <div className="links fb-mes">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                    <a href="/" />
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="icons-tmpl active" onClick={() => setActiveSocial(false)} />
          </div>
        </div>
      ) : (
        <div className="scrolled-social smm-fixed" style={{ position: 'fixed', display: 'block' }}>
          <div className="show-icons">
            <div className="icons rotate-cross">
              <div className="icons-available" style={{ bottom: '330px', transition: '.5s' }}>
                <div className="wrap-messenger">
                  <div className="links wb hide">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                    <a href="#" />
                  </div>
                  <div className="links viber" style={{ display: 'block' }}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="#" />
                  </div>
                  <div className="links vkcom">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="#" />
                  </div>
                  <div className="links tg">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href="/" />
                  </div>
                  {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                  <div className="links fb-mes">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                    <a href="/" />
                  </div>
                </div>
              </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="icons-tmpl" onClick={() => setActiveSocial(true)} />
          </div>
        </div>
      )}
    </div>
  )
}

Home.propTypes = {}

export default Home
