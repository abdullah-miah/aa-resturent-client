import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

function Menu() {
  return (
    <div>
        <Helmet>
        <title>aA Boss | Menu</title>
      </Helmet>
      <Cover 
      img={menuImg}
      title="our menu"
      ></Cover>
      
    </div>
  )
}

export default Menu;