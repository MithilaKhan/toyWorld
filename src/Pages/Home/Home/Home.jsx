
import UseTitle from '../../../useTitle';
import Gallery from '../../Gallery/Gallery';
import Reviews from '../../Reviews/Reviews';
import SubCategories from '../SubCategories/SubCategories';
import Banner from './Banner/Banner';


const Home = () => {
  UseTitle("Home")

   return (
      <div>
        <Banner/>
        {/* Gallery section  */}
        <div className='pt-12'>
 <h1 className='text-center italic text-4xl text-rose-600 font-bold'>Disney Princess gallery</h1>
        </div>
       <Gallery/>

       <div className='mt-20'>
       <h1 className='text-center italic p-9 text-4xl text-rose-600 font-bold'> Shop by Category</h1>
         <SubCategories/>
       </div>

        {/* customer review  */}
        <div className=''>
       <h1 className='text-center italic text-4xl text-rose-600 font-bold'>Customer Review</h1>
       <Reviews/>
       </div>
        <h1 className='text-5xl font-bold text-purple-600'>this is home</h1> 
      
      </div>
   );
};

export default Home;