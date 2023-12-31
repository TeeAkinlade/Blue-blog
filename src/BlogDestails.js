import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDestails = () => {
  const { id } = useParams();
  const {data: blog, error} = useFetch('http://localhost:6050/blogs/' + id)
  const history = useHistory()

  const handleDelete = () =>{
    fetch('http://localhost:6050/blogs/' + blog.id, {
      method:'DELETE',
    }).then(() => {
      history.push('/')
    })

  }

  return (
    <div className="blog-details">
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p className="blogDate">Posted on: {blog.datetime}</p>
            <p>{blog.author}</p>
            <div className='bodyStyle'>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
            )}
    </div>
  )
}

export default BlogDestails