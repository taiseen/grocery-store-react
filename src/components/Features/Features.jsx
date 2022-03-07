import { data } from '../../constants';
import "./Features.scss"


const FeaturesBox = ({ feature: { img, title, para } }) => (
  <div className="featuresBox">
    <img src={img} alt="" />
    <h3>{title}</h3>
    <p>{para}</p>
    <a href="/#" className="btn">read more</a>
  </div>
)

const Features = () => {

  return (
    <section className="features" id='features'>

      <h1 className="heading">our <span>features</span> </h1>

      <div className="box-container">
        {
          data.featuresBox.map((feature, i) => (
            <FeaturesBox
              key={i}
              feature={feature}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Features;