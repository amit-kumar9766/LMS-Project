import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const App = React.lazy(() => import("./components/App"));

const MyApp = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("app"));
