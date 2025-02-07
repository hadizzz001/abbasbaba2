import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CarCard1 from './CarCard1'; // Ensure this component exists

const YourComponent = () => {
  const [allTemp2, setAllTemps2] = useState(); // Stores products per category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/brand");
        const data = await response.json();
        setAllTemps2(data);
      } catch (error) {
        console.error("Error fetching the description:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <span className="ProvidersIfSelectedProductMatchesFilter">
      <content-block slug="product-page-wssb">
 
        <style dangerouslySetInnerHTML={{
          __html: ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;padding-bottom:10px} "
        }} />
        <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL" data-product-list-category="ymal-slider">
          <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]">You might also like:</div>
          {allTemp2 && allTemp2?.length > 0 ? (
            <section style={{ maxWidth: "100%" }}>
              <Swiper spaceBetween={50} loop modules={[Autoplay]} autoplay={{
                delay: 2000,
                stopOnLastSlide: false,
                reverseDirection: true
              }} breakpoints={{
                150: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}>
                <div className='home__cars-wrapper'>
                  {allTemp2.map((temp) => (
                    <SwiperSlide key={temp.id}><CarCard1 temp={temp} /></SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </section>
          ) : (
            <div className='home___error-container'>
              <h2 className='text-black text-xl dont-bold'>...</h2>
            </div>
          )}
        </div>
      </content-block>
    </span>
  );
};

export default YourComponent;
