import "./App.css";
import { useRef } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";

function App() {
  const scrollRef = useRef();

  const handleWheel = (event) => {
    const delta = event.deltaY || event.detail || event.wheelDelta;

    if (delta !== 0) {
      scrollRef.current.scrollLeft += delta;
      event.preventDefault();
    }
  };
  return (
    <div
      onWheel={handleWheel}
      ref={scrollRef}
      className="App flex flex-row overflow-x-scroll overflow-y-hidden"
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </div>
  );
}

export default App;
