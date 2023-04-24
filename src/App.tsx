import React from "react";
import "./App.css";
import NavigationDots from "./components/navigation-dots/navigation-dots";
import AnimetedSlider from "./components/animated-slider/animeted-slider";
import RegisterForm from "./components/register-page/register-form";

function App() {
  return (
    // <div className="slider-container">
    //   {/* <NavigationDots amountOfDots={5} currentDotIndex={1} goToDot={() => {}} /> */}
    //   <AnimetedSlider parentWidth={750}>
    //     <h2>1</h2>
    //     <h2>2</h2>
    //     <h2>3</h2>
    //   </AnimetedSlider>
    // </div>
    <RegisterForm/>
  );
}

export default App;
