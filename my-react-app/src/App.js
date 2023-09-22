import "./App.css";
import MyEvent from "./concepts/MyEvent";
import Component from "./concepts/MyComponent";
import MyCondition from "./concepts/MyCondition";
import MyList from "./concepts/MyList";
import MyUseState from "./hookConcept/MyUseState";
import MyUseEffect from "./hookConcept/MyUseEffect";
import MyUseContent from "./hookConcept/MyUseContent";
import MyUseRef from "./hookConcept/MyUseRef";
import MyUseReducer from "./hookConcept/MyUseReducer";
import MyUseCallback from "./hookConcept/MyUseCallback";

function App(props) {
  const hello = (
    <div>
      <h1>hello world REACTJS</h1>
    </div>
  );
  return (
    <>
      <div className="App">
        {hello}
        <h1>I. basic concept</h1>
        <MyEvent message="my event" />
        <Component name="Mycomponent" />
        <MyCondition check="true" />
        <MyList list={["1", "2", "3"]} />

        <h1>II. hook concept</h1>
        <MyUseState />
        <MyUseEffect />
        <MyUseContent />
        <MyUseRef />
        <MyUseReducer />
        <MyUseCallback />
      </div>
      ;
    </>
  );
}

export default App;
