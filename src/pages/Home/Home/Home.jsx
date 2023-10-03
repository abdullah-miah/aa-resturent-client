import { Helmet } from "react-helmet-async";
import BistroBoss from "../../../components/BistroBoss";
import CallUs from "../../../components/CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CheffRecomends from "../CheffRecomends/CheffRecomends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


function Home() {
  return (
    <div>
       <Helmet>
        <title>aA Boss | Home</title>
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <CheffRecomends></CheffRecomends>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home;