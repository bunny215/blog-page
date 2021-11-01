
import  Bloglist from './Bloglist';
import useFetch from './usefetch';
const Home = () => {
   const{data:blogs,ispending,error}=useFetch('http://localhost:8000/blogs');
    
      return (
        <div className='home'>
          {error && <div>{error}</div>}
          {ispending && <div>Loading...</div>}
           
          {blogs &&<Bloglist blogs = {blogs}   /> }
          

        </div>
     );
}
 
export default Home;