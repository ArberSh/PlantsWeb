import React from "react";
import './Landing.css'
import Arrow from "../assests/right-arrow.png"

function Landing() {

    const slides = document.querySelectorAll(".Slide")
    let counter = 0
    // beje me useState per me bo animation   

    slides.forEach(
        (slide,index) => {
            slide.style.left = `${index * 100}%`
        }
    )

    const slideImage = () => {
        slides.forEach(
        (slide) => {
            if(counter == 3){
                counter = 0
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
            else if(counter == -1) {
                counter = 0
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
            else{
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
        }
        )
    }

    function goPrev(){
        counter-- 
        slideImage()
    }

    function goNext(){
        counter++ 
        slideImage()
    }

  return (
    <>
      <div className="SlideShow">
        
        <div className="Slide-Container">
            <div className="arrows">
            <button style={{marginLeft:"2rem"}} onClick={goPrev} className="arrow">
               <img className="arrowImg" src={Arrow} style={{transform:"rotate(180deg)"}} alt="" />
            </button>
            <button style={{marginRight:"2rem"}} onClick={goNext} className="arrow">
                <img className="arrowImg" src={Arrow} alt="" />
            </button>
          </div>
          <div id="FirstSlide" className="Slide">
            <div className="Text-Container">
            <h1 className="title">The Best Plant Shop</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, fugiat.</p>
            <button>Shop Now</button>
            </div>
          </div>
          <div id="SecondSlide" className="Slide">

          </div>
          <div id="ThirdSlide" className="Slide">

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Landing;
