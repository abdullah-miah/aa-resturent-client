import BistroBoss from "../../../components/BistroBoss";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


function Home() {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home;