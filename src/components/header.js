import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";

let tl = gsap.timeline();

function Header({ dimensions }) {
  const [menuState, setMenuState] = useState({ menuOpened: false }); //we want to track the state of of our menu
  useEffect(() => {
    if (menuState.menuOpened === true) {
      //Run Menu Open animation
      gsap.to("nav", 0, { css: { display: "block" } }); //tween //earlier nav is display:none, now dispplay block
      gsap.to("body", 0, { css: { overflow: "hidden" } });

      tl.to(".App", {
        duration: 1,
        y: dimensions.width <= 654 ? "80vh" : "70vh", //conditional animation
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", {
          //this animation will remove the ham-menu
          duration: 0.6,
          delay: -1, //meaning this animation will start the moment above .to() starts as it has duration of 1
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          //animating the svg, no idea what's happening here, need to look into svg animation
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Path_3", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })

        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      //Run Menu close animation\
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          //this animation will remove the ham-menu
          duration: 0.6,
          delay: -0.6, //meaning this animation will start the moment above .to() starts as it has duration of 1
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          css: {
            display: "none",
          },
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        })
        .to("nav", {
          css: {
            display: "none",
          },
        });
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">DESIGN</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setMenuState({ menuOpened: true })} //on clicking ham-menu menu opens
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })} //on cliking svg icon menu closes
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
