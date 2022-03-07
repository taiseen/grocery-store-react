import { data } from '../../constants';
import "./Categories.scss"


const CategoryBox = ({ category: { img, category, speech } }) => (
  <div className="categoryBox">
    <img src={img} alt="" />
    <h3>{category}</h3>
    <p>{speech}</p>
    <a href="/#" className="btn">shop now</a>
  </div>
)



const Categories = () => {

  return (
    <section className="categories" id='categories'>
      <h1 className="heading"> our <span>categories</span> </h1>

      <div className="box-container">
        {
          data.categoriesBox.map(category => (
            <CategoryBox key={category.id} category={category} />
          ))
        }
      </div>
    </section>
  )
}

export default Categories;