import axios from "axios";
import { useState, useEffect } from "react";
import {
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { GoStack } from "react-icons/go";
import BarChartComponent from "../barChart/BarChartComponent";
import PieChartComponent from "../pieChart/PieChartComponent";
import ScatterChartComponent from "../scatterChart/ScatterChartComponent";
import LineChartComponent from "../lineChart/LineChartComponent";

function Home(props) {
  const [chartData, setChartData] = useState([]);
  const [sectorData, setSectorData] = useState([]);

  useEffect(() => {
    if (props) {
      const fetchData = async () => {
        try {
          const chartData = await axios.post(
            "http://localhost:3000/data",
            props.data
          );
          // console.log(data)
          setChartData(chartData.data.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, [props]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartData = await axios.post("http://localhost:3000/data", {});
        // console.log(data)
        setChartData(chartData.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const sectors = chartData.map((item) => item.sector);
  const uniqueSector = [...new Set(sectors)];

  const countries = chartData.map((item) => item.country);
  const uniqueCountries = [...new Set(countries)];

  const topics = chartData.map((item) => item.topic);
  const uniqueTopics = [...new Set(topics)];

  const sources = chartData.map((item) => item.source);
  const uniqueSources = [...new Set(sources)];

  useEffect(() => {
    const sectors = chartData.map((item) => item.sector);
    const sectorsValue = async () => {
      let obj = {};
      for (let i = 0; i < sectors.length; i++) {
        obj[sectors[i]] ? obj[sectors[i]]++ : (obj[sectors[i]] = 1);
      }
      let result = Object.entries(obj).map((e) => ({
        name: e[0],
        value: e[1],
      }));
      setSectorData([result]);
    };
    sectorsValue();
  }, [chartData]);
  // console.log(sectorData);

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>SOURCES</h3>
            <GoStack className="card_icon" color="#fff" />
          </div>
          <h1>{uniqueSources.length}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>COUNTRIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{uniqueCountries.length}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>SECTORS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{uniqueSector.length}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TOPICS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{uniqueTopics.length}</h1>
        </div>
      </div>

      <div className="charts">
        <BarChartComponent data={chartData} />
      </div>
      <div
        className="charts"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PieChartComponent data={sectorData[0]} />
      </div>
      <div className="charts">
        <ScatterChartComponent data={chartData} />
      </div>
      <div className="charts">
        <LineChartComponent data={chartData} />
      </div>
    </main>
  );
}

export default Home;
