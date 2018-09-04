import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import CampaignHeader from './components/CampaignHeader';
import SingleAdCampaign from './components/templates/SingleAdCampaign'
import CarouselCampaign from './components/templates/CarouselCampaign'
import SliderCampaign from './components/templates/SliderCampaign'

import './App.css';

class App extends Component {
  handleSaveClick = data => {
    axios.post('http://localhost:3050/api/campaigns', data)
      .then(res => console.log(res.data))
      .catch(err => console.log("Save error", err))
  }

  handlePublishClick = data => {
    // axios.post('https://facebook.com/api', data)
    //   .then(res => console.log("Published to Facebook successfully!"))
    //   .catch(err => console.log("Publish error", err))
    console.log(data);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Shoelace Ad Campaign Creator</h1>
        <CampaignHeader />
          <Switch>
            <Route
              exact
              path='/templates/1'
              render={() =>
                <SingleAdCampaign
                  handleSaveClick={this.handleSaveClick}
                  handlePublishClick={this.handlePublishClick}
                />}
            />
            <Route
              exact
              path='/templates/2'
              render={() =>
                <CarouselCampaign
                  handleSaveClick={this.handleSaveClick}
                  handlePublishClick={this.handlePublishClick}
                />}
            />
            <Route
              exact
              path='/templates/3'
              render={() =>
                <SliderCampaign
                  handleSaveClick={this.handleSaveClick}
                  handlePublishClick={this.handlePublishClick}
                />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
