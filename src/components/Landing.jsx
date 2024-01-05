import React, { useEffect,useState } from "react";
import './Landing.css'
import Arrow from "../assests/right-arrow.png"

function Landing() {

    const slides = document.querySelectorAll(".Slide")
    const [counter,setCounter] = useState(0) 



    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter((counter) => (counter = 1 + counter ))
        if(counter <= 3 || counter >= -1){
          setCounter(0)
        }
        slideImage()
        console.log(counter)
      }, 10000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);

  function goPrev(){
      setCounter((counter) => (counter = 1 - counter )) 
      slideImage()
      console.log(counter)

  }

  function goNext(){
      setCounter((counter) => (counter = 1 + counter ))
      slideImage()
      console.log(counter)

  }

      slides.forEach(
        (slide,index) => {
            slide.style.left = `${index * 100}%`
        }
    )

    

    const slideImage = () => {
        slides.forEach(
        (slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`
                console.log(counter)
        }
        )
      
        
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
          <div className="Text-Container">
            <h1 className="title">Best Guide Plant Care</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, fugiat.</p>
            <button>Let's Guide</button>
            </div>
          </div>
          <div id="ThirdSlide" className="Slide">
          <div className="Text-Container">
            <h1 className="title">Subscribe for more gifts</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, fugiat.</p>
            <button>Subscribe</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Landing;
