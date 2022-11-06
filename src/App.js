import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchResultVideos from './SearchResultVideos';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <div className="app__page">
            <Sidebar />
            <Routes>
              <Route path="/" element={<RecommendedVideos />} />
              <Route path="/search/:searchTerm" element={<SearchResultVideos />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
