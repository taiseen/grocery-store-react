import { data } from '../../constants';
import "./Products.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import "swiper/scss/pagination";
import 'swiper/scss/navigation';


const ProductBox = ({ product: { img, title, price } }) => (
  <div className="productBox slide-content">
    <img src={img} alt="" />
    <h3>{title}</h3>
    <div className="price">{`$${price[0]}/- >>> $${price[1]}/-`}</div>
    <div className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
    <a href="/#" className="btn">add to cart</a>
  </div>
)

const Products = () => {

  return (
    <section className="products" id='products'>
      <h1 className="heading"> our <span>products</span> </h1>

      {/* Half Data Slide Here */}
      <Swiper
        className="mySwiper product-slider"
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {
          data.productBox.slice(0, 5).map((product, i) => (
            <SwiperSlide key={i} className="slide">
              <ProductBox product={product} />
            </SwiperSlide>
          ))
        }

      </Swiper>












      {/* & Half Data Slide Here */}
      <Swiper
        className="mySwiper product-slider"
        dir="rtl"
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <div className="wrapper">
          {
            data.productBox.slice(5, 11).map((product, i) => (
              <SwiperSlide key={i} className="slide">
                <ProductBox product={product} />
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>

    </section >
  )
}

export default Products;