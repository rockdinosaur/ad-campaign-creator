const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultAds = [
  { adTitle: 'Default Title1', adCopy: 'Default Text1' },
  { adTitle: 'Default Title2', adCopy: 'Default Text2' },
  { adTitle: 'Default Title3', adCopy: 'Default Text3' },
]

const TemplateSchema = new Schema({
  ads: {
    type: Array,
    default: defaultAds,
    validate: {
      validator: ads => ads.length >= 3,
      message: "Carousel must contain 3 or more ads."
    },
    required: true,
  },
  campaignObjective: {
    type: String,
    default: 'Impressions',
    required: [true, 'Campaign objective is required.'],
  },
})

const SliderAd = mongoose.model('SliderAd', TemplateSchema);

module.exports = SliderAd;
