import { Link } from 'react-router-dom'

const BlogList = ({blogs, titles}) => {
  return ( 
    <div className="blog-preview">
      <h2>{titles}</h2>

        {blogs.map((blog) => (
       <div className="preview" key={blog.id}>
          <Link to={ `/blogs/${blog.id}`}>
          <h2>{ blog.title}</h2>
         <p style={{color: 'tomato'}}>Written by {blog.author}</p>
         <p className="blogDate">{blog.datetime}</p>
         <div className='bodyStyle'>{
              blog.body.length <=50 ? blog.body: `${(blog.body).slice(0, 55)}...`
              }</div>
          </Link>
       </div>
     ))
      }
      
    </div>
   );
}
 
export default BlogList;