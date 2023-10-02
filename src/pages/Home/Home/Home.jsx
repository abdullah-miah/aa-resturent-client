import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


function Home() {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
    </div>
  )
}

export default Home;