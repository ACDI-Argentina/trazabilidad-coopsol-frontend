import TracePage from './components/TracePage';
import WithTraceContext from "./contexts/TraceContext";

function App() {
  return (
    <div className="App">
      <WithTraceContext>
        <TracePage />
      </WithTraceContext>
    </div>
  );
}

export default App;
