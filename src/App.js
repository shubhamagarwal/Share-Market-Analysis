import React from 'react';
 import './App.css';
 import Header from './views/Header';
//  import Chart from './views/Chart';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      {/* <Chart /> */}
    </div>
  );
}
 
 
 export default React.memo(App);