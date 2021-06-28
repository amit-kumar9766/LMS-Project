import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {Loading} from './components/resueable/Loading';
const App = React.lazy(() => import("./components/App"));

const MyApp = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("app"));
