import React, { useState } from "react";
// Hooks
import { useEffect } from "react";

//Libraries
import gsap from "gsap";
//Components
import Cases from "../components/cases";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";

//timeline
const tl = gsap.timeline(); //creating timeline
// we can use useRef to target elements , but with time it becomes clunky and tiresome.
//so it's better to use classname to target elements
const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    //three line span , duration 1.8s
    y: 100, //start from bottom 100
    ease: "power4.out", //out animation ease Power4
    delay: 1, //delay of start of animation
    skewY: 7, //text reveal as tilted towards right
    stagger: {
      amount: 0.3, //after start of animation of first .line span , second .line span will start exactly after 0.3s and so on
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8, //delay in negative b.c we want this animation to occur before the top animation has finished
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } }) //after the animation we need to remove the overlay so that , content becomes clickable
    .from(".case-image img", 1.6, {
      //to scale the images
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2, //need to play with delay to get the right sync
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    homeAnimation(completeAnimation); //call homeAnimation declared above
  }, []);
  return (
    <>
      {/* If animationComplete true remove overlay */}
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
}

export default Home;

//animationComplete
//after the animation is completed we want the intro-overlay to be removed from dom
//for that we run onComplete props on gsap and pass completeAnimation function. This function set animaton complete to true
//so on first load we will see the overlay as it loads
//useEffect runs after the dom has loaded , it will set the animationComplete to true , which will unmounnt the IntroOverlay. In a sense remove the IntroOverlay component
