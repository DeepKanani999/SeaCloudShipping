"use client";
import PageBanner from "@/components/PageBanner";
import TestimoinalSlider from "@/components/Slider/TestimonialSlider";
import UserInfoPopup from "@/components/userDetailPopup";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

const About = () => {
  const [showBar, setShowBar] = useState(false);
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true); // Set to true when component mounts on client

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
    const defaultMessage = `Hi, I'm interested in your products. Could you please provide more details?`;

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <Layout>
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
      <PageBanner title={"About us"} />
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        {isClient && (
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
              </div>
            </div>
          </div>
        )}
        <div className="features-wrapper-three pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-60 wow fadeInUp">
                  <span className="sub-title">Some Feature</span>
                  <h2>Top Reasons to Choose Sea Clouds Shipping Service</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <div className="icon">
                    {/* <i className="flaticon-add-user" /> */}
                    <img
                      src="/assets/images/about-us/about_flexibleshipping.svg"
                      alt="star-fill"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Flexible Shipping Solutions</h3>
                    <p>
                      Whether it's bulk cargo, containers, or fragile goods, Sea
                      Clouds tailors solutions to match your business needs —
                      across sea, land, or multimodal logistics.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInDown"
                  data-wow-delay="20ms"
                >
                  <div className="icon">
                    {/* <i className="flaticon-gift-box" /> */}
                    <img
                      src="/assets/images/about-us/about_realtimetracking&trans.svg"
                      alt="star-fill"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Real-Time Tracking & Transparency</h3>
                    <p>
                      Stay in control. With our advanced tracking system,
                      monitor your shipment’s journey in real-time — no
                      surprises, just clarity.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <div className="icon">
                    {/* <i className="flaticon-laptop" /> */}
                    <img
                      src="/assets/images/about-us/about_reliableglobal.svg"
                      alt="star-fill"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Reliable Global Delivery</h3>
                    <p>
                      From ports to doorsteps, Sea Clouds ensures your cargo
                      reaches any corner of the world — safely, securely, and
                      always on schedule.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-two text-center mb-40 wow fadeInDown"
                  data-wow-delay="40ms"
                >
                  <div className="icon">
                    {/* <i className="flaticon-headphone" /> */}
                    <img
                      src="/assets/images/about-us/about_trustedbyindustry.svg"
                      alt="star-fill"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">Trusted by Industry Leaders</h3>
                    <p>
                      From local exporters to global enterprises — businesses
                      trust Sea Clouds for efficient, dependable, and
                      cost-effective logistics.
                    </p>
                    {/* <Link className="btn-link icon-btn" href="/how-work">
                      More Details
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-four pt-80 pb-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="/assets/images/details-images/product-detail-4.jpg"
                    alt="Features Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-30 wow fadeInUp">
                    <span className="sub-title">Our Speciality</span>
                    <h2>Experience Shipping Like Never Before</h2>
                  </div>
                  <h5>
                    Enjoy smooth logistics, timely deliveries, and global
                    reliability with Sea Cloud Shipping Service.
                  </h5>
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-find" /> */}
                        <img
                          src="/assets/images/about-us/about2_ontimeeverytime.svg"
                          alt="star-fill"
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>On-Time, Every Time</h5>
                        <p>
                          We prioritize punctuality with efficient route
                          planning and real-time tracking for dependable
                          shipping schedules.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/about2_globalcoverage.svg"
                          alt="star-fill"
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Global Coverage, Local Care</h5>
                        <p>
                          From major ports to remote destinations, our network
                          ensures your cargo gets where it needs to go—with
                          personalized service at every touchpoint.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-place" /> */}
                        <img
                          src="/assets/images/about-us/about2_safe&secure.svg"
                          alt="star-fill"
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>Safe & Secure Transport</h5>
                        <p>
                          Your cargo is protected with advanced safety
                          protocols, experienced crew, and strict quality
                          control from dock to door.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        {/* <i className="flaticon-social-care" /> */}
                        <img
                          src="/assets/images/about-us/about2_24by7customersupport.svg"
                          alt="star-fill"
                          style={{ height: "40px", width: "40px" }}
                        />
                      </div>
                      <div className="content">
                        <h5>24/7 Customer Support</h5>
                        <p>
                          Questions? Updates? Our logistics team is always
                          ready—around the clock, around the world.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="content">
                  <h5>Our Vision</h5>
                  <p>
                    To provide the highest level of services in a transparent &
                    cost-effective manner to our customers, in order to build a
                    trustworthy and long-lasting relationship & committed to
                    service excellence and renowned for our integrity and
                    ability to deliver.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <h5>Our Mission</h5>
                  <p>
                    “Destined Your Desire” To provide the highest quality
                    service to our customers by continuously increasing cost
                    efficiency and maintaining the real time delivery deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{
            backgroundImage: "url(/assets/images/bg/cta-bg-2.jpg)",
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <div className="container "> */}
          <div className="row align-items-center justify-content-center p-3">
            {/* <div className="col-lg-7">
                <div
                  className="company-name wow fadeInLeft"
                  style={{
                    // fontSize: "160px",
                    fontWeight: "bold",
                    color: "#FFF",
                  }}
                >
                  Decora
                </div>
              </div> */}
            <div className="col-lg-6">
              <div
                className="cta-content-box wow fadeInRight"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ textAlign: "center" }}>
                  Experience Unmatched Shipping Reliability
                </h2>
                <p style={{ textAlign: "center" }}>
                  Premium logistics and cargo solutions offering global reach,
                  timely deliveries, and secure handling — built to move your
                  world with precision and trust that sails beyond borders.
                </p>
                <a
                  onClick={() => {
                    // const link = document.createElement("a");
                    // link.href = "/assets/images/Ostro-Company Profile.pdf";
                    // link.download = "Sea-Cloud-Shipping-Company.pdf"; // Optional: Specify the file name
                    // link.click();
                  }}
                  className="main-btn"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#00ADEE",
                    color: "#FFF",
                    textDecoration: "none",
                    borderRadius: "5px",
                    marginTop: "10px",
                    alignSelf: "center",
                  }}
                >
                  Download Catalogue
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area bg_cover pt-110 pb-265"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Testimoinals</span>
                <h2>Happy User Feedback</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div className="container" style={{ marginBottom: "50px" }}>
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              // backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
              backgroundColor: "#00ADEE",
              opacity: "0.8",
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i
                      className="flaticon-email"
                      style={{ marginTop: "5px" }}
                    />
                  </div>
                  <div className="content">
                    <h4 style={{ color: "#FFF" }}>Send your requirement</h4>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h2>WhatsApp Now</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="text"
                      id="whatsappMessage"
                      className="form_control"
                      placeholder="Enter your requirement"
                      name="message"
                      required=""
                      style={{ marginTop: "20px" }}
                    />
                    <button
                      className="main-btn"
                      style={{
                        backgroundColor: "#040468",
                      }}
                      onClick={() => {
                        const userInfo = sessionStorage.getItem("userInfo"); // Retrieve userInfo here
                        if (isMobile) {
                          handleWhatsApp(); // Directly open WhatsApp on mobile
                        } else {
                          if (!userInfo) {
                            setIsPopupOpen(true); // Open the popup if session data is not available
                          } else {
                            const message =
                              document.getElementById("whatsappMessage").value;
                            const encodedMessage = encodeURIComponent(message);
                            // Replace with your actual WhatsApp number (with country code, remove +)
                            const whatsappNumber = "918200397854";
                            window.open(
                              `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
                              "_blank"
                            );
                          }
                        }
                      }}
                    >
                      Send via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-area pt-115 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Team Member</span>
                <h2>Meet Our Executive</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-30 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="team-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Martyn Decode</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
    </Layout>
  );
};
export default About;
