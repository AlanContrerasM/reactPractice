import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent title="ClassComponent props.title" />
      <FunctionalComponent title="FunctionalComponent props title"/>
    </div>
  );
}

export default App;
