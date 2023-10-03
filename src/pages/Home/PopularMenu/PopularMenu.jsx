import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


function PopularMenu() {

    const [menu]= useMenu();
    const popular = menu.filter(item=>item.category === 'popular')
    
  return (
    <section className="mb-12">
        <SectionTitle
        heading="From our Menu"
        subHeading="Popular Items"
        >
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular.map(item=> <MenuItem
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