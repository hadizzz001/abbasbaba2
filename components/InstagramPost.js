"use client";

import React, { useState, useEffect } from "react";

const InstagramPost = () => {
  const [postLink, setPostLink] = useState(null);

  useEffect(() => {
    const fetchInstagramPost = async () => {
      try {
        // Fetch data from the API using the native fetch function
        const response = await fetch("/api/social/Insta");

        // Check if the response is successful (status 200)
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram data");
        }

        // Parse the JSON response
        const data = await response.json();

        // Assuming the response contains the link in data[0].link
        const link = data[0]?.link;

        if (link) {
          setPostLink(link);
        } else {
          console.error("No link found in the response");
        }
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchInstagramPost();
  }, []);

  return (
    <div className="flex justify-center">
      {postLink ? (
        <iframe
          src={`https://www.instagram.com/p/${postLink.split('/')[4]}/embed`}
          width="328"
          height="600"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Instagram Post"
        ></iframe>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default InstagramPost;
