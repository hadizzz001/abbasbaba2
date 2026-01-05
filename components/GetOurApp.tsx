import Image from "next/image";

export default function GetOurApp() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#f9fafb",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap", // allow wrapping on small screens
        }}
      >
        {/* Column 1: Image */}
        <div
          style={{
            flex: "0 0 auto",
            width: "100%", // full width on mobile
            maxWidth: "300px", // cap width on larger screens
            marginBottom: "1rem",
          }}
        >
          <img
            src="https://res.cloudinary.com/di6nzrtn3/image/upload/v1767641392/shopping-online-store-for-sale-mobile-ecommerce-3d-blue-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-store-online-device-3d-rendered-free-vector_hqazkl.jpg"
            alt="Mobile shopping app"
            width={300}
            height={300}
            style={{
              borderRadius: "0.5rem",
              objectFit: "cover",
              width: "100%", // responsive image
              height: "auto",
            }}
          />
        </div>

        {/* Column 2: Text + Button */}
        <div
          style={{
            flex: "1 1 0",
            textAlign: "left",
            width: "100%", // full width on mobile
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "0.5rem",
            }}
          >
            Get Our Mobile App Now
          </h2>

          <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
            Shop faster and easier by downloading our mobile app today.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.alihadimedlej001.AbbasBabaMobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{
                height: "3.5rem", // default height
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
