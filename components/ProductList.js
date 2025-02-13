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

 


    return (
        <div className="ProvidersIfSelectedProductMatchesFilter mt-4">

{allTemps && Object.keys(allTemps).length > 0 ? (
    Object.keys(allTemps)
        .filter(category => category !== "Hot Sale") // Exclude "Hot Sale"
        .map((category) => (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center; }"
                }} />

                <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL px-3" data-product-list-category="ymal-slider">
                    <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]" style={{ textAlign: "left", fontSize: "1.3em", fontWeight: "bold", fontFamily: 'Manrope' }}>
                        {category}
                        <span style={{ position: "absolute", right: "1em" }}>
                            <svg
                                fill="#000000"
                                viewBox="0 0 24 24"
                                id="right-arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon line"
                                width={42}
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        id="primary"
                                        d="M3,12H21m-3,3,3-3L18,9"
                                        style={{
                                            fill: "none",
                                            stroke: "#000000",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5"
                                        }}
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>

                    {allTemps[category].length > 0 ? (
                        <section className='mb-5' style={{ maxWidth: "100%" }}>
                            <Swiper spaceBetween={5} loop breakpoints={{
                                150: { slidesPerView: 3 },
                                768: { slidesPerView: 6 },
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
    );
};

export default YourComponent;
