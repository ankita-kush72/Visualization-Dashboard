import React, { useEffect, useState } from "react";
import EnergyInsights from "../Chats/EnergyInsights";
import SimpleBarChart from "../Chats/SimpleBarChart";
import ScatterChartWithCells from "../Chats/ScatterChartWithCells";
import SimpleRadarChart from "../Chats/SimpleRadarChart";
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  const [datapoints, setDatapoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOptionEndYear, setSelectedOptionEndYear] = useState("");
  const [selectedOptionTopics, setSelectedOptionTopics] = useState("");
  const [selectedOptionSectors, setSelectedOptionSectors] = useState("");
  const [selectedOptionRegions, setSelectedOptionRegions] = useState("");
  const [selectedOptionPestle, setSelectedOptionPestle] = useState("");
  const [selectedOptionSource, setSelectedOptionSource] = useState("");
  const [selectedOptionInsight, setSelectedOptionInsight] = useState("");
  const [selectedOptionCountry, setSelectedOptionCountry] = useState("");
  const [selectedOptionLikelihood, setSelectedOptionLikelihood] = useState("");
  const [filteredDatapoints, setFilteredDatapoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch("http://127.0.0.1:8000/get_data/");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setDatapoints(data);
        setFilteredDatapoints(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(error.message);
        setLoading(true);
      }
    };


    fetchData();


  }, []);


  const getSortedUniqueValues = (array, key) => {
    return [...new Set(array.map(item => item[key]))].sort();
  };

  const unique_end_years = getSortedUniqueValues(datapoints, 'end_year');
  const unique_topics = getSortedUniqueValues(datapoints, 'topic');
  const unique_sectors = getSortedUniqueValues(datapoints, 'sector');
  const unique_regions = getSortedUniqueValues(datapoints, 'region');
  const unique_PEST = getSortedUniqueValues(datapoints, 'pestle');
  const unique_Source = getSortedUniqueValues(datapoints, 'source');
  const unique_Insight = getSortedUniqueValues(datapoints, 'insight');
  const unique_Country = getSortedUniqueValues(datapoints, 'country');
  const unique_Likelihood = getSortedUniqueValues(datapoints, 'likelihood');


  setTimeout(() => {
    setLoading(false);
  }, 5000);


  useEffect(() => {
    const filteredData = datapoints.filter((datapoint) => {
      return (
        (!selectedOptionEndYear || datapoint.end_year === selectedOptionEndYear) &&
        (!selectedOptionTopics || datapoint.topic === selectedOptionTopics) &&
        (!selectedOptionSectors || datapoint.sector === selectedOptionSectors) &&
        (!selectedOptionRegions || datapoint.regions === selectedOptionRegions) &&
        (!selectedOptionPestle || datapoint.pestle === selectedOptionPestle) &&
        (!selectedOptionSource || datapoint.source === selectedOptionSource) &&
        (!selectedOptionInsight || datapoint.insight === selectedOptionInsight) &&
        (!selectedOptionCountry || datapoint.country === selectedOptionCountry) &&
        (!selectedOptionLikelihood || datapoint.likelihood === selectedOptionLikelihood)
      );
    });

    setFilteredDatapoints(filteredData);




  }, [
    selectedOptionEndYear,
    selectedOptionTopics,
    selectedOptionSectors,
    selectedOptionRegions,
    selectedOptionPestle,
    selectedOptionSource,
    selectedOptionInsight,
    selectedOptionCountry,
    selectedOptionLikelihood,
    datapoints,
  ]);

  const resetFilters = () => {
    setFilteredDatapoints(datapoints);
    setSelectedOptionEndYear("");
    setSelectedOptionTopics("");
    setSelectedOptionSectors("");
    setSelectedOptionRegions("");
    setSelectedOptionPestle("");
    setSelectedOptionSource("");
    setSelectedOptionInsight("");
    setSelectedOptionCountry("");
    setSelectedOptionLikelihood("");
  };

  const handleEndYearChange = (e) => setSelectedOptionEndYear(e.target.value);
  const handleTopicsChange = (e) => setSelectedOptionTopics(e.target.value);
  const handleSectorsChange = (e) => setSelectedOptionSectors(e.target.value);
  const handleRegionsChange = (e) => setSelectedOptionRegions(e.target.value);
  const handlePestleChange = (e) => setSelectedOptionPestle(e.target.value);
  const handleSourceChange = (e) => setSelectedOptionSource(e.target.value);
  const handleInsightChange = (e) => setSelectedOptionInsight(e.target.value);
  const handleCountryChange = (e) => setSelectedOptionCountry(e.target.value);
  const handleLikelihoodChange = (e) => setSelectedOptionLikelihood(e.target.value);



  return (
    <div>
      <div className="select-divs">
        <h2>Select filters from here</h2>
        <div>
          <label htmlFor="endYear">Choose an Year:</label>
          <select
            id="endYear"
            value={selectedOptionEndYear}
            onChange={handleEndYearChange}
          >
            {unique_end_years.map((year, index) => (
              <option key={index} value={year}>
                {year === "" ? "Enter year" : year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="topics">Choose a Topic:</label>
          <select
            id="topics"
            value={selectedOptionTopics}
            onChange={handleTopicsChange}
          >
            {unique_topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic === "" ? "Enter topics" : topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sectors">Choose a Sector:</label>
          <select
            id="sectors"
            value={selectedOptionSectors}
            onChange={handleSectorsChange}
          >
            {unique_sectors.map((sector, index) => (
              <option key={index} value={sector}>
                {sector === "" ? "Enter Sectors" : sector}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="regions">Choose a Region:</label>
          <select
            id="regions"
            value={selectedOptionRegions}
            onChange={handleRegionsChange}
          >
            {unique_regions.map((region, index) => (
              <option key={index} value={region}>
                {region === "" ? "Enter region" : region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="insight">Choose an Insight:</label>
          <select
            id="insight"
            value={selectedOptionInsight}
            onChange={handleInsightChange}
          >
            {unique_Insight.map((insight, index) => (
              <option key={index} value={insight}>
                {insight === "" ? "Enter insight" : insight}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pestle">Choose a PEST:</label>
          <select
            id="pestle"
            value={selectedOptionPestle}
            onChange={handlePestleChange}
          >
            {unique_PEST.map((pestle, index) => (
              <option key={index} value={pestle}>
                {pestle === "" ? "Enter PEST" : pestle}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="source">Choose a Source:</label>
          <select
            id="source"
            value={selectedOptionSource}
            onChange={handleSourceChange}
          >
            {unique_Source.map((source, index) => (
              <option key={index} value={source}>
                {source === "" ? "Enter Source" : source}
              </option>
            ))}{" "}
          </select>
        </div>


        <div>
          <label htmlFor="country">Choose a Country:</label>
          <select
            id="country"
            value={selectedOptionCountry}
            onChange={handleCountryChange}
          >
            {unique_Country.map((country, index) => (
              <option key={index} value={country}>
                {country === "" ? "Enter Country" : country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="likelihood">Choose a Likelihood:</label>
          <select
            id="likelihood"
            value={selectedOptionLikelihood}
            onChange={handleLikelihoodChange}
          >
            {unique_Likelihood.map((likelihood, index) => (
              <option key={index} value={likelihood}>
                {likelihood === "" ? "Enter Likelihood" : likelihood}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className="btn btn-primary button-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

        <div>
          <p className="paraContent">
            {" "}
            Number of datasets after filter {filteredDatapoints.length}
          </p>
        </div>
      </div>

      <div>
        {loading ? (
          <div className="loading-spinner">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
            <p>Loading.....</p>
          </div>
        ) : (
          <>
            <div className="charts">
              <SimpleRadarChart datapoints={filteredDatapoints} />
            </div>
            <div className="charts">
              <EnergyInsights datapoints={filteredDatapoints} />
            </div>
            <div className="full-width-chart">
              <SimpleBarChart datapoints={filteredDatapoints} />
            </div>
            <div className="full-width-chart">
              <ScatterChartWithCells datapoints={filteredDatapoints} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
