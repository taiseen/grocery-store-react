import { images } from '../../constants';
import './Footer.scss';


const Footer = () => {

  return (


    <section className="footer">

      <div className="footer-container">

        <div className="box">
          <h3><i className="fas fa-shopping-basket"></i> groso </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem.</p>
          <div className="share">
            <a href="/#" > <i className="fab fa-facebook"></i> </a>
            <a href="/#" > <i className="fab fa-instagram"></i> </a>
            <a href="/#" > <i className="fab fa-twitter"></i> </a>
            <a href="/#" > <i className="fab fa-linkedin"></i> </a>
            <a href="/#" > <i className="fab fa-whatsapp"></i> </a>
            <a href="/#" > <i className="fab fa-pinterest"></i> </a>
          </div>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="/#" className="links"><i className="fas fa-phone"></i>+880 1717 416 412</a>
          <a href="/#" className="links"><i className="fas fa-envelope"></i>taiseen.cse@gamil.com</a>
          <a href="/#" className="links"><i className="fas fa-map-marker-alt"></i>Dhaka, Bangladesh</a>
        </div>


        <div className="box">
          <h3>Quick Links</h3>
          <a href="/#home" className="links"><i className="fas fa-arrow-right"></i> home </a>
          <a href="/#features" className="links"><i className="fas fa-arrow-right"></i> features</a>
          <a href="/#products" className="links"><i className="fas fa-arrow-right"></i> products </a>
          <a href="/#categories" className="links"><i className="fas fa-arrow-right"></i> categories </a>
          <a href="/#reviews" className="links"><i className="fas fa-arrow-right"></i> reviews </a>
          <a href="/#blogs" className="links"><i className="fas fa-arrow-right"></i> blog </a>
        </div>


        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type="email" placeholder="your email" className="email" />
          <input type="submit" value="subscribe" className="btn" />
          <img src={images.payment} alt="" className="payment" />
        </div>

      </div>



      <div className="credit">
        created by <span>taiseen</span> | all rights reserved.
      </div>
    </section>
  )
}

export default Footer