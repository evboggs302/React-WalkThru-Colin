import "./App.css";
import StateTracker from "./Comps/State_Tracker";

function App() {
  return (
    <div>
      <StateTracker person={"Colin"} />
      <br />
      <StateTracker person={"Breezy"} />
    </div>
  );
}

export default App;
