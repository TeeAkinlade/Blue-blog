// import img from "./4777466.webp"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>page cannot be found</p>
      <Link to="/">
        <p>click to go to HomePage....</p>
      </Link>
      {/* <img src={img} alt="image" /> */}
    </div>
   );
}
 
export default NotFound;