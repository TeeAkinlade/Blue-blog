import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, error} = useFetch('http://localhost:6050/blogs')
  
  return ( 
    <div className="home">
      {error && <div> {error} </div>}
      {blogs && <BlogList 
       blogs={blogs}
       titles ='All Blogs'
      />}
    </div>  
   );
}
 
export default Home;