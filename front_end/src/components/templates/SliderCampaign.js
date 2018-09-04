import React from 'react';
import axios from 'axios';

const defaultAds = [
  { adTitle: 'Default Title1', adCopy: 'Default Text1', imgURL: ''},
  { adTitle: 'Default Title2', adCopy: 'Default Text2', imgURL: ''},
  { adTitle: 'Default Title3', adCopy: 'Default Text3', imgURL: ''},
]

class SliderCampaign extends React.Component {
  state = {
    campaignTitle: '',
    ads: defaultAds,
    adNetworkID: '',
    status: 'Paused',
    template: 'Slider',
  }

  componentDidMount = () => {
    axios.get('http://localhost:3050/api/templates/3')
      .then(res => this.loadDefaultValues(res))
  }

  loadDefaultValues = res => {
    const data = res.data;
    const ads = data.ads.map(ad => { return { ...ad, imgURL: '' }});
    this.setState({
      ads,
      campaignObjective: data.campaignObjective,
    });
  }

  handleCampaignTitleChange = e => {
    this.setState({ campaignTitle: e.target.value })
  }

  handleAdTitleChange = idx => e => {
    const updatedAds = this.state.ads.map((ad, i) => {
      if (idx !== i) return ad;
      return { ...ad, adTitle: e.target.value };
    });

    this.setState({ ads: updatedAds });
  }

  handleAdCopyChange = idx => e => {
    const updatedAds = this.state.ads.map((ad, i) => {
      if (idx !== i) return ad;
      return { ...ad, adCopy: e.target.value };
    });

    this.setState({ ads: updatedAds });
  }

  handleAdImgChange = idx => e => {
    const updatedAds = this.state.ads.map((ad, i) => {
      if (idx !== i) return ad;
      return { ...ad, imgURL: e.target.value };
    });

    this.setState({ ads: updatedAds });
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
        const loadedAds = res.data.map(data => {
          return {
            adTitle: data.Name,
            adCopy: data.Description,
            price: data.Price,
            imgURL: data.Image
          }
        })
        this.setState({ ads: loadedAds })
      })
      .catch(err => {
        console.log('Connection error:', err)
      })
  }

  handleAddClick = e => {
    e.preventDefault();

    this.setState(prevState => {
      return { ads: prevState.ads.concat(
        { adTitle: `Default Title${prevState.ads.length + 1}`, adCopy: `Default Text${prevState.ads.length + 1}`, imgURL: ''}
      )}
    })
  }

  handleObjectiveChange = e => {
    e.preventDefault();
    this.setState({ campaignObjective: e.target.value })
  }

  handleTemplateTypeChange = e => {
    e.preventDefault();
    this.setState({ template: e.target.value })
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>Multi Ad Campaign</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Campaign Title:
              <input type="text" onChange={this.handleCampaignTitleChange}/>
            </label>

            <label>
              Load Products from API (URL Optional):
              <input type="text" onChange={this.handleURLChange}/>
            </label>
            <button onClick={this.handleURLSubmit}>Go!</button>
          </div>

          <br></br>
          {this.state.ads.map((ad, idx) =>(
            <div key={idx}>
              <label>
                Ad Title:
                <input
                  type="text"
                  value={ad.adTitle}
                  onChange={this.handleAdTitleChange(idx)}
                />
              </label>
              <label>
                Ad Copy:
                <textarea
                  type="text"
                  value={ad.adCopy}
                  onChange={this.handleAdCopyChange(idx)}
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  value={ad.imgURL}
                  onChange={this.handleAdImgChange(idx)}
                />
              </label>
              <br></br>
            </div>

          ))}
          <br></br>
          <div>
            <button onClick={this.handleAddClick}>Add Ad</button>
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

            <label>
              Template Type:
              <select onChange={this.handleTemplateTypeChange} value={this.state.template}>
                <option value="Carousel">Carousel</option>
                <option value="Slider">Slider</option>
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
            <input type="submit" value="Publish Campaign"/>
          </div>
        </form>
      </div>
    )
  };
};

export default SliderCampaign;
