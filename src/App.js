import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchResultVideos from './SearchResultVideos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isExpanded:true, menuSelectedFlag:[true,false,false,false,false,false,false,false,false]};
    this.menuSizeChange = this.menuSizeChange.bind(this);
    this.updateMenuFlag = this.updateMenuFlag.bind(this);
  }

  menuSizeChange(expandedFlag) {
    this.setState(state=>({...state, isExpanded:(!expandedFlag)}));
  }

  updateMenuFlag(index) {
    if(index!==8) {
        this.setState(state=>{
            let newFlag = state.menuSelectedFlag.map(element=>false);
            newFlag[index]=true;
            return {...state, menuSelectedFlag:newFlag};
        });
    }
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header expanded={this.state.isExpanded} menuSize={this.menuSizeChange} updateMenu={this.updateMenuFlag} />
          <div className="app__page">
            <Sidebar expanded={this.state.isExpanded} 
            menuFlags={this.state.menuSelectedFlag} updateMenu={this.updateMenuFlag} />
            <Routes>
              <Route path="/" element={<RecommendedVideos expanded={this.state.isExpanded} menuSize={this.menuSizeChange} />} />
              <Route path="/search/:searchTerm" element={<SearchResultVideos menuSize={this.menuSizeChange} />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
