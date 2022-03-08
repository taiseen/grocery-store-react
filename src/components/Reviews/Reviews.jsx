import { data } from '../../constants';
import "./Reviews.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import "swiper/scss/pagination";


const ReviewBox = ({ review: { img, name, review } }) => (
  <div className="reviewBox">
    <img src={img} alt="" title={name} />
    <p>{review}</p>
    <h3>{name}</h3>
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

const Reviews = () => {

  return (
    <section className="reviews" id='reviews'>

      <h1 className="heading"> our <span>Reviews</span> </h1>

      <Swiper
        className="review-slider"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 30000,
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
        {
          data.reviewBox.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewBox review={review} />
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  );
}

export default Reviews;