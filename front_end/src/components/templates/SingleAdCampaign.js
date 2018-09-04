import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class SingleAdCampaign extends React.Component {
  state = {
    campaignTitle: '',
    ad: { adTitle: 'Default Titleaefawea', adCopy: 'Default Text', imgURL: '' },
    adNetworkID: '',
    status: 'Paused',
    campaignObjective: 'LeadGeneration',
    template: 'Single',
  }

  componentDidMount = () => {
    axios.get('http://localhost:3050/api/templates/1')
      .then(res => {
        const data = res.data;
        this.setState({
          ad: {
            adTitle: data.adTitle,
            adCopy: data.adCopy,
            imgURL: '',
          },
          campaignObjective: data.campaignObjective,
        });
      })
  }

  handleCampaignTitleChange = e => {
    this.setState({ campaignTitle: e.target.value })
  }

  handleAdTitleChange = e => {
    const updatedAd = { ...this.state.ad, adTitle: e.target.value }
    this.setState({ ad: updatedAd });
  }

  handleAdCopyChange = e => {
    const updatedAd = { ...this.state.ad, adCopy: e.target.value }
    this.setState({ ad: updatedAd });
  }

  handleAdImgChange = e => {
    const updatedAd = { ...this.state.ad, imgURL: e.target.value }
    this.setState({ ad: updatedAd });
  }

  handleURLChange = e => {
    this.setState({ url: e.target.value });
  }

  handleURLSubmit = e => {
    e.preventDefault();
    axios({
      method: "GET",
      url: this.state.url,
    })
      .then(res => {
        const data = res.data[0];
        const loadedAd = {
          adTitle: data.Name,
          adCopy: data.Description,
          price: data.Price,
          imgURL: data.Image
        }
        this.setState({ ad: loadedAd })
      })
      .catch(err => {
        console.log('Connection error:', err)
      })
  }

  handleObjectiveChange = e => {
    e.preventDefault();
    this.setState({ campaignObjective: e.target.value })
  }

  handleTemplateTypeChange = e => {
    e.preventDefault();
    this.setState({ templateType: e.target.value })
  }

  handleStatusChange = e => {
    e.preventDefault();
    this.setState({ status: e.target.value })
  }

  handleNetworkIDChange = e => {
    e.preventDefault();
    this.setState({ adNetworkID: e.target.value })
  }

  handleSaveClick = e => {
    e.preventDefault();
    this.props.handleSaveClick(this.state);
  }

  handlePublishClick = e => {
    e.preventDefault();
    this.props.handlePublishClick(this.state);
  }


  render() {
    return (
      <div>
        <h3>Single Ad Campaign</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Campaign Title:
              <input type="text" onChange={this.handleCampaignTitleChange}/>
            </label>
            <label>
              Load Product from API (URL Optional):
              <input type="text" onChange={this.handleURLChange}/>
            </label>
            <button onClick={this.handleURLSubmit}>Go!</button>
          </div>
          <br></br>
          <div>
            <label>
              Ad Title:
              <input
                type="text"
                value={this.state.ad.adTitle}
                onChange={this.handleAdTitleChange}
              />
            </label>
            <label>
              Ad Copy:
              <textarea
                type="text"
                value={this.state.ad.adCopy}
                onChange={this.handleAdCopyChange}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                value={this.state.ad.imgURL}
                onChange={this.handleAdImgChange}
              />
            </label>
          </div>
          <br></br>

          <div>
            <label>
              Campaign Objective:
              <select onChange={this.handleObjectiveChange} value={this.state.campaignObjective}>
                <option value="LeadGeneration">LeadGeneration</option>
                <option value="Conversions">Conversions</option>
                <option value="Impressions">Impressions</option>
              </select>
            </label>
          </div>
          <br></br>

          <div>
            <label>
              Status
              <select onChange={this.handleStatusChange} value={this.state.status}>
                <option value="Paused">Paused</option>
                <option value="Implemented">Implemented</option>
              </select>
            </label>

            <label>
              Ad Network ID (optional):
              <input type="text" onChange={this.handleNetworkIDChange}/>
            </label>
          </div>
          <br></br>
          <div>
            <button onClick={this.handleSaveClick}>Save</button>
            <Link onClick={this.handlePublishClick} to='/publish'>Publish</Link>
          </div>
        </form>
      </div>
    )
  };
};

export default SingleAdCampaign;
