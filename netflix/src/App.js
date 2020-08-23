import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror & Suspense" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
