import React from 'react';
 import './App.css';
 import Header from './views/Header';
 import Chart from './views/Chart';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
    };
  }
  
   render() {
     return (
       <div className="app-container">
         <Header />
         <Chart dataLine={this.state.dataLine} />
       </div>
     );
   }
 }
 
 export default App;