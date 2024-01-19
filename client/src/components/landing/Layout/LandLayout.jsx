import React, { useEffect } from "react";
import "../../../assets/css/style.css";
import TopBar from "./TopBar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import About from "../components/About";
import WhySection from "../components/WhySection";
import Frequently from "../components/Frequently";
import Cta from "../components/Cta";
import ContactForm from "../components/ContactForm";
import CopyRight from "../components/CopyRight";
import FooterBar from "../components/FooterBar";
import Subscription from "../components/Subscription";

const LandLayout = () => {
  useEffect(() => {
    // let preloader = document.querySelector('#preloader');
    // if (preloader) {
    //     window.addEventListener('load', () => {
    //         preloader.remove();
    //     });
    // }

    let backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add("active");
        } else {
          backToTop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBackToTop);
      window.addEventListener("scroll", toggleBackToTop);

      let selectHeader = document.querySelector("#header");
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add("header-scrolled");
          } else {
            selectHeader.classList.remove("header-scrolled");
          }
        };
        window.addEventListener("scroll", headerScrolled);

        return () => {
          window.removeEventListener("load", toggleBackToTop);
          window.removeEventListener("scroll", toggleBackToTop);
          window.removeEventListener("scroll", headerScrolled);
        };
      }
    }
  }, []);

  return (
    <div className="m-0 p-0">
      <header id="header" className="fixed-top ">
        <div className="container">
          <TopBar />
        </div>
      </header>
      <Hero />
      <main id="main">
        <Clients />
        <About />
        <WhySection />
        <Cta />
        <Frequently />
        <ContactForm />
      </main>

      <footer id="footer">
        <Subscription />
        <FooterBar />
        <CopyRight />
      </footer>
      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default LandLayout;
