import React from "react";
import NavBar from "./NavBar";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />

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
