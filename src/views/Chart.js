import React, { useState, useEffect, lazy } from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios';
import './Chart.css';
const Dropdown = lazy(() => import("../shared/Dropdown"));
const Currencytabs = lazy(() => import("../shared/Tabs"));

const Chart = (props) => {
  const mappingObj = {
    '20 80 Portfolio' : '2080Portfolio',
    '40 60 Portfolio' : '4060portfolio',
  }
  const [ selectedPortFolioAPI, setSelectedPortFolioAPI] = useState('2080Portfolio')
  const [selectedPortFolioName, setPortFolioValue] = useState('20 80 Portfolio')
  const [chartData, setChartData] = useState([])
  const [errorState, setErrorState] = useState(false)
  const [currency, setCurrencyType] = React.useState(0);

  const getChartConfig = (chartData, selectedPortFolioName) => ({
    title: {
      text: "Portfolio value based on gross returns"
    },
    legend: {
      enabled: true
  },
    chart: {
      backgroundColor: 'white',
      polar: true,
      type: 'line'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Years'
      }
    },
    tooltip: {
      formatter: function () {
        var formatStr = "";

        for (var i = 0; i < this.points.length; i++) {
          var point = this.points[i];
          var date = new Date(point.x);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let amount = currency === 0 ?  50* point.y + '<b> SGD </b>' :  70 * point.y + '<b> USD </b>';
          formatStr += `<b>Date: </b> ${day}/${month}/${year}</span><br/>`
          // Highcharts wont format the numbers (point.y) once we've taken control of the tooltip
          formatStr += '<span style="color:' + point.color + '">●</span>' + point.series.name + ':  <b>' + amount + '</b><br/>';
        }

        return formatStr;
      },
      shared: true
    },
    yAxis: {
      title: {
        text: '% change'
      },
      labels: {
        color: 'white',
        align: 'left',
        formatter: function () {
          return (this.value > 0 ? " + " : "") + this.value + "%";
        }
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: "silver"
        }
      ]
    },
    series: [
      {
        data: (chartData && chartData[0] && chartData[0].data && chartData[0].data.stashAwayPortfolio) || [],
        name: 'StashAway Portfolio',
        color: '#0a0631'
      },
      {
        data: (chartData && chartData[1] && chartData[1].data && chartData[1].data[selectedPortFolioAPI]) || [],
        name: selectedPortFolioName,
        color: 'yellow'
      }
    ]
  })

  useEffect(() => {
    const fetchData = async () => {
      await axios.all([
        axios.get('/stashAwayPortfolio'),
        axios.get(`/${selectedPortFolioAPI}`),
      ])
        .then(result => {
          setChartData(result)
        })
        .catch(error => {
          setErrorState(true);
          console.log('something went wrong')
        });
      }
    fetchData();
  }, [selectedPortFolioAPI]);

  const handleChange = (event) => {
    setPortFolioValue(event.target.value);
    const getValue = mappingObj[event.target.value];
    setSelectedPortFolioAPI(getValue);
  };

  const setCurrency = (event, currency) => {
    setCurrencyType(currency)
  }

  const chartConfig = getChartConfig(chartData, selectedPortFolioName, selectedPortFolioAPI);
  console.log(chartConfig)
  return (
    <section className="main-content">
      <div className="portfolio-heading">Portfolio benchmark</div>
      <div className="dropdown-section">
        <div className="invest-heading">
          <div className="gen-heading">General Investing</div>
          <div className="index-heading">StashAway Portfolio</div>
        </div>
        <div className="vs">Vs</div>
        <div>
          <Dropdown
            handleChange={handleChange}
            selectedPortFolioName={selectedPortFolioName}
          />
        </div>
      </div>
      <div className="currency-tabs">
          <Currencytabs
            currency={currency}
            setCurrency={setCurrency}
          />
      </div>
      <div>
        {!errorState ? (
          <div className="high-charts">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={chartConfig}
            /></div>) : (
            <div className="error-msg">Something went worng</div>
         )}
      </div>
    </section>
  )
}

export default React.memo(Chart);