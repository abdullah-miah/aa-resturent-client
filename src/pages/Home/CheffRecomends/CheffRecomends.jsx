import SectionTitle from "../../../components/SectionTitle";
import salads from '../../../assets/home/slide1.jpg'

function CheffRecomends() {
  return (
    <section>
        <SectionTitle 
        subHeading="Should Try"
        heading={'cheff recomends'}
        ></SectionTitle>
        <div className="md:grid grid-cols-3 gap-2 ml-4">
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-warning">Add To cart</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
      <button className="btn btn-active btn-neutral text-white">Add To cart</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full h-80" src={salads} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl">Caeser Salad</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti!</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-warning mt-4">Add To cart</button>
    </div>
  </div>
</div>
  
        </div>
    </section>
  )
}

export default CheffRecomends;