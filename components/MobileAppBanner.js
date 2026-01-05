import { useState, useEffect } from "react"; 

export default function MobileAppBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const bannerClosed = localStorage.getItem("appBannerClosed");
    if (!bannerClosed) {
      setIsVisible(true);
    }
    }
  }, []);

  const handleClose = () => {
    if (typeof window !== 'undefined') {
    setIsVisible(false);
    localStorage.setItem("appBannerClosed", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <>
     
        <div
      className="fixed bottom-0 left-0 right-0 z-50 shadow-lg"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-6 bg-white/80 backdrop-blur-sm">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-red-600 text-4xl font-extrabold hover:text-red-800 transition"
          aria-label="Close"
        >
          ×
        </button>

        {/* Text */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
          Get our app for Android
        </h2>

        {/* Store Icons */}
        <div className="flex gap-6 items-center justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.alihadimedlej001.AbbasBabaMobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14 md:h-16 hover:scale-105 transition-transform"
            />
          </a>

          {/* <a
            href="https://play.google.com/store/apps/details?id=com.alihadimedlej001.AbbasBabaMobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14 md:h-16 hover:scale-105 transition-transform"
            />
          </a> */}
        </div>
      </div>
    </div>
    </>

  );
}
