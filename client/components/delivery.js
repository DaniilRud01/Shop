import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'
import Footer from './footer'
import SliderElem from './slider'

const Delivery = ({ activeBurger }) => {
  return (
    <div>
      <SliderElem activeBurger={activeBurger} />
      <div className="container">
        <div className="sidemenu">
          <ul className="sidemenu top-menu">
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
              <Link to="/faq">Вопросы и ответы</Link>
            </li>
          </ul>
        </div>
        <h1>Доставка</h1>
        <h3>Мы можем доставить Ваш заказ в любую точку Мира!</h3>
        <div className="product-item">
          <div className="img-product">
            <span>Фото: Партия - Сумка 20 кг готовая к отправке</span>
            <img src="https://odejdaizkirgizii.ru/images/ban_bags2_600x400.jpg" alt="" />
          </div>
          <div className="product-title">
            <span className="schedule">График отправки/доотправки заказов</span>
            <br />
            <span className="title-schedule">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum earum,
              est facere ipsum libero minus nam quaerat quod sint vitae voluptatum! Accusantium
              cumque iure minus quis sit, suscipit tempora. Adipisci aliquam aliquid cum cupiditate
              dolore dolorum excepturi expedita facilis harum hic, impedit in inventore ipsa labore
              minima modi molestias natus neque, numquam odio officiis, provident quae quos
              reiciendis reprehenderit sequi sit vero. Asperiores atque doloremque eligendi expedita
              fugiat illum magnam minus, natus nostrum perferendis quo, sed sit, suscipit tempora
              ut. Amet aperiam culpa debitis ex maxime minus mollitia nam nihil nisi obcaecati
              optio, placeat quaerat voluptatibus. Deleniti dignissimos doloremque dolores, error
              facilis inventore iste, magnam mollitia natus nesciunt perspiciatis quam qui quidem
              ratione, saepe sapiente tempora? A accusantium adipisci aliquam amet animi aspernatur
              aut cum debitis delectus dignissimos eligendi esse et ex exercitationem fuga modi
              mollitia neque nesciunt numquam pariatur perspiciatis quas ratione sapiente sed
              tempora, tenetur voluptate voluptatem?
            </span>
          </div>
          <div className="delivery-img">
            <img src="https://odejdaizkirgizii.ru/images/tk_list_2020.jpg" alt="" />
            <span className="delivery-company-site">Перейти на сайт транспортной компании</span>
            <ul>
              <li>
                <a href="https://www.odejdaizkirgizii.ru/">ТК Альянс Карго</a>
              </li>
              <li>
                <a href="https://www.alpha-cargo.kg/">ТК Альфа Карго</a>
              </li>
              <li>
                <a href="https://www.nrg-tk.ru/">Энергия</a>
              </li>
              <li>
                <a href="https://www.dellin.ru/">ТК Деловые Линии</a>
              </li>
              <li>
                <a href="https://pecom.ru/">ПЭК транспортная компания</a>
              </li>
              <li>
                <a href="https://www.jde.ru/">ЖелДорЭкспедиция траспортная компания</a>
              </li>
              <li>
                <a href="https://www.baikalsr.ru/">Байкал Сервис транспортная компания</a>
              </li>
              <li>
                <a href="https://www.azimut-nsk.ru/">ТК Азимут</a>
              </li>
              <li>
                <a href="https://www.ata.su/">Транспортная компания АТА</a>
              </li>
              <li>
                <a href="https://www.cdek.ru/">CDEK Логическое решение</a>
              </li>
            </ul>
          </div>
          <div className="delivery-title">
            <span className="delivery-country">
              Доставка: Россия, Казахстан, Беларусь, Республика Крым
            </span>
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore et
              exercitationem qui suscipit. Autem beatae consequatur nemo nesciunt optio quisquam
              ullam. Ad adipisci, incidunt iste molestiae odio omnis perferendis quaerat quam quas
              sit! Beatae blanditiis iure molestiae nesciunt! Consequatur dolore eos ex explicabo
              fugit hic id itaque mollitia nisi nostrum possimus praesentium, rem sequi temporibus
              voluptates. Blanditiis inventore ipsa omnis? Assumenda debitis eaque eius error
              excepturi fugit illum incidunt, inventore magnam maxime nemo non numquam provident
              quas repudiandae temporibus.
            </span>
            <span style={{ marginTop: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis et harum,
              ipsam nam necessitatibus nihil nisi porro quibusdam quod ratione repellendus tenetur
              veritatis voluptas voluptates! Assumenda eligendi fugit ipsum laboriosam nesciunt
              obcaecati quae quas quasi! Autem commodi consequatur cupiditate deleniti doloremque
              eos esse est iste officia, quae, recusandae, tempora!
            </span>
            <img
              src="https://odejdaizkirgizii.ru/images/red_bag_ready_for_packing_600.jpg"
              alt=""
            />
            <span className="price=delivery" style={{ color: '#c912ab', fontSize: '20px' }}>
              Платная доставка (Авиа): Германия, Литва, Латвия, Польша, США, Россия (в том числе
              о.Сахалин), Узбекистан, Таджикистан и другие страны{' '}
            </span>
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt
              doloremque enim facere incidunt, ipsum maiores optio provident quas quisquam similique
              sit suscipit veritatis voluptatem voluptatibus? Aliquid at debitis doloribus, ea earum
              est eum fugit ipsa labore mollitia quod, repellendus, tempora totam vel vitae. Ab
              dignissimos minus nemo repudiandae tempore.
            </span>
            <br />
            <span
              className="attention"
              style={{ color: '#c912ab', fontSize: '20px', marginTop: '20px' }}
            >
              Внимание
            </span>
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, commodi
              eligendi enim eos id impedit iste laudantium repellat totam? Architecto asperiores,
              aut consectetur delectus dicta illum maxime mollitia necessitatibus neque nisi
              praesentium provident quae quibusdam quo reiciendis repudiandae, sequi sunt suscipit,
              velit veritatis! Assumenda beatae consequatur obcaecati optio tempore.
            </span>
          </div>
          <div className="delivery-cities">
            <span style={{ color: '#c912ab', fontSize: '20px' }}>Города Доставки:</span>
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus ducimus
              eligendi exercitationem hic impedit iste molestiae neque non possimus, quibusdam quis
              rem similique soluta velit veritatis voluptate! Labore, quia.
            </span>
            <br />
            <img src="https://odejdaizkirgizii.ru/images/map_dostavka.jpg" alt="" />
          </div>
          <div className="cities-list">
            <span className="title">
              Мы делаем доставку Одежды из Киргизии в более чем 300 городов России, Казахстана,
              Беларусь.
            </span>
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laboriosam molestiae
              totam! Ab ad aut, consectetur deleniti incidunt iste libero nemo nostrum omnis placeat
              praesentium quasi repellendus repudiandae rerum voluptatibus! A ad amet animi
              consectetur distinctio doloremque doloribus eos, eum id illum impedit iusto, magni
              maiores modi necessitatibus, nisi nostrum odit optio porro quae qui quisquam repellat
              sequi soluta sunt suscipit ut vel velit veritatis voluptatum! A aliquam libero magnam
              nisi quam voluptatum. Aut doloribus ducimus est eveniet expedita illum impedit, iure
              non praesentium quas quibusdam quis reprehenderit rerum? Commodi consectetur, delectus
              deleniti eligendi enim expedita fuga fugit illum inventore iste laborum molestiae
              mollitia necessitatibus nisi quaerat quasi quibusdam quidem quis quod sed velit
              voluptate voluptates. Aliquid animi debitis dolorum error, esse, excepturi fuga illum
              ipsa maiores natus odit rerum saepe vel veniam, voluptatibus? Aliquid amet culpa
              cupiditate dolor dolorem doloribus magnam, optio provident quod similique sint sit
              sunt totam.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Delivery
