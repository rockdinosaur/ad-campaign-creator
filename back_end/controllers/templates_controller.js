const SingleAd = require('../models/templates/single_ad');
const CarouselAd = require('../models/templates/carousel_ad')
const SliderAd = require('../models/templates/slider_ad')

module.exports = {
  generateSingleAd(req, res) {
    const template = new SingleAd();
    res.send(template);
  },

  generateCarouselAd(req, res) {
    const template = new CarouselAd();
    res.send(template);
  },

  generateSliderAd(req, res) {
    const template = new SliderAd();
    res.send(template);
  },
}
