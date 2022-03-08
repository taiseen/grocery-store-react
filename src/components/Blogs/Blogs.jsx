import { data } from '../../constants';
import "./Blogs.scss"


const BlogBox = ({ blog: { img, title, post, user, date } }) => (

  <div className="blogBox">

    <img src={img} alt="" title={title} />
    <div className="content">
      <div className="icons">
        <a href="/#"> <i className="fas fa-user"></i> by {user}</a>
        <a href="/#"> <i className="fas fa-calendar"></i> {date}</a>
      </div>
      <h3>{title}</h3>
      <p>{post}</p>
      <a href="/#" className="btn">read more</a>
    </div>

  </div>
);


const Blogs = () => {

  return (
    <section className="blogs" id='blogs'>

      <h1 className="heading">our <span>blogs</span></h1>

      <div className="blog-container">
        {
          data.blogBox.map(blog => (
            <BlogBox key={blog.id} blog={blog} />
          ))
        }
      </div>

    </section>
  )
}

export default Blogs;