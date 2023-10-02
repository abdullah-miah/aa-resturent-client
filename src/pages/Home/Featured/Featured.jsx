import SectionTitle from "../../../components/SectionTitle";
import fetutrdImg from '../../../assets/home/featured.jpg'
import './Featured.css';

function Featured() {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
     <SectionTitle
     subHeading='Check it out'
     heading= 'Featured Item'
     ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36 ">
        <div>
            <img src={fetutrdImg}></img>
        </div>
        <div className="md:ml-10">
            <p className="uppercase">Aug 20, 2023</p>
            <p  className="uppercase"> where i get some</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga perferendis facere itaque ad quisquam dicta unde dolore,
                 distinctio blanditiis atque recusandae similique ratione doloremque 
                 delectus iure quia a qui neque!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga perferendis facere itaque ad quisquam dicta unde dolore,
                 distinctio blanditiis atque recusandae similique ratione doloremque 
                 delectus iure quia a qui neque!
                 </p>
                 <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;