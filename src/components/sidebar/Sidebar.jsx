import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill, BsLightningCharge } from "react-icons/bs";
import {
  FcCalendar,
  FcFilledFilter,
  FcGlobe,
  FcLike,
  FcOpenedFolder,
  FcPieChart,
  FcStackOfPhotos,
} from "react-icons/fc";
import YearPicker from "react-single-year-picker";

function Sidebar(props) {
  const [chartData, setChartData] = useState([]);
  const [searchText, setSearchText] = useState({});
  // console.log(searchText);

  const fetchData = async () => {
    let data = await axios.post("http://localhost:3000/data", {});
    // console.log(data.data.data);
    setChartData(data.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = async () => {
    props.data(searchText);
    setSearchText("")
  };

  const years = chartData.map((item) => item.end_year).sort((a, b) => a - b);
  const uniqueYears = [...new Set(years)];
  //   console.log(uniqueYears);

  const topics = chartData.map((item) => item.topic);
  const uniqueTopics = [...new Set(topics)];

  const sectors = chartData.map((item) => item.sector);
  const uniqueSector = [...new Set(sectors)];

  const countries = chartData.map((item) => item.country);
  const uniqueCountries = [...new Set(countries)];

  const regions = chartData.map((item) => item.region);
  const uniqueRegions = [...new Set(regions)];

  const sources = chartData.map((item) => item.source);
  const uniqueSources = [...new Set(sources)];

  const likelihoods = chartData
    .map((item) => item.likelihood)
    .sort((a, b) => a - b);
  const uniqueLikelihoods = [...new Set(likelihoods)];

  const relevances = chartData
    .map((item) => item.relevance)
    .sort((a, b) => a - b);
  const uniqueRelevances = [...new Set(relevances)];

  const intensities = chartData
    .map((item) => item.intensity)
    .sort((a, b) => a - b);
  const uniqueIntensities = [...new Set(intensities)];

  return (
    <aside id="sidebar">
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          style={{
            backgroundColor: "white",
            fontSize: 20,
            letterSpacing: 3,
            fontWeight: 900,
          }}
        >
          <FcFilledFilter className="icon" style={{ fontSize: 35 }} />
          FILTER BY
        </li>
        <div className="sidebar-list-item">
          <FcCalendar className="icon" />
          End year
          <YearPicker
            yearArray={uniqueYears}
            value={searchText.end_year}
            onSelect={(e) => setSearchText({ ...searchText, end_year: e })}
            hideInput={false}
          />
        </div>
        <li className="sidebar-list-item">
          <FcOpenedFolder className="icon" />
          Topic
          <div style={{ marginTop: 10 }}>
            <select
              style={{width:200, paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, topic: e.target.value })
              }
            >
              {uniqueTopics.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <FcPieChart className="icon" />
          Sector
          <div style={{ marginTop: 10 }}>
            <select
              style={{width:200, paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, sector: e.target.value })
              }
            >
              {uniqueSector.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <FcGlobe className="icon" />
          Region
          <div style={{ marginTop: 10 }}>
            <select
              style={{width:200, paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, region: e.target.value })
              }
            >
              {uniqueRegions.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <FcStackOfPhotos className="icon" />
          Source
          <div style={{ marginTop: 10 }}>
            <select
              style={{width:200, paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, source: e.target.value })
              }
            >
              {uniqueSources.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <FcGlobe className="icon" />
          Country
          <div style={{ marginTop: 10 }}>
            <select
              style={{ width:200,paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, country: e.target.value })
              }
            >
              {uniqueCountries.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <FcLike className="icon" />
          Likelihood
          <div style={{ marginTop: 10 }}>
            <select
              style={{ width:50,paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, likelihood:parseInt( e.target.value) })
              }
            >
              {uniqueLikelihoods.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <BsFillCheckCircleFill color="#00FF00" className="icon" />
          Relevance
          <div style={{ marginTop: 10 }}>
            <select
              style={{ width:50,paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, relevance:parseInt( e.target.value) })
              }
            >
              {uniqueRelevances.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
        <li className="sidebar-list-item">
          <BsLightningCharge color="#00FFFF" className="icon" />
          Intensity
          <div style={{ marginTop: 10 }}>
            <select
              style={{ width:50,paddingInline: 10, paddingTop: 5, paddingBottom: 5 }}
              onChange={(e) =>
                setSearchText({ ...searchText, intensity:parseInt( e.target.value) })
              }
            >
              {uniqueIntensities.map((e) => {
                return (
                  <option key={e} style={{ fontWeight: 900 }}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
      </ul>
      <button
        type="submit"
        style={{
          marginLeft: 10,
          marginBottom: 20,
          padding: 10,
          paddingRight: 50,
          paddingLeft: 50,
          borderRadius: 40,
          elevation: 10,
          fontSize: 18,
          fontWeight: 900,
          color: "white",
          backgroundColor: "green",
        }}
        onClick={searchHandler}
      >
        Search
      </button>
    </aside>
  );
}

export default Sidebar;
