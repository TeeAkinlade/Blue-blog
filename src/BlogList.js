import { Link } from 'react-router-dom'

const BlogList = ({blogs, titles}) => {
  return ( 
    <div className="blog-preview">
      <h2>{titles}</h2>
      {blogs.map((blog) => (
       <div className="preview" key={blog.id}>
          <Link to={ `/blogs/${blog.id}`}>
          <h2>{ blog.title}</h2>
         <p>Written by {blog.author}</p>
          </Link>
       </div>
     ))} 
    </div>
   );
}
 
export default BlogList;