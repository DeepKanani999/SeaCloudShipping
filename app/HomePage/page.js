"use client";
import ListingDetailsRight from "@/components/ListingDetailsRight";
import VideoPopup from "@/components/VideoPopup";
import Layout from "@/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "@/sliderProps";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../../styles/style.css";
import { products } from "@/products";
import BottomTab from "@/components/BottomBar";
import UserInfoPopup from "@/components/userDetailPopup";

const heroImages = [
  "/assets/images/Hero-Banner/sea-cloud-hero-banner-1.jpg",
  "/assets/images/Hero-Banner/sea-cloud-hero-banner-2.jpg",
  "/assets/images/Hero-Banner/sea-cloud-hero-banner-3.jpg",
];

const populerSearches = [
  "Sea Cloud Shipping Services reviews",
  "Best shipping company for bulk cargo",
  "Sea Cloud freight tracking",
  "Sea Cloud container shipping rates",
  "Sea Cloud international routes",
  "Sea Cloud Shipping vs competitors",
  "Sea Cloud marine logistics",
  "Top Ocean freight companies",
  "Affordable Sea cargo services",
  "Sea Cloud cargo insurance",
  "Eco-friendly shipping services",
  "Sea freight vs air freight",
  "Sea Cloud customer testimonials",
  "Sea Cloud ship schedule",
  "Reliable shipping services for businesses",
  "Door-to-port shipping Sea Cloud",
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500, // 3.5 seconds
  fade: false,
  responsive: [
    {
      breakpoint: 768, // mobile and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const storyItems = [
  { id: 1, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 2, type: "image", src: "/assets/images/Story/story1.jpg" },
  { id: 3, type: "video", src: "/assets/images/Story/story4.mp4" },
  { id: 4, type: "image", src: "/assets/images/Story/story2.jpg" },
  { id: 5, type: "video", src: "/assets/images/Story/story3.mp4" },
  { id: 6, type: "image", src: "/assets/images/Story/story2.jpg" },
];

export function SocialStoriesSection() {
  return (
    <div>
      <h4
        className="title"
        style={{ marginBottom: "20px", marginLeft: "10px" }}
      >
        Reels
      </h4>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollbarWidth: "none",
          width: "100%",
          height: "300px", // Adjust as needed
        }}
      >
        {storyItems.map((item) => (
          <div
            key={item.id}
            style={{
              flex: "0 0 auto",
              width: "175px",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#f0f0f0",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Story ${item.id}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                controls
                autoPlay
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What services does Sea Cloud Shipping offer?",
    answer:
      "Sea Cloud Shipping Services provides comprehensive maritime logistics, including container shipping, bulk cargo transport, freight forwarding, and customs clearance.",
  },
  {
    question: "Which destinations does Sea Cloud Shipping cover?",
    answer:
      "We offer domestic and international shipping across major ports worldwide, ensuring global reach with reliable transit schedules.",
  },
  {
    question: "Can Sea Cloud handle both small and large shipments?",
    answer:
      "Yes, we manage shipments of all sizes—from small LCL (Less than Container Load) to full FCL (Full Container Load) and bulk cargo.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "You can track your cargo in real-time through our online tracking portal using your unique shipment ID.",
  },
  {
    question:
      "Does Sea Cloud Shipping handle documentation and customs clearance?",
    answer:
      "Absolutely. We offer end-to-end logistics, including all required paperwork, customs clearance, and regulatory compliance.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <div className="mb-20 px-6 md:px-16 py-10">
      <h4
        className="title"
        style={{ marginBottom: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        Frequently Asked Questions
      </h4>
      <div className="space-y-6" style={{ marginLeft: "10px" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{ borderRadius: 20 }}
            className="border my-2 border-gray-300 rounded-lg bg-white transition duration-300"
          >
            <button
              className="w-full flex items-center justify-between text-left pl-4 py-3 md:p-6 text-lg md:text-xl font-bold bg-white rounded-2xl"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="flex-1">{faq.question}</span>
              <span className="text-3xl ml-4" style={{ color: "#00ADEE" }}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && faq.answer && (
              <div className="px-4 md:px-6 py-2 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const HomeScreen = () => {
  const [showBar, setShowBar] = useState(false);
  const [requirementInput, setRequirementInput] = useState("");
  const [video, setVideo] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      // Intercept the event and store it
      e.preventDefault();
      setDeferredPrompt(e);
      console.log("✅ beforeinstallprompt event captured");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleAddToHomeScreen = async () => {
    if (!deferredPrompt) {
      console.log("⚠️ Install prompt not available");
      return;
    }

    // Show the prompt
    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;
    console.log("👉 User response:", result.outcome);

    if (result.outcome === "accepted") {
      console.log("✅ User accepted the install prompt");
    } else {
      console.log("❌ User dismissed the install prompt");
    }

    // Clear the saved prompt since it can't be used again
    setDeferredPrompt(null);
  };

  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () => {
    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    // Check screen width
    const isMobileScreen = window.innerWidth <= 768;

    // Check if device has touch capability
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isMobileUserAgent || (isMobileScreen && hasTouchScreen);
  };

  useEffect(() => {
    // Initial check
    setIsMobile(isMobileDevice());

    // Add resize listener
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const isScrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st;

      if (isScrollingDown && window.innerWidth >= 768) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+918200397854"; // Replace with your number
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/oW5k4Sjo3cM1GAZ19", "_blank");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "918200397854"; // Replace with your number
    const defaultMessage = `Hi, I'm interested in your services. Could you please provide more details?`;

    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleMail = () => {
    window.location.href = "mailto: info@seacloudshipping.com"; // Replace with your email
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/", "_blank");
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check this out!",
          text: "Have a look at this amazing website.",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const getPrice = (product) => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (isMobile) {
      const phoneNumber = "918200397854";
      const imageUrl = `https://www.seacloudshipping.com/${product?.image}`;

      // Create a message with product details and image URL
      const message = `*Product Inquiry*

  ${imageUrl}
  
  *service Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  
  Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    } else {
      if (!userInfo) {
        setIsPopupOpen(true); // Open the popup if session data is not available
      } else {
        const phoneNumber = "918200397854";
        const imageUrl = `https://www.seacloudshipping.com/${product?.image}`;

        // Create a message with product details and image URL
        const message = `*Product Inquiry*

  ${imageUrl}
  
  *service Details:*
  • Name: ${product?.name}
  • Description: ${product?.detail}

  *Usability:*
  ${product?.usability?.map((use) => `• ${use}`).join("\n")}
  
  *Specifications:*
  ${product?.specification?.map((spec) => `• ${spec}`).join("\n")}
  
  Please provide information about:
  • Current price
  • Availability
  • Delivery options
  
  Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
      }
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const closeTab = () => {
    setVisible(false);
  };

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "#4D4E4E",
    border: "2px solid #4D4E4E",
    borderRadius: "10px",
    padding: "0 12px",
    width: "70%",
    height: "48px", // Fixed height for all buttons
    cursor: "pointer",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const iconWrapperStyle = {
    height: "32px",
    width: "32px",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    borderRadius: "50%",
    zIndex: 2,
  };

  const labelStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#FFF",
    fontSize: "14px",
    zIndex: 1,
  };

  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}

      {mounted && isPopupOpen && !sessionStorage.getItem("userInfo") && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "20px",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <UserInfoPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      )}

      {/*====== Start Hero Banner Carousel ======*/}
      <div className="hero-banner-carousel">
        <Slider {...carouselSettings}>
          {heroImages.map((img, idx) => (
            <div key={idx} className="hero-slide">
              <img
                src={img}
                alt={`Hero Banner ${idx + 1}`}
                className="hero-banner-img"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/*====== End Hero Banner Carousel ======*/}

      {/*====== Contact Info Buttons Starts here ======*/}
      <div
        className="d-md-none"
        style={{
          marginBottom: "-30px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            padding: "10px 0",
            backgroundColor: "transparent",
            overflow: "hidden",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* CALL */}
          <button onClick={handleCall} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Call Us.svg"
                alt="Call"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>CALL US</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => {
              const userInfo = sessionStorage.getItem("userInfo");
              if (isMobile) {
                handleWhatsApp();
              } else {
                !userInfo ? setIsPopupOpen(true) : handleWhatsApp();
              }
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/whatsapp.svg"
                alt="WhatsApp"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>WHATSAPP</span>
          </button>

          {/* LOCATION */}
          <button onClick={handleLocation} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/Location.svg"
                alt="Location"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>LOCATION</span>
          </button>

          {/* MAIL */}
          <button onClick={handleMail} style={buttonStyle}>
            <div style={iconWrapperStyle}>
              <img
                src="/assets/images/black-icons/email.svg"
                alt="Mail"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <span style={labelStyle}>MAIL US</span>
          </button>

          {/* DOWNLOAD BROCHURE */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/images/Plixon-Catalogue-Digital.pdf";
              link.download = "Plixon-Catalogue-Digital.pdf";
              link.click();
            }}
            style={buttonStyle}
          >
            <div style={iconWrapperStyle}>
              <i
                className="ti-download"
                style={{ color: "#000", fontSize: "18px" }}
              />
            </div>
            <span style={labelStyle}>DOWNLOAD BROCHURE</span>
          </button>
        </div>

        {/* Social Media Buttons - More minimal */}
        <div style={{ display: "flex", gap: "15px", paddingTop: "10px" }}>
          <button className="social-rounded-btn" onClick={handleFacebook}>
            <img
              src="/assets/images/social-media-icons/Facebook.svg"
              alt="Facebook"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleInstagram}>
            <img
              src="/assets/images/social-media-icons/Instagram.svg"
              alt="Instagram"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleLinkedIn}>
            <img
              src="/assets/images/social-media-icons/Linkedin.svg"
              alt="LinkedIn"
            />
          </button>
          <button className="social-rounded-btn" onClick={handleShare}>
            <img
              src="/assets/images/social-media-icons/Share.svg"
              alt="Share"
            />
          </button>
        </div>

        {/* Google Review Button - Simplified */}
        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "-20px",
          }}
        >
          <button
            onClick={() =>
              // window.open("https://g.page/r/CTjtIU0PHHR6EBM/review", "_blank")
              window.open("https://maps.app.goo.gl/oW5k4Sjo3cM1GAZ19", "_blank")
            }
            style={{
              padding: "8px 95px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              fontWeight: "500",
              color: "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/assets/images/icons/google.png"
              alt="Google Reviews"
              style={{
                height: "30px",
                width: "30px",
                marginRight: "12px",
              }}
            />
            Rate Us
          </button>
        </div>
      </div>
      {/*====== Contact Info Buttons Ends here ======*/}

      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-100 pb-90">
        <div
          className={`floating-social-bar ${showBar ? "visible" : ""}`}
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: `translate(-50%, ${showBar ? "0%" : "100%"})`,
            width: "80%",
            backgroundColor: "#fff",
            zIndex: 9999,
            justifyContent: "",
            alignItems: "center",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="d-none d-md-flex row"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // Optional: Makes it responsive
                width: "95%",
              }}
            >
              {/* Left Section: Main Social Buttons */}
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  className="social-main-btn"
                  onClick={handleCall}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Call Us.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Call Us
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleLocation}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Location.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Location
                </button>
                <button
                  className="social-main-btn"
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo");
                    if (isMobile) {
                      handleWhatsApp(); // Directly open WhatsApp on mobile
                    } else {
                      if (!userInfo) {
                        setIsPopupOpen(true); // Open the popup if session data is not available
                      } else {
                        handleWhatsApp();
                      }
                    }
                  }}
                  style={{
                    width: "160px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/whatsapp.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  WhatsApp
                </button>
                <button
                  className="social-main-btn"
                  onClick={handleMail}
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      height: "32px",
                      width: "32px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/email.svg"
                      alt="Call"
                      style={{ height: "20px", width: "20px" }}
                    />
                  </div>
                  Mail Us
                </button>
              </div>

              {/* Right Section: Rounded Social Buttons */}
              <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
                <button className="social-rounded-btn" onClick={handleFacebook}>
                  <img
                    src="/assets/images/social-media-icons/Facebook.svg"
                    alt="Facebook"
                  />
                </button>
                <button
                  className="social-rounded-btn"
                  onClick={handleInstagram}
                >
                  <img
                    src="/assets/images/social-media-icons/Instagram.svg"
                    alt="Instagram"
                  />
                </button>
                <button className="social-rounded-btn" onClick={handleLinkedIn}>
                  <img
                    src="/assets/images/social-media-icons/Linkedin.svg"
                    alt="LinkedIn"
                  />
                </button>
                <button className="social-rounded-btn" onClick={handleShare}>
                  <img
                    src="/assets/images/social-media-icons/Share.svg"
                    alt="Share"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Desktop View - Hidden on Mobile */}
          <div
            className="row"
            style={{
              marginBottom: "20px",
              marginTop: "-30px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap", // Ensures responsiveness
            }}
          >
            {/* Buttons Section */}
            <div className="row">
              {/* Desktop View */}
              <div
                className="d-none d-md-flex row"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    className="social-main-btn"
                    onClick={handleCall}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/Call Us.svg"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Call Us
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleLocation}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/Location.svg"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Location
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={() => {
                      const userInfo = sessionStorage.getItem("userInfo");
                      if (isMobile) {
                        handleWhatsApp(); // Directly open WhatsApp on mobile
                      } else {
                        if (!userInfo) {
                          setIsPopupOpen(true); // Open the popup if session data is not available
                        } else {
                          handleWhatsApp();
                        }
                      }
                    }}
                    style={{
                      width: "160px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/whatsapp.svg"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    WhatsApp
                  </button>
                  <button
                    className="social-main-btn"
                    onClick={handleMail}
                    style={{
                      width: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "32px",
                        width: "32px",
                        backgroundColor: "#FFF",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginRight: 10,
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="/assets/images/black-icons/email.svg"
                        alt="Call"
                        style={{ height: "20px", width: "20px" }}
                      />
                    </div>
                    Mail Us
                  </button>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "20px" }}
                >
                  <button
                    className="social-rounded-btn"
                    onClick={handleFacebook}
                  >
                    <img
                      src="/assets/images/social-media-icons/Facebook.svg"
                      alt="Facebook"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleInstagram}
                  >
                    <img
                      src="/assets/images/social-media-icons/Instagram.svg"
                      alt="Instagram"
                    />
                  </button>
                  <button
                    className="social-rounded-btn"
                    onClick={handleLinkedIn}
                  >
                    <img
                      src="/assets/images/social-media-icons/Linkedin.svg"
                      alt="LinkedIn"
                    />
                  </button>
                  <button className="social-rounded-btn" onClick={handleShare}>
                    <img
                      src="/assets/images/social-media-icons/Share.svg"
                      alt="Share"
                    />
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "20px",
                  }}
                >
                  <button
                    onClick={() =>
                      // window.open(
                      //   "https://g.page/r/CTjtIU0PHHR6EBM/review",
                      //   "_blank"
                      // )
                      window.open(
                        "https://maps.app.goo.gl/oW5k4Sjo3cM1GAZ19",
                        "_blank"
                      )
                    }
                    style={{
                      padding: "9px 40px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#333",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src="/assets/images/icons/google.png"
                      alt="Google Reviews"
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "12px",
                      }}
                    />
                    Rate Us
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Tab - Hidden on Desktop */}
            <div
              className="d-md-none bg-white fixed-bottom shadow-lg"
              style={{
                padding: "10px 0", // Adjusted padding to avoid extra space
                paddingTop: "0px",
                borderTop: "1px solid #eee",
                zIndex: 1000,
                overflow: "hidden", // Prevents content overflow
              }}
            >
              <BottomTab visible={visible} closeTab={closeTab} />
              <div
                className="d-flex justify-content-evenly align-items-center"
                style={{
                  gap: "5px", // Ensures proper spacing between buttons
                  width: "100%",
                  padding: "0 10px", // Full width for buttons
                }}
              >
                {/* Call */}
                <button
                  onClick={handleCall}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Call Us.svg"
                      alt="Call"
                      style={{
                        height: "17px",
                        width: "17px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Call</span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => {
                    const userInfo = sessionStorage.getItem("userInfo");
                    if (isMobile) {
                      handleWhatsApp(); // Directly open WhatsApp on mobile
                    } else {
                      if (!userInfo) {
                        setIsPopupOpen(true); // Open the popup if session data is not available
                      } else {
                        handleWhatsApp();
                      }
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 7,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/whatsapp.svg"
                      alt="WhatsApp"
                      style={{
                        height: "15px",
                        width: "15px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    WhatsApp
                  </span>
                </button>

                {/* Location */}
                <button
                  onClick={handleLocation}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src="/assets/images/black-icons/Location.svg"
                      alt="Location"
                      style={{
                        height: "18px",
                        width: "18px",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>
                    Location
                  </span>
                </button>

                {/* Share */}
                <button
                  onClick={handleAddToHomeScreen}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#4D4E4E",
                    borderRadius: "10px",
                    padding: "4px",
                    width: "100%", // Full width for buttons
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginRight: 10,
                      borderRadius: "50%",
                    }}
                  >
                    <i className="ti-bookmark" style={{ color: "#000" }}></i>
                  </div>
                  <span style={{ fontSize: "12px", color: "#FFF" }}>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="listing-details-wrapper listing-details-wrapper-two"
                style={{}}
              >
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="/assets/images/Hero-Banner/home_about_us.jpg"
                    alt="listing image"
                  />
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <div className="listing-info-area mb-0 wow fadeInUp">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="listing-info-content">
                          <h3 className="title">About Us</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="title">{`At Sea-Cloud Shipping, we’re navigating the future`}</h3>
                  <p>
                    Sea-Cloud Shipping Services is an Authorized Customs
                    Broker’s licensed firm specializing in port and customs
                    clearances under the Customs Act & also provide expert
                    advice on all legal matters related to port/customs and
                    other allied laws. Its emerging as an Authorized Customs
                    Broker for Sea & Air Cargo Clearance, International freight
                    forwarder and Shipping Agents for all types of Ships &
                    support services. With wide experience of 25 Years serving
                    under banner of H K Dave Ltd, Sical Logistics Ltd & J M Baxi
                    Group for long term establishment vision.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🌍</span>
                        </div>
                        <div className="info">
                          <h6>Global Reach, Local Expertise</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>✅</span>
                        </div>
                        <div className="info">
                          <h6>Transparent Pricing, Trusted Delivery</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🔄</span>
                        </div>
                        <div className="info">
                          <h6>End-to-End Efficiency</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🤝</span>
                        </div>
                        <div className="info">
                          <h6>Built on Trust, Driven by Excellence</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-volume"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>📦</span>
                        </div>
                        <div className="info">
                          <h6>Smart Shipping Solutions</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          {/* <i
                            className="ti-desktop"
                            style={{ color: "#00ADEE" }}
                          /> */}
                          <span style={{ fontSize: "25px" }}>🚛</span>
                        </div>
                        <div className="info">
                          <h6>Consistent Care, Every Container</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    We will continue to provide clients with professional,
                    reliable and competitive services in a spirit of mutual
                    benefit and relentlessly elevate these services to a level
                    to keep us with their rising expectations in a customized
                    manner. <br />
                    <br /> Sea-Cloud is omnipresent but to list the few of our
                    business places of operation are Gujarat ports and having
                    associates at other Ports & Airports of India. <br />
                    <br /> We trust you will grant us an opportunity to prove
                    our commitments and oblige.
                    <a
                      href="/about"
                      style={{
                        color: "#00ADEE",
                        cursor: "pointer",
                        fontSize: "15px",
                        whiteSpace: "nowrap",
                        display: "inline",
                        marginLeft: "4px",
                      }}
                    >
                      Read More
                    </a>
                  </p>
                </div>

                <div className="releted-listing-area wow fadeInUp mb-10">
                  <h3 className="title mb-40">Related Products</h3>
                  <Slider
                    {...reletedListingSlider2}
                    className="releted-listing-slider-one"
                  >
                    {products.map((product, index) => (
                      <div className="listing-item listing-grid-item-two">
                        <div
                          className="listing-thumbnail"
                          style={{
                            backgroundColor: `${product.backgroundColor}`,
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            // height: "400px",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        >
                          <Link href={`/product-details/${product.slug}`}>
                            <img src={product.image} alt="TV Product Image" />
                          </Link>
                          <span
                            className="featured-btn"
                            style={{
                              borderRadius: "5px",
                              fontSize: "10px",
                              padding: "3px 10px",
                            }}
                          >
                            Featured
                          </span>
                        </div>
                        <div className="listing-content">
                          <h5
                            className="title"
                            style={{ marginBottom: "15px" }}
                          >
                            <Link
                              href={`/product-details/${product.slug}`}
                            >
                              {product.name}
                            </Link>
                          </h5>
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 4,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "300px",
                              lineHeight: "1.5",
                              marginBottom: "15px",
                            }}
                          >
                            {product.detail}
                          </p>
                          {/* <div className="features-list">
                            <ul>
                              <li>AI Upscaling</li>
                              <li>8K Ultra HD</li>
                            </ul>
                          </div> */}
                          <span className="phone-meta"></span>
                          <div
                            className="listing-meta"
                            style={{ width: "100%" }}
                          >
                            <ul style={{ width: "100%" }}>
                              <li style={{ width: "100%" }}>
                                <button
                                  onClick={() => {
                                    const userInfo =
                                      sessionStorage.getItem("userInfo");
                                    if (isMobile) {
                                      getPrice(product);
                                    } else {
                                      if (!userInfo) {
                                        setIsPopupOpen(true); // Open the popup if session data is not available
                                      } else {
                                        getPrice(product);
                                      }
                                    }
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 mt-1 mb-3 border border-gray-300 rounded-lg transition"
                                  style={{
                                    backgroundColor: "#24D07A",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // paddingBottom: "20px",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    src="/assets/images/WhatsApp_Image.png"
                                    alt="WhatsApp Icon"
                                    style={{
                                      height: "15px",
                                      width: "15px",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <span
                                    className="underline"
                                    style={{ color: "#FFFFFF" }}
                                  >
                                    Get Price
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title" style={{ marginBottom: "40px" }}>
                    Features Gallery
                  </h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 1.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 2.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 3.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 4.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="/assets/images/Posts/Post 7.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <SocialStoriesSection /> */}
                <FAQSection />
                <div
                  className="d-flex align-items-center justify-content-between p-3 rounded"
                  style={{
                    backgroundColor: "#E5F8F7",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="mb-2 mb-md-0 me-md-3"
                    style={{ minWidth: "250px", paddingLeft: "20px" }}
                  >
                    <span style={{ fontSize: "16px", marginBottom: "5px" }}>
                      Send your requirement
                    </span>
                    <br />
                    <strong
                      style={{
                        fontSize: "25px",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      WhatsApp now
                    </strong>
                  </div>

                  <div
                    className="input-group mb-2 mb-md-0"
                    style={{
                      maxWidth: "400px",
                      flexGrow: 1,
                      paddingRight: "20px",
                    }}
                  >
                    <span
                      className="input-group-text bg-white border-end-0"
                      style={{ marginRight: "5px" }}
                    >
                      <img
                        src="/assets/images/whatsapp-image-green.png"
                        alt="WhatsApp Icon"
                        style={{
                          height: "25px",
                          width: "25px",
                        }}
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 rounded"
                      placeholder="Hi, I found your business..."
                      aria-label="WhatsApp Message"
                      style={{ marginRight: "5px" }}
                      onChange={(e) => {
                        setRequirementInput(e.target.value);
                      }}
                      value={requirementInput}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-send"
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo");
                        if (isMobile) {
                          handleWhatsApp(); // Directly open WhatsApp on mobile
                        } else {
                          if (!userInfo) {
                            setIsPopupOpen(true); // Open the popup if session data is not available
                          } else {
                            const phoneNumber = "918200397854"; // Replace with your retailer's WhatsApp number
                            const message = `${requirementInput}`;
                            const encodedMessage = encodeURIComponent(message);
                            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                            window.open(whatsappURL, "_blank");
                          }
                        }
                      }}
                    >
                      Send
                    </button>
                    <div
                      className="ms-md-3 text-nowrap"
                      style={{ marginTop: "5px" }}
                    >
                      Or connect with seller instantly
                      <a
                        href="tel: 8200397854"
                        className="text-decoration-none ms-1"
                      >
                        <strong
                          style={{
                            color: "#007BFF",
                            textDecoration: "underline",
                            marginLeft: "5px",
                          }}
                        >
                          99425 00600
                        </strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="listing-tag-box mb-30 wow fadeInUp mt-15 mb-2">
                  <h4 className="title">Related Searches</h4>
                  {populerSearches.map((val) => {
                    return (
                      <span
                        key={val}
                        className="px-3 my-2 mr-3 py-2 rounded-full border border-gray-300 bg-white text-sm"
                      >
                        {val}
                      </span>
                    );
                  })}
                </div>

                <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "4px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2025</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "4px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div
                        className="thumb border"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                          backgroundColor: "#F7F7F7",
                          fontSize: "40px",
                        }}
                      >
                        M
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2025</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-six">
                            <li>
                              <span className="av-rate">4</span>
                            </li>
                            {[1, 2, 3, 4].map((val, _ind) => (
                              <li className="px-1" key={_ind}>
                                <img
                                  src="/assets/images/contact-info/rating-star-fill.svg"
                                  alt="star-fill"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              </li>
                            ))}
                            <img
                              src="/assets/images/contact-info/rating-star.svg"
                              alt="Call"
                              style={{
                                height: "20px",
                                width: "20px",
                                marginTop: "4px",
                                marginLeft: "2px",
                              }}
                            />
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: "50px",
                  }}
                >
                  <button
                    className="main-btn"
                    onClick={() =>
                      // window.open("https://g.page/r/CTjtIU0PHHR6EBM/review", "_blank")
                      window.open(
                        "https://maps.app.goo.gl/oW5k4Sjo3cM1GAZ19",
                        "_blank"
                      )
                    }
                  >
                    Give Us a Review
                  </button>
                </div>
                {/* <div className="listing-review-form mb-30 wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="title">Write a Review</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-rating">
                        <ul className="ratings">
                          <li>
                            <span>Rate Here:</span>
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                        </ul>
                        <span>(02 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email here"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check4"
                              name="checkbox"
                            />
                            <label htmlFor="check4">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Submit Review</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>

            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};

export default HomeScreen;

<style jsx global>{`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 767.98px) {
    body {
      position: relative;
      overflow-x: hidden;
      padding-bottom: 70px; /* Reserve space for fixed bottom bar */
    }
  }
`}</style>;
