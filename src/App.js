import React, { useState } from 'react';
 import './App.css';
 import Header from './views/Header';
 import Chart from './views/Chart';

// function App() {
//   const [stashAwayData, setStashAwayData] = useState({    dataLine: {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(225, 204,230, .3)",
//           borderColor: "rgb(205, 130, 158)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(205, 130,1 58)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220,1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//           label: "My Second dataset",
//           fill: true,
//           lineTension: 0.3,
//           backgroundColor: "rgba(184, 185, 210, .3)",
//           borderColor: "rgb(35, 26, 136)",
//           borderCapStyle: "butt",
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: "miter",
//           pointBorderColor: "rgb(35, 26, 136)",
//           pointBackgroundColor: "rgb(255, 255, 255)",
//           pointBorderWidth: 10,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: "rgb(0, 0, 0)",
//           pointHoverBorderColor: "rgba(220, 220, 220, 1)",
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [28, 48, 40, 19, 86, 27, 90]
//         }
//       ]
//     }})

//     const areaData = { dataLine: {
//       labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//       datasets: [
//         {
//           label: "Product-1",
//           data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
//           backgroundColor: "#2196f3",
//           borderColor: "#0c83e2",
//           borderWidth: 1,
//           fill: true,
//           datasetKeyProvider: "key1"
//         },
//         {
//           label: "Product-2",
//           data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
//           backgroundColor: "#19d895",
//           borderColor: "#15b67d",
//           borderWidth: 1,
//           fill: true,
//           datasetKeyProvider: "key2"
//         }
//       ]
//     }
     
//     };
//   return (
//     <div className="app-container">
//       <Header />
//       <Line data={areaData} options={{ responsive: true }} /> 
//     </div>
//   )
// }
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