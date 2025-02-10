import React, { useEffect, useState } from "react";

const Catslider = () => {
  const [checkboxesData, setCheckboxesData] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        setCheckboxesData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);



  return (
    <div className="w-full flex flex-col py-1 space-y-2 px-3 ">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .no-scrollbar::-webkit-scrollbar {\n  display: none; /* Hide scrollbar for Chrome, Safari, and Edge */\n}\n\n.no-scrollbar {\n  -ms-overflow-style: none;  /* Hide scrollbar for Internet Explorer and Edge */\n  scrollbar-width: none;  /* Hide scrollbar for Firefox */\n}\n"
        }}
      />

      <div className="flex flex-row w-full flex-1 overflow-x-scroll no-scrollbar justify-start space-x-2">
        <div className="w-fit flex-row flex">
          {checkboxesData.length > 0 ? (
            checkboxesData.map((category) => (
              <a
                href={`/search?cat=${category.name}`}
              >
                <div
                  key={category.id}
                  className="flex w-[13em] h-[7em] bg-white text-black px-1 rounded-md text-xs self-center text-left text-wrap font-semibold align-middle m-2"
                >
                  <p className="text-left text-wrap m-auto align-middle self-center text-xs">
                    {category.name}
                  </p>
                  <div className="flex justify-center items-center ">
                    <img
                      src="api/proxy?url=https://ucarecdn.com/48b3456b-c5fe-4ef4-a177-c6a8a8ac1d2d/Hbbb9275db1bf486f817888c71159bfedbjpg_720x720q50.jpg"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>

                </div>
              </a>
            ))
          ) : (
            <p className="text-gray-500">Loading categories...</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default Catslider