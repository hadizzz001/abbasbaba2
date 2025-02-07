import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CarCard from './CarCard'; // Ensure this component exists

const YourComponent = () => {
    const [categories, setCategories] = useState([]);
    const [allTemps, setAllTemps] = useState({}); // Stores products per category

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/category');
            if (response.ok) {
                const categoryData = await response.json();
                setCategories(categoryData);
                fetchProducts(categoryData);
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchProducts = async (categories) => {
        try {
            const productsByCategory = {};

            await Promise.all(
                categories.map(async (category) => {
                    const categoryId = category.name; // Adjust based on API response
                    const response = await fetch(`/api/products1/${categoryId}`);

                    if (response.ok) {
                        const data = await response.json();
                        productsByCategory[categoryId] = data;
                    } else {
                        console.error(`Failed to fetch products for category: ${categoryId}`);
                        productsByCategory[categoryId] = [];
                    }
                })
            );

            setAllTemps(productsByCategory);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    console.log("allTemps ", allTemps);


    return (
        <div className="ProvidersIfSelectedProductMatchesFilter">

            <content-block slug="product-page-wssb">
                <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL">

                    {allTemps && Object.keys(allTemps).length > 0 ? (
                        Object.keys(allTemps).map((category) => (
                            <>

                                <style dangerouslySetInnerHTML={{
                                    __html: ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center; }  "
                                }} />






                                <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL" data-product-list-category="ymal-slider">

                                    <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333] mt-[5em]">
                                        {category}
                                    </div>

                                    {allTemps[category].length > 0 ? (
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
                                                <div className="home__cars-wrapper">
                                                    {allTemps[category].map((temp) => (
                                                        <SwiperSlide key={temp.id}>
                                                            <CarCard temp={temp} />
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                            </Swiper>
                                        </section>



                                    ) : (
                                        <p>No products available in {category}</p>
                                    )}
                                </div>
                            </>
                        ))
                    ) : (
                        <div className="home___error-container">
                            <h2 className="text-black text-xl font-bold">No products available</h2>
                        </div>
                    )}
                </div>

            </content-block>
        </div>
    );
};

export default YourComponent;
