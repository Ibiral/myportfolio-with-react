import About from "./components/about/About";
import Introduction from "./components/introduction/Introduction";
import ProjectsList from "./components/projectsList/ProjectsList";

const App = () => {
  return (
    <div>
      <Introduction />
      <About />
      <ProjectsList />
    </div>
  );
};

export default App;
