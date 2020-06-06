import React, {Suspense, lazy} from 'react';
 import './App.css';
 import Header from './views/Header';
 const ChartComponent = lazy(() => import("./views/Chart"));

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ChartComponent />
      </Suspense>
    </div>
  );
}
 
 export default React.memo(App);