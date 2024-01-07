import React, { useEffect, useState } from "react";
import "./Landing.css";
import Arrow from "../assests/right-arrow.png";

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
    </>
  );
}

export default Landing;