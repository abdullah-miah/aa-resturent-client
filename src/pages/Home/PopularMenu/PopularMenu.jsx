import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem";


function PopularMenu() {
    const [menu, setMenu]= useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    }
        
        ,[])
  return (
    <section className="mb-12">
        <SectionTitle
        heading="From our Menu"
        subHeading="Popular Items"
        >
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item=> <MenuItem
                key={item._id}
                item={item}
                >
                
                </MenuItem>)
            }
        </div>
        <div className="flex justify-center items-center mt-4 ">
        <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menue</button>
        </div>
    </section>
  )
}

export default PopularMenu;