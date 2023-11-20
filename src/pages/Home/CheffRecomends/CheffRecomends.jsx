import SectionTitle from "../../../components/SectionTitle";
import salads from '../../../assets/home/slide1.jpg'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function CheffRecomends() {
  
  return (
    <section>
        <SectionTitle 
        subHeading="Should Try"
        heading={'cheff recomends'}
        ></SectionTitle>
        <div className="lg:grid gap-4 grid-cols-3 gap-4  lg:ml-4">
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
     <Link to='/order/salad'>
     <button className="btn btn-outline btn-warning">  <FaShoppingCart/> Add To cart</button>
     </Link>
    </div>
  </div>
</div>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
    <Link to='/order/salad'> 
   
    <button className="btn btn-warning">  <FaShoppingCart/> Add To cart</button>
    </Link>
    </div>
  </div>
</div>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
    <Link to='/order/salad'> 
    <button className="btn btn-outline btn-warning">  <FaShoppingCart/> Add To cart</button>
    </Link>
    </div>
  </div>
</div>
  
        </div>
    </section>
  )
}

export default CheffRecomends;