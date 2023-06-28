import "./App.css";
import ProjectEntry from "./ProjectEntry";
import projectData from "../data/ProjectData.json";
import Particle from "./Particle";
import Hero from "./Hero";
import WidgetBoard from "./WidgetBoard";
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <WidgetBoard></WidgetBoard>
      <Particle></Particle>

      <div className="">
        {projectData.map((res, index) => (
          <ProjectEntry title={res.title} description={res.description} techstacks={res.techstacks}/>
        ))}
      </div>
    </div>
  );
}

export default App;
