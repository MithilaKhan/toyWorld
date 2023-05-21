
import UseTitle from '../../../useTitle';
import Gallery from '../../Gallery/Gallery';
import Reviews from '../../Reviews/Reviews';
import ShopBy from '../ShopBy/ShopBy';
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

       {/* shop By Bands  */}
       <div className='mt-20'>
       <h1 className='text-center italic p-9 text-4xl text-rose-600 font-bold'> Shop by Bands</h1>
       <ShopBy/>
       </div>
       
      
      </div>
   );
};

export default Home;