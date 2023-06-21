import { useState } from "react";
import { useHistory} from 'react-router-dom'
import { format } from 'date-fns'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const blog = {title, datetime, author, body}

    fetch('http://localhost:6050/blogs',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() =>{
      history.push('/')
    })
  }

  return ( 
    <div className="create">
      <h2>Create a new Blog</h2>
      <form onSubmit={handleSubmit}>
      <label> Blog title:</label>
      <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label> Blog body:</label>
      <textarea
       required
       value={body}
       onChange={(e)=>  setBody(e.target.value
       )} 
      />
      <label> Blog author:</label>
      <input
       type="text" 
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
       />
       <button type="submit"> Add blog</button>
      </form>
    </div>
   );
}
 
export default Create;