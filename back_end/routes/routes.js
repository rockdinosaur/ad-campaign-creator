const TemplatesController = require('../controllers/templates_controller');
const CampaignsController = require('../controllers/campaigns_controller');

module.exports = app => {
  app.get('/api/templates/1', TemplatesController.generateSingleAd)
  app.get('/api/templates/2', TemplatesController.generateCarouselAd)
  app.get('/api/templates/3', TemplatesController.generateSliderAd)

  app.post('/api/campaigns', CampaignsController.create)
};
