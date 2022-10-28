import TracePage from './components/TracePage';
import WithTraceContext from "./contexts/TraceContext";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <WithTraceContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TracePage />} />
            <Route path="/trace/:traceId" element={<TracePage />} />
          </Routes>
        </BrowserRouter>
      </WithTraceContext>
    </div>
  );
}

export default App;
