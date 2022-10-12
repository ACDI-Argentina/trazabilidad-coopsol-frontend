
import objectHash from 'object-hash';
import { useEffect } from 'react';
import TracePage from './components/TracePage';
import WithTraceContext from "./contexts/TraceContext";

function App() {
  useEffect(() => {
    const hashed = objectHash({a:"bb"}, {algorithm: "SHA256", encoding:"hex"});
    console.log(hashed);
  },[])
  return (
    <div className="App">
      <WithTraceContext>
        <TracePage />
      </WithTraceContext>
    </div>
  );
}

export default App;
