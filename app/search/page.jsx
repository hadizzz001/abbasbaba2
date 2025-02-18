"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'



const Body = () => {
    const [allTemp, setTemp] = useState()
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    const search2 = searchParams.get('cat')
    const search3 = searchParams.get('brnd')
    const [isCodeValid, setIsCodeValid] = useState(false);

    useEffect(() => {
      // Check localStorage for the code
      const storedCode = localStorage.getItem("accessCode");
      if (storedCode === "abcd12345") {
        setIsCodeValid(true);
      }
    }, []);
  
   








    useEffect(() => {
        const fetchCategories = async () => {
            try {
                if (search2) {
                    if(search2 =="yes"){
                        const response = await fetch(`/api/products5`);
                        const data = await response.json();
                        setTemp(data);
                    }
                    else{
                        const response = await fetch(`/api/products1/${search2}`);
                        const data = await response.json();
                        setTemp(data);
                    }
                    
                }
                else if (search) {
                    const response = await fetch(`/api/products3/${search}`);
                    const data = await response.json();
                    setTemp(data);
                }
                else if (search3) {
                    const response = await fetch(`/api/products4/${search3}`);
                    const data = await response.json();
                    setTemp(data);
                } 
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);









    return (


        <>











            <div className="br_min-h-screen br_relative">

                <header className="br_text-grey-600 br_bg-grey-100 br_p-3 br_pt-11 md:br_py-20 br_flex md:br_justify-center">
                    <div className="br_text-left md:br_max-w-[600px] lg:br_max-w-[800px] md:br_text-center br_flex br_flex-col br_gap-2  md:br_gap-4 md:br_items-center">
                        <h1 className="br_text-3xl-serif md:br_text-4xl-serif initial:br_text-grey-600">
                            Are you looking for one of these?
                        </h1>
                    </div>
                </header>
                <div className="br_flex">






                    <div className="br_flex-1">





                        <div className="br_@container">
                            <div
                                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))]"

                            >








                                {allTemp && allTemp?.length > 0 ? (
                                    allTemp.map((item) => (

                                        <div
                                            className="br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]"
                                        >
                                            <div className="Layout br_contents">
                                                <span className="br_contents br_edition-">
                                                    <div className="br_grid br_grid-cols-1 br_grid-rows-[auto_auto_1fr_auto] supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]  initial:br_text-grey-600 apex:br_bg-[#4e4e4e] apex:br_text-white br_gap-2 br_pb-3 br_group/tile br_relative">
                                                        <div className="initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative">
                                                            <div className="br_aspect-[4/5] sm:br_aspect-square">
                                                                <div className="br_w-full br_h-full br_relative br_flex br_items-center br_justify-center">
                                                                    <img
                                                                        className="br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4"
                                                                        loading="lazy"
                                                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw"
                                                                        src={"" + item.img[0]}
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ textAlign: "center" }} className="initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center">
                                                            <h3 className="br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300">
                                                                <a
                                                                    href={`/product?id=${item._id}&&imgg=${item.img[0]}`}
                                                                    className="br_text-current br_no-underline"
                                                                    id='anchorNew'
                                                                >
                                                                    {item.title}
                                                                    <span className="br_absolute br_inset-0 br_z-10" aria-hidden="true" />
                                                                </a>
                                                            </h3>
                                                            <div className="br_text-base-sans-bold-spaced br_text-grey-600 br_inline-flex br_flex-wrap br_gap-x-2 br_items-baseline apex:br_text-white group-[.centered]/tile:br_justify-center">
                                                                {item.category}
                                                            </div>
                                                            <br />
                                                            <div className="br_text-base-sans-bold-spaced br_text-grey-600 br_inline-flex br_flex-wrap br_gap-x-2 br_items-baseline apex:br_text-white group-[.centered]/tile:br_justify-center">
                                                                {item.type}
                                                            </div>
                                                            <br />
                                                          


                                                            {!isCodeValid ? (
                                                                <span></span>
                                                            ) : (
                                                                <div className="br_text-base-sans-bold-spaced br_text-grey-600 br_inline-flex br_flex-wrap br_gap-x-2 br_items-baseline apex:br_text-white group-[.centered]/tile:br_justify-center">
                                                                    ${item.price}
                                                                </div>
                                                            )}








                                                        </div>

                                                    </div>
                                                </span>
                                            </div>
                                        </div>

                                    ))
                                ) : (

                                    <div className='container'>
                                        <h2 className='text-black text-xl dont-bold'>Nothing found...</h2>

                                    </div>

                                )

                                }















                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>

            </div>








        </>








    )
}

export default Body