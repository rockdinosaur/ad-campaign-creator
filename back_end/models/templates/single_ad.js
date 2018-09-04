const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  adTitle: {
    type: String,
    default: 'Default Title',
    required: true,
  },
  adCopy: {
    type: String,
    default: 'Default Text',
    validate: {
      validator: adCopy => adCopy.length >= 2,
      message: "Ad copy must be at least 2 characters long."
    },
    required: [true, 'Ad copy is required.'],
  },
  campaignObjective: {
    type: String,
    default: 'LeadGeneration',
    required: [true, 'Campaign objective is required.'],
  }
})

const SingleAd = mongoose.model('SingleAd', TemplateSchema);

module.exports = SingleAd;
