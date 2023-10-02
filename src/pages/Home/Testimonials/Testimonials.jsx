import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

function Testimonials() {
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data=>setReviews(data))
    },[]);
  return (
    <section className="my-20">
        <SectionTitle
        subHeading='What our client say'
        heading='Testimonials'
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review=><SwiperSlide
                key={review._id}
                >
              <div className="my-16 mx-24 flex flex-col items-center">
              <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
                    </SwiperSlide>)
            }
            
      </Swiper>
    </section>
  )
}

export default Testimonials;