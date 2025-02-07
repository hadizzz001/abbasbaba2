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
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="shrink-0 w-9 h-9 align-middle self-center flex m-auto"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z" />
                  </svg>
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