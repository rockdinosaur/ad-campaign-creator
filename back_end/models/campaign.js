const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  ads: {
    type: Array,
    validate: {
      validator: ads => ads.length >= 1,
      message: "Campaign must contain at least 1 ad."
    },
    required: true,
  },
  campaignObjective: {
    type: String,
    required: [true, 'Campaign objective is required.'],
  },
  status: {
    type: String,
    required: [true, 'Campaign must have a status.']
  },
  adNetworkID: {
    type: String,
    default: '',
  },
  template: {
    type: String,
    required: [true, 'Campaign must have a template type.']
  }
})

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;
