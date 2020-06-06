import React, {Suspense, lazy} from 'react';
import Header from './views/Header';
import './App.css';
const ChartComponent = lazy(() => import("./views/Chart"));

const App = () => {
  return (
    <div className="stashaway-container">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ChartComponent />
      </Suspense>
    </div>
  );
}
 
 export default React.memo(App);