import { Route } from "react-router-dom";
// Components
import { useEffect } from "react";
import Header from "./components/header";

//library
import gsap from "gsap";
//pages
import Home from "./pages/home";
import Approach from "./pages/approcah";
import About from "./pages/about";
import CaseStudies from "./pages/caseStudies";
import Services from "./pages/services";
//styles
import "./styles/app.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Services", Component: Services },
  { path: "/about-us", name: "About Us", Component: About },
  { path: "/approach", name: "Approach", Component: Approach },
];

function App() {
  useEffect(() => {
    //prevents flash
    // gsap.to("body", 0, { css: { visibility: "visible" } });
    //above code saying gsap.to is depreceated (lol), so created a timeline
    const tlbody = gsap.timeline();
    tlbody.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
