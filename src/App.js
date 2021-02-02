import "./App.css";
import StateTracker from "./Comps/State_Tracker";

function App(props) {
  return (
    <div>
      <StateTracker person={"Colin"} {...props} />
      <br />
      <StateTracker person={"Breezy"} />
    </div>
  );
}

export default App;
