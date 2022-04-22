import { connect } from "react-redux";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    seconds: state.seconds,
    minutes: state.minutes,
    hours: state.hours,
  };
};

export default connect(mapStateToProps)(App);
