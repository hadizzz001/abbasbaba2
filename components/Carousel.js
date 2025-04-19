"use client";

import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [bannerUrl, setBannerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = () => {
      fetch("/api/banner")
        .then((response) => response.json())
        .then((data) => {
          if (data[0]?.img && data[0].img.length > 0) {
            setBannerUrl(data[0].img[0]);
          } else {
            setError("No banner image available");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch banner:", error);
          setError("Failed to fetch banner");
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    fetchBanner();
  }, []);
  
 

  return (
    <div className=" mt-1">
      <div className=" ">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {bannerUrl ? (
          <img
  src={bannerUrl}
  alt="Banner"
  id="bannerid"
  style={{ width: "100%", height: "25vh", objectFit: "cover" }}
/>



        ) : (
          !loading && !error && <p>No banner available</p>
        )}
      </div>
    </div>
  );
};

export default MyComponent;
