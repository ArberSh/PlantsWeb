import React, { useEffect, useState } from "react";
import "./Landing.css";
import Arrow from "../assests/right-arrow.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function Landing() {
  const [slides, setSlides] = useState(document.querySelectorAll(".Slide"));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSlides(document.querySelectorAll(".Slide"));
  }, []);

  useEffect(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
      slide.style.left = `${index * 100}%`;
    });
  }, [slides, counter]);

  const incrementCounter = () => {
    if (counter === slides.length - 1) setCounter(0);
    else setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) setCounter(slides.length - 1);
    else setCounter(counter - 1);
  };


  return (
    <>
      <div className="SlideShow">
        <div className="Slide-Container">
          <div className="arrows">
            <button
              style={{ marginLeft: "2rem" }}
              className="arrow"
              onClick={() => decrementCounter()}
            >
              <img
                className="arrowImg"
                src={Arrow}
                style={{ transform: "rotate(180deg)" }}
                alt=""
              />
            </button>
            <button
              style={{ marginRight: "2rem" }}
              className="arrow"
              onClick={() => incrementCounter()}
            >
              <img className="arrowImg" src={Arrow} alt="" />
            </button>
          </div>
          <div id="FirstSlide" className="Slide">
            <div className="Text-Container">
              <h1 className="title">The Best Plant Shop</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div id="SecondSlide" className="Slide">
            <div className="Text-Container">
              <h1 className="title">Best Guide Plant Care</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Let's Guide</button>
            </div>
          </div>
          <div id="ThirdSlide" className="Slide">
            <div className="Text-Container">
              <h1 className="title">Subscribe for more gifts</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Wallpaper_Container-Mobile">
      <div id="FirstSlide">
            <div  data-aos="fade-in" className="Text-Container">
              <h1 className="title">The Best Plant Shop</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div  id="SecondSlide">
            <div  data-aos="fade-in" className="Text-Container">
              <h1 className="title">The Best Plant Shop</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
          <div id="ThirdSlide">
            <div data-aos="fade-in" className="Text-Container">
              <h1 className="title">The Best Plant Shop</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                fugiat.
              </p>
              <button>Shop Now</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Landing;