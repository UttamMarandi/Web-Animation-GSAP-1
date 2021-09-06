import { Route } from "react-router-dom";
// Components
import { useEffect, useState } from "react";
import Header from "./components/header";

//library
import gsap from "gsap";
//pages
import Home from "./pages/home";
import Approach from "./pages/approcah";
import About from "./pages/about";
import CaseStudies from "./pages/caseStudies";
import Services from "./pages/services";
import Navigation from "./components/navigation";
//styles
import "./styles/app.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About Us", Component: About },
  { path: "/approach", name: "Approach", Component: Approach },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  //prevents flash
  // gsap.to("body", 0, { css: { visibility: "visible" } });
  //above code saying gsap.to is depreceated (lol), so created a timeline
  const tlbody = gsap.timeline();
  tlbody.to("body", 0, { css: { visibility: "visible" } });

  //on changing dimensions the heigth/width of page does not work properly , bc we are setting the height/width using js...we need to solve this
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    // let vh = window.height * 0.1;
    // document.documentElement.style.setProperty("--vh", `${vh}px`);
    //above code not working fr me

    //this func will resize the window each time the window is resized by user
    // const HandleResize = () => {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth,
    //   });
    // };

    // a debounce function makes sure that code is only triggered once per user input.
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    //wait for 1s after user input

    window.addEventListener("resize", debouncedHandleResize); //this function is called each time the window is resized

    return () => {
      window.removeEventListener("resize", debouncedHandleResize); //cleanup function
    };
  });
  console.log(dimensions);
  return (
    <>
      <Header dimensions={dimensions} />
      {/* pass the dimensions as props to Header. Required for custom animation for diffrent viewport sizes */}
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;

//debounced HandleResize
//fancy advanced stuff\
