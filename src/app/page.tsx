import AllProducts from '@/components/AllProducts';
import Hero from '@/components/Hero';
import PriceDecrease from '@/components/PriceDecrease';
import PriceIncrease from '@/components/PriceIncrease';



const HomePage = () => {
  return (
    <div >
      <Hero/>
      <PriceIncrease/>
      <PriceDecrease/>
      <AllProducts/>

    </div>
  );
};

export default HomePage;