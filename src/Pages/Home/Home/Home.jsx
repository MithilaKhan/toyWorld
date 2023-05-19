
import Gallery from '../../Gallery/Gallery';
import Reviews from '../../Reviews/Reviews';
import Banner from './Banner/Banner';


const Home = () => {
   return (
      <div>
        <Banner/>
        {/* Gallery section  */}
        <div className='pt-12'>
 <h1 className='text-center italic text-4xl text-rose-600 font-bold'>Disney Princess gallery</h1>
        </div>
       <Gallery/>

       {/* customer review  */}
       <div className='pt-12'>
       <h1 className='text-center italic text-4xl text-rose-600 font-bold'>Customer Review</h1>
       <Reviews/>
       </div>
        <h1 className='text-5xl font-bold text-purple-600'>this is home</h1> 
      
      </div>
   );
};

export default Home;